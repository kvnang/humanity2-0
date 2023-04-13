import Image from "next/image";
import Link from "next/link";

export function VideoEntry({
  url,
  title,
  publishedAt,
  thumbnails,
  resourceId,
}: {
  url: string;
  title: string;
  publishedAt: string;
  thumbnails: Record<string, { url: string; width: number; height: number }>;
  resourceId: {
    kind: string;
    videoId: string;
  };
}) {
  const thumbnail = thumbnails.standard || thumbnails.default;

  // Format YouTube date
  const dateObj = new Date(publishedAt);

  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="relative z-0">
      <div className="flex items-start">
        <div className="w-28 lg:w-32 2xl:w-40 3xl:w-60 shrink-0 mr-4">
          <div className="w-full pb-[56.25%] relative overflow-hidden">
            <Image
              src={thumbnail.url}
              alt={title}
              fill
              sizes="(min-width: 1750px) 240px, (min-width: 1536px) 160px, (min-width: 1024px) 128px, 112px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-lg">
            <h3 className="h6 font-sans mb-1">
              <Link
                href={`https://youtube.com/watch?v=${resourceId.videoId}`}
                className="hover:underline decoration-primary underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0" />
                {title}
              </Link>
            </h3>
            <div className="text-sm text-body-tint">{formattedDate}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
