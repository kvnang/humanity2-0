import { ButtonLink } from "../Button";
import { YouTubeIcon } from "../Icons";
import { VideoEntry } from "./VideoEntry";

const PER_PAGE = 8;

export async function Videos({ playlistId }: { playlistId: string }) {
  const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${PER_PAGE}&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const response = await fetch(endpoint, { method: "GET" });
  const body = await response.json();
  const { items, etag } = body;

  return (
    <div className="">
      <ul className="grid md:grid-cols-2 gap-6 mb-6">
        {items.map((item: any) => (
          <li key={item.id}>
            <VideoEntry {...item.snippet} />
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <ButtonLink
          href={`https://www.youtube.com/playlist?list=${playlistId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-12 h-8 absolute top-1/2 -translate-y-1/2 left-0 -ml-12">
            <YouTubeIcon className="w-8 h-8" />
          </div>
          <span>More Videos</span>
        </ButtonLink>
      </div>
    </div>
  );
}
