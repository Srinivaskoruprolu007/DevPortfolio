import { Redis } from "@upstash/redis";

const VISITOR_TTL_SECONDS = 60 * 60 * 24;
const TOTAL_VISITS_KEY = "visitor:total";
const VISITOR_KEY_PREFIX = "visitor:ip";
const BOT_USER_AGENT_PATTERN =
	/bot|crawler|spider|slurp|bingpreview|lighthouse|pagespeed|headless|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|skypeuripreview|embedly|quora link preview|google web preview|curl|wget/i;

const jsonHeaders = {
	"cache-control": "no-store",
	"content-type": "application/json; charset=utf-8",
};

export const config = {
	runtime: "edge",
};

function getRedisClient() {
	const url = process.env.UPSTASH_REDIS_REST_URL;
	const token = process.env.UPSTASH_REDIS_REST_TOKEN;

	if (!url || !token) {
		throw new Error("Missing Upstash Redis environment variables.");
	}

	return new Redis({ url, token });
}

function getClientIp(request: Request) {
	const forwardedFor = request.headers.get("x-forwarded-for");

	if (!forwardedFor) {
		return null;
	}

	const [firstIp] = forwardedFor.split(",");
	const normalizedIp = firstIp?.trim();

	return normalizedIp || null;
}

function isBotRequest(request: Request) {
	const userAgent = request.headers.get("user-agent");

	return userAgent ? BOT_USER_AGENT_PATTERN.test(userAgent) : false;
}

async function hashIpAddress(ipAddress: string) {
	const salt = process.env.VISITOR_COUNTER_HASH_SALT;
	if (!salt) {
		throw new Error("Missing VISITOR_COUNTER_HASH_SALT environment variable.");
	}
	const payload = new TextEncoder().encode(`${salt}:${ipAddress}`);
	const digest = await crypto.subtle.digest("SHA-256", payload);

	return Array.from(new Uint8Array(digest), (value) =>
		value.toString(16).padStart(2, "0"),
	).join("");
}

async function readTotalVisits(redis: Redis) {
	const currentCount = await redis.get<number>(TOTAL_VISITS_KEY);
	return typeof currentCount === "number" ? currentCount : 0;
}

function jsonResponse(body: { count: number }, init?: ResponseInit) {
	return new Response(JSON.stringify(body), {
		...init,
		headers: {
			...jsonHeaders,
			...(init?.headers ?? {}),
		},
	});
}

async function handleVisit(request: Request) {
	try {
		const redis = getRedisClient();
		const clientIp = getClientIp(request);

		if (!clientIp || isBotRequest(request)) {
			const count = await readTotalVisits(redis);
			return jsonResponse({ count });
		}

		const hashedIp = await hashIpAddress(clientIp);
		const visitorKey = `${VISITOR_KEY_PREFIX}:${hashedIp}`;

		// Atomically claim the visitor slot for 24 hours before incrementing.
		const wasStored = await redis.set(visitorKey, "1", {
			ex: VISITOR_TTL_SECONDS,
			nx: true,
		});

		const count =
			wasStored !== null
				? await redis.incr(TOTAL_VISITS_KEY)
				: await readTotalVisits(redis);

		return jsonResponse({ count });
	} catch (error) {
		console.error("Visitor counter failed", error);
		return jsonResponse({ count: 0 });
	}
}

export async function GET(request: Request) {
	return handleVisit(request);
}

export default handleVisit;
