import { Hero } from "@/components/Hero";
import Image from "next/image";
import quoteBg from "@/assets/images/home-quote-bg.jpg";
import humanFlourishingImg from "@/assets/images/home-human-flourishing.jpg";
import { TitleLine } from "@/components/TitleLine";
import { Button } from "@/components/Button";
import { Profile } from "@/components/Profile";
import { advisoryBoard } from "@/lib/advisoryBoard";
import { AdvisoryBoard } from "@/components/AdvisoryBoard";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-gray-900 pt-12 md:pt-20 2x">
        <div className="container py-section">
          <div className="pl-6 md:pl-0">
            <div className="max-w-prose">
              <blockquote className="text-white relative text-xl font-heading font-semibold mb-8">
                <div className="absolute -top-[0.25em] -left-[0.5em] text-primary font-sans leading-none text-[5rem] sm:text-[6rem]">
                  &ldquo;
                </div>
                <p className="">
                  Three things are necessary for the salvation of man: to know
                  what he ought to believe; to know what he ought to desire; and
                  to know what he ought to do.
                </p>
              </blockquote>
              <div className="opacity-50 text-white">
                Thomas Aquinas, Two Precepts of Charity, 1273
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container py-section">
          <div className="flex flex-col relative z-0 mb-8 lg:flex-row lg:items-end">
            <div className="ml-[10%] md:ml-[16%] lg:ml-0 lg:basis-2/3">
              <div className="w-full relative">
                <div className="absolute w-full h-full top-0 right-0 translate-x-4 -translate-y-4 bg-pink -z-10" />
                <Image
                  src={humanFlourishingImg}
                  alt=""
                  className="relative w-full"
                ></Image>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 w-full z-10 pb-4 max-w-md md:bottom-8 md:pb-8 lg:relative lg:text-right lg:flex-1 lg:-ml-40 xl:max-w-2xl">
              <div className="h5 text-sm mb-2">We are a</div>
              <h2 className="h1">Human Flourishing Accelerator.</h2>
              <div className="absolute bottom-0 left-0 w-16 border-t-4 border-gray-900 md:w-32"></div>
            </div>
          </div>
          <div className="mb-section">
            <div className="prose lg:ml-auto">
              <p>
                Humanity 2.0 is a vehicle for facilitating collaborative
                ventures between the traditionally siloed public, private and
                faith-based sectors. Its mission is to identify impediments to
                human flourishing and then work collaboratively across sectors
                to remove them by sourcing and scaling bold and innovative
                solutions.
              </p>
            </div>
          </div>
          <div>
            <div className="pl-6 md:pl-0">
              <div className="max-w-md relative">
                <div className="absolute -top-[0.25em] -left-[0.5em] text-primary font-sans leading-none text-[5rem] sm:text-[6rem]">
                  &ldquo;
                </div>
                <blockquote className="mb-4">
                  <p className="font-bold">
                    I am convinced that the Humanity 2.0 platform has the
                    potential to make a real difference in the lives of many
                    women, children, families and our societies in general.
                  </p>
                </blockquote>
                <p className="font-semibold">
                  H.E. Marie-Louise Coleiro Preca KUOM GCMG
                </p>
                <p className="text-sm text-body-tint">9th President of Malta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={quoteBg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-75"></div>
        <div className="container py-section">
          <div className="max-w-prose">
            <h2 className="h3 text-white">
              <TitleLine>
                People around the world are constantly moving, but advancing
                towards what?
              </TitleLine>
            </h2>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-100">
        <div className="container">
          <h2 className="mb-[1.5em]">Advisory Board</h2>
          <AdvisoryBoard />
        </div>
      </section>
      <section className="py-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-x-4">
            <div>
              <h2 className="h1 mb-[1em]">
                <TitleLine>Participate in the Forum</TitleLine>
              </h2>
            </div>
            <div className="prose md:ml-[4.5rem] lg:ml-0">
              <p>
                Participants in the Humanity 2.0 Forum are mission-aligned
                stakeholders gathered to address particular impediments to human
                flourishing.
              </p>
              <p>
                The Forum provides an opportunity for stakeholders to be
                presented with high potential solutions to particular human
                challenges and then an invitation to unite in a cross-sector
                effort to address them. Anyone may request to attend a Forum,
                but due to practical considerations, only a limited number are
                invited.
              </p>
              <div className="mt-6">
                <Button type="button">Join</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-primary">
        <div className="container">
          <div className="flex flex-wrap items-center -m-4">
            <div className="p-4 basis-full lg:basis-auto">
              <h4>Sign up for email updates</h4>
            </div>
            <div className="p-4 flex-1">
              <form action="">
                <div className="flex items-center -m-4">
                  <div className="p-4 flex-1">
                    <label htmlFor="subscribe-email">
                      <span className="sr-only">Email</span>
                      <input
                        type="email"
                        name="email"
                        id="subscribe-email"
                        placeholder="Email"
                        className="px-5 py-3 outline-offset-4 w-full"
                      />
                    </label>
                  </div>
                  <div className="p-4">
                    <Button type="submit" theme="dark">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
