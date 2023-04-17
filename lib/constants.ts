export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? new URL(`https://${process.env.NEXT_PUBLIC_BASE_URL}`)
  : new URL("http://localhost:3000");
