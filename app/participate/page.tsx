import { TitleLine } from "@/components/TitleLine";
import { ParticipateForm } from "./ParticipateForm";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Participate",
  description: `Participate in Humanity 2.0 forum.`,
  pathname: "/participate",
});

export default function ParticipatePage() {
  return (
    <main>
      <section className="py-section">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5">
              <h1 className="mb-[0.75em]">
                <TitleLine>Participate in the Forum</TitleLine>
              </h1>
              <a href="mailto:info@humanity2-0.org" className="h6">
                info@humanity2-0.org
              </a>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ParticipateForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
