import { Videos } from "@/components/Videos";
import { photos } from "@/lib/forum2022";
import { Photos } from "@/components/Photos";
import { getMetadata } from "@/lib/metadata";
import { type ResolvingMetadata } from "next";

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  return getMetadata(
    {
      title: "Media",
      description: `Browse photos and videos from our events and activities.`,
      pathname: "/media",
    },
    await parent
  );
}

export default function MediaPage() {
  return (
    <main>
      <section className="pt-page pb-section">
        <div className="container">
          <h1 className="mb-[0.75em]">Media</h1>
          <div className="prose">
            <p>Browse photos and videos from our events and activities.</p>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-100">
        <div className="container">
          <h2 className="mb-[1.5em]">Videos</h2>

          <div className="mb-10 last:mb-0">
            <h3 className="h4 mb-[1em]">2022 Forum</h3>
            <Videos playlistId="PL8rJDNiqYPUkoEmbZwXDzp1NyeVZg87Fl" />
          </div>
          <div className="mb-10 last:mb-0">
            <h3 className="h4 mb-[1em]">Studio Discussions</h3>
            <Videos
              videoIds={[
                "H_r90Tg_F9U",
                "pPr1UYU-nZw",
                "WhvRcuCbijI",
                "mSWcngMfuZY",
                "V76WYeRu0u4",
                "uPnICI6j9BQ",
                "Lxtqjpr_sR8",
                "BVEG1Y46UFI",
              ]}
            />
            {/* Button Placeholder */}
            <div className="h-8 hidden md:block" />
          </div>
          <div className="mb-10 last:mb-0">
            <h3 className="h4 mb-[1em]">Interviews</h3>
            <Videos
              videoIds={[
                "C8Daba5kA9s",
                "KlCsa22qV0g",
                "Het3bCxKZCk",
                "XlYwpvxDNyw",
                "_Fn_LOGluSU",
                "l52-pfCeDzQ",
                "KenTL5BzkVQ",
                "NllMyzADxVg",
              ]}
              videosLink="https://www.youtube.com/channel/UCeVdRFZnkR-QEzvwiLTLV2w"
            />
          </div>
        </div>
      </section>
      <section className="py-section">
        <div className="container">
          <h2 className="mb-[1em]">Photos</h2>
        </div>
        <Photos
          photos={photos}
          albumUrl="https://photos.google.com/share/AF1QipMDVoegyKZzgpxUzXG_i0v26egX1EXdSJCWyziR1tiH_VjFmyvQA5P-ef24oDXv0w?key=OGR1MHQyM1BmS0xTVmFkMjE0OW1kZ3pvN1EzV3lB"
        />
      </section>
    </main>
  );
}
