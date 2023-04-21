const ENV_URL =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

export const BASE_URL = ENV_URL
  ? new URL(`https://${ENV_URL}`)
  : new URL("http://localhost:3000");
