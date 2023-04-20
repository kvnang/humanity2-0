import { AdvisoryBoard } from "@/components/AdvisoryBoard";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Advisory Board",
  description:
    "Our advisory board is comprised of leaders from a variety of sectors who are committed to our mission and vision.",
  pathname: "/about/advisory-board",
});

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
