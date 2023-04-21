import type { AudioProps } from "./Audios.types";

export function Audios({ audios }: { audios: AudioProps[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {audios.map((audio) => (
        <div
          key={`${audio.title}-${audio.url}-${audio?.authors?.[0]?.name}`}
          className="p-4 bg-white shadow-md rounded-md flex flex-col"
        >
          <div className="flex-1 mb-2 last:mb-0">
            <h6 className="mb-1 last:mb-0">{audio.title}</h6>
            {!!audio.authors?.length && (
              <ul className="text-sm text-body-tint">
                {audio.authors.map((author) => (
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
            <audio preload="none" controls className="w-full">
              <source src={audio.url} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
}
