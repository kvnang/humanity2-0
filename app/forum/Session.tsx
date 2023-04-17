import { Profile, ProfileProps } from "@/components/Profile";
import { PlayIcon } from "@heroicons/react/24/solid";

interface MediaProps {
  type: string;
  title: string;
  authors?: { name: string; title?: string; organization?: string }[];
  url: string;
}
export interface SessionProps {
  title: string;
  video?: {
    url: string;
    title?: string;
  };
  audio?: {
    url: string;
    title?: string;
  };
  speakers?: ProfileProps[];
  media?: MediaProps[];
}

export function Session({
  title,
  video,
  audio,
  speakers,
  media,
}: SessionProps) {
  const mainMedia = video || audio;

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center flex-wrap -mx-4 -my-2">
          <div className="px-4 py-2">
            <h3 className="h5 md:text-lg">{title}</h3>
          </div>
          {mainMedia && (
            <div className="px-4 py-2">
              <a
                href={mainMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button relative p-0.5 inline-flex items-center rounded-full shadow-md transition-shadow hover:shadow-lg z-0 overflow-hidden"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] pb-[100%] -z-10 opacity-0 transition-all group-hover/button:opacity-100">
                  <div
                    className="absolute w-full h-full bg-gradient-to-tr from-pink to-white group-even:to-gray-900 animate-spin will-change-transform"
                    style={{ animationDuration: "1500ms" }}
                  />
                </div>
                <div className="inline-flex items-center rounded-full bg-white group-even:bg-gray-700 px-4 py-2">
                  <PlayIcon className="h-5 w-5 shrink-0 mr-2 text-primary" />
                  <span className="font-semibold">
                    {mainMedia.title ||
                      `${video ? "Watch" : "Listen to"} the ${title}`}
                  </span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
      {speakers ? (
        <div className="mb-10 last:mb-0">
          <div className="grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-6 lg:gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.name}>
                <Profile {...speaker} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {media ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.map((mediaItem) => (
            <div
              key={`${mediaItem.title}-${mediaItem.url}-${mediaItem?.authors?.[0]?.name}`}
              className="p-4 bg-white shadow-md rounded-md flex flex-col"
            >
              <div className="flex-1 mb-2 last:mb-0">
                <h6 className="mb-1 last:mb-0">{mediaItem.title}</h6>
                {!!mediaItem.authors?.length && (
                  <ul className="text-sm text-body-tint">
                    {mediaItem.authors.map((author) => (
                      <li key={author.name}>
                        <span className="font-semibold">{author.name}</span>
                        {author.title && `, ${author.title}`}
                        {author.organization && `, ${author.organization}`}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                {mediaItem.type === "audio" ? (
                  <audio preload="none" controls className="w-full">
                    <source src={mediaItem.url} type="audio/mpeg" />
                  </audio>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
