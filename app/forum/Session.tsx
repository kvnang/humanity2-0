import { Profile, ProfileProps } from "@/components/Profile";
import { PlayIcon } from "@heroicons/react/24/solid";

export interface SessionProps {
  title: string;
  video?: {
    url: string;
    title?: string;
  };
  speakers: ProfileProps[];
}

export function Session({ title, video, speakers }: SessionProps) {
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center flex-wrap -mx-4 -my-2">
          <div className="px-4 py-2">
            <h3 className="h4">{title}</h3>
          </div>
          {video && (
            <div className="px-4 py-2">
              <a
                href={video.url}
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
                    {video.title || `Watch the ${title}`}
                  </span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <div key={speaker.name}>
              <Profile {...speaker} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
