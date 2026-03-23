import { useEffect, useState } from "react";

type VisitorCountResponse = {
  count: number;
};

type VisitorCounterStatus = "loading" | "ready" | "error";

type VisitorCounterProps = {
  variant?: "compact" | "panel";
};

function readDevelopmentVisitorCount() {
  if (!import.meta.env.DEV) {
    return null;
  }

  const rawCount = import.meta.env.VITE_DEV_VISITOR_COUNT;

  if (rawCount === undefined || rawCount === "") {
    return null;
  }

  const parsedCount = Number(rawCount);

  if (!Number.isFinite(parsedCount) || parsedCount < 0) {
    console.warn("Ignoring invalid VITE_DEV_VISITOR_COUNT:", rawCount);
    return null;
  }

  return Math.floor(parsedCount);
}

export function VisitorCounter({
  variant = "compact",
}: VisitorCounterProps) {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<VisitorCounterStatus>("loading");

  useEffect(() => {
    const abortController = new AbortController();

    const loadVisitorCount = async () => {
      const developmentCount = readDevelopmentVisitorCount();

      if (developmentCount !== null) {
        setCount(developmentCount);
        setStatus("ready");
        return;
      }

      try {
        const response = await fetch("/api/visit", {
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`Visitor counter request failed: ${response.status}`);
        }

        const payload = (await response.json()) as VisitorCountResponse;

        if (typeof payload.count !== "number") {
          throw new Error("Visitor counter returned an invalid payload.");
        }

        setCount(payload.count);
        setStatus("ready");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error("Failed to load visitor count", error);
        setCount(0);
        setStatus("error");
      }
    };

    void loadVisitorCount();

    return () => {
      abortController.abort();
    };
  }, []);

  if (variant === "compact") {
    return (
      <div
        aria-busy={status === "loading"}
        aria-live="polite"
        className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-background/80 px-2.5 py-1 text-xs shadow-custom-sm backdrop-blur-sm ${
          status === "loading" ? "opacity-80" : ""
        }`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:inline">
          Visitors
        </span>
        <span className="font-semibold tabular-nums text-foreground">
          {count.toLocaleString()}
        </span>
      </div>
    );
  }

  return (
    <div
      aria-busy={status === "loading"}
      aria-live="polite"
      className="glass inline-flex min-w-[200px] items-center justify-between gap-4 rounded-full px-4 py-2 text-left shadow-custom-sm"
    >
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Visitor Count
        </p>
        <p className="text-xs text-muted-foreground">
          Unique IPs refresh every 24 hours
        </p>
      </div>
      <p className="text-lg font-semibold text-foreground">
        {count.toLocaleString()}
      </p>
    </div>
  );
}
