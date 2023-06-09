import { BASE_URL } from "@/lib/constants";
import type { Metadata, ResolvedMetadata } from "next";

const siteName = "Humanity 2.0";
const defaultTitle = "Humanity 2.0 | A Shared Horizon for Humanity";
const defaultDescription =
  "Humanity 2.0 is a vehicle for facilitating collaborative ventures between the traditionally siloed public, private and faith-based sectors.";

// TODO: Migrate to filesystem metadata api when this is hosted on Vercel as VIP doesn't allow filesystem

export const defaultMetadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: ["human", "flourishing"],
  creator: "Humanity 2.0",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    url: "/",
    siteName,
    locale: "en-US",
  },
  // manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    // creator: "@Crux",
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: BASE_URL,
};

export const getMetadata = (
  {
    pathname = "/",
    title,
    description,
    image,
  }: {
    pathname?: string;
    title?: string;
    description?: string;
    image?: {
      url: string;
      alt?: string;
    };
  },
  parent?: ResolvedMetadata
) => ({
  title,
  description,
  openGraph: {
    ...parent?.openGraph,
    title,
    description,
    url: pathname,
  },
  twitter: {
    ...parent?.twitter,
    title,
    url: pathname,
    description,
  },
  alternates: {
    canonical: pathname,
  },
});
