import { Button, ButtonLink } from "@/components/Button";
import { TitleLine } from "@/components/TitleLine";

export function ParticipateInForum({ theme }: { theme?: "dark" }) {
  return (
    <section
      id="join-the-forum"
      className={`py-section ${
        theme === "dark" ? "bg-gray-900 text-white" : ""
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:max-lg:col-span-10 md:max-lg:col-start-2">
            <div className="grid lg:grid-cols-2 gap-x-10">
              <div>
                <h2 className="h1 mb-[1em] lg:max-w-sm">
                  <TitleLine>Participate in the Forum</TitleLine>
                </h2>
              </div>
              <div>
                <div className="max-w-prose">
                  <div className="prose text-current">
                    <p>
                      Participants in the Humanity 2.0 Forum are mission-aligned
                      stakeholders gathered to address particular impediments to
                      human flourishing.
                    </p>
                    <p>
                      The Forum provides an opportunity for stakeholders to be
                      presented with high potential solutions to particular
                      human challenges and then an invitation to unite in a
                      cross-sector effort to address them. Anyone may request to
                      attend a Forum, but due to practical considerations, only
                      a limited number are invited.
                    </p>
                  </div>
                  <div className="mt-6">
                    <ButtonLink href="/participate">Join</ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
