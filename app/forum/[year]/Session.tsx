import { AudioProps, Audios } from "@/components/Audios";
import { Profile, ProfileProps } from "@/components/Profile";
import { PlayIcon } from "@heroicons/react/24/solid";

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
  media?: AudioProps[];
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
          <div className="grid xs:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 xs:gap-6 lg:gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.name}>
                <Profile {...speaker} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {media ? <Audios audios={media} /> : null}
    </div>
  );
}
