import { createClient } from "contentful";

const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENT_DELIVERY_API,
})

export default client;