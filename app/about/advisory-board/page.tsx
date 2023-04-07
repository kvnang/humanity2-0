import { AdvisoryBoard } from "@/components/AdvisoryBoard";

export default function AdvisoryBoardPage() {
  return (
    <main>
      <section className="py-section">
        <div className="container">
          <h1 className="mb-[1.5em]">Advisory Board</h1>
          <AdvisoryBoard />
        </div>
      </section>
    </main>
  );
}
