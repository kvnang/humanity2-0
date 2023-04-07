import { TitleLine } from "@/components/TitleLine";

export default function AboutPage() {
  return (
    <main>
      <section className="py-section bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <h1 className="text-white mb-[0.75em]">
                <TitleLine>Our Mission</TitleLine>
              </h1>
              <div className="prose text-white md:ml-[4.5rem] lg:ml-0">
                <p>
                  Identify impediments to human flourishing and then work
                  collaboratively across sectors to remove them by sourcing and
                  scaling bold and innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
