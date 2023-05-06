import { AdvisoryBoard } from "@/components/AdvisoryBoard";
import { getMetadata } from "@/lib/metadata";
import { type ResolvingMetadata } from "next";

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  return getMetadata(
    {
      title: "Advisory Board",
      description:
        "Our advisory board is comprised of leaders from a variety of sectors who are committed to our mission and vision.",
      pathname: "/about/advisory-board",
    },
    await parent
  );
}

export default function AdvisoryBoardPage() {
  return (
    <main>
      <section className="pt-page pb-section">
        <div className="container">
          <h1 className="mb-[1.5em]">Advisory Board</h1>
          <AdvisoryBoard />
        </div>
      </section>
    </main>
  );
}
