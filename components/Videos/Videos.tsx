import { ButtonLink } from "../Button";
import { YouTubeIcon } from "../Icons";
import { VideoEntry } from "./VideoEntry";

const PER_PAGE = 8;

async function getVideos(
  props: { playlistId: string } | { videoIds: string[] }
) {
  if ("playlistId" in props) {
    const { playlistId } = props;
    const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${PER_PAGE}&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
    const response = await fetch(endpoint, { method: "GET" });
    const body = await response.json();
    const { items, etag } = body;
    return items;
  } else if ("videoIds" in props) {
    const { videoIds } = props;
    const ids = videoIds.join(",");
    const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ids}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
    const response = await fetch(endpoint, { method: "GET" });
    const body = await response.json();
    const { items, etag } = body;
    return items;
  }

  return [];
}

export async function Videos(
  props: { videosLink?: string } & (
    | { playlistId: string }
    | { videoIds: string[] }
  )
) {
  const items = await getVideos(props);

  let link = props.videosLink;
  if (!link) {
    if ("playlistId" in props) {
      link = `https://www.youtube.com/playlist?list=${props.playlistId}`;
    }
  }

  return (
    <div className="">
      <ul className="grid md:grid-cols-2 gap-6 mb-6 max-md:[&>li:nth-child(n+7)]:hidden">
        {items.map((item: any) => (
          <li key={item.id}>
            <VideoEntry {...item} />
          </li>
        ))}
      </ul>
      {link ? (
        <div className="flex justify-end">
          <ButtonLink href={link} target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-8 absolute top-1/2 -translate-y-1/2 left-0 -ml-12">
              <YouTubeIcon className="w-8 h-8" />
            </div>
            <span>More Videos</span>
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
