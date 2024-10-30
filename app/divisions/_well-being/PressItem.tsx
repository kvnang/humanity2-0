import Image from "next/image";
import * as React from "react";

async function PressItemContent({ url }: { url: string }) {
  // Get favicon, title, and description from URL
  const response = await fetch(url);
  const html = await response.text();
  // Get title using regex
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
  // or try og:title
  const ogTitle =
    html.match(/<meta property="og:title" content="(.*?)"/)?.[1] ?? "";

  // Get site name using regex
  const siteName =
    html.match(/<meta property="og:site_name" content="(.*?)"/)?.[1] ?? "";

  // Get published date using regex
  const publishedDate =
    html.match(
      /<meta property="article:published_time" content="(.*?)">/
    )?.[1] ?? "";

  // Get favicon using Google's favicon API
  const domain = new URL(url).hostname;
  const size = 32;
  const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

  return (
    <article>
      <div className="mb-2 flex items-center">
        <div className="w-5 h-5 shrink-0 mr-2 bg-gray-100 rounded-sm">
          <Image
            unoptimized
            src={favicon}
            alt={title || ogTitle}
            height={32}
            width={32}
            loading="lazy"
          />
        </div>
        <div className="flex-1 text-sm text-body-tint">{siteName}</div>
      </div>
      <div>
        <p className="font-semibold mb-1">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title || ogTitle}
          </a>
        </p>
        <div className="text-body-tint text-sm">
          <time>{publishedDate}</time> | Press
        </div>
      </div>
    </article>
  );
}

export function PressItem({ url }: { url: string }) {
  return (
    <React.Suspense fallback={null}>
      <PressItemContent url={url} />
    </React.Suspense>
  );
}
