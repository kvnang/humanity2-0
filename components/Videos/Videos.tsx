import { ButtonLink } from "../Button";
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
            <VideoEntry id={item.id} {...item.snippet} />
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <ButtonLink
          href={`https://www.youtube.com/playlist?list=${playlistId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Videos
        </ButtonLink>
      </div>
    </div>
  );
}
