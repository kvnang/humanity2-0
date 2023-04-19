import { Hero } from "@/components/Hero";
import Image from "next/image";
import quoteBg from "@/assets/images/home-quote-bg.jpg";
import humanFlourishingImg from "@/assets/images/home-human-flourishing.jpg";
import { TitleLine } from "@/components/TitleLine";
import { Button } from "@/components/Button";
import { AdvisoryBoard } from "@/components/AdvisoryBoard";
import { ParticipateInForum } from "@/components/ParticipateInForum";
import { Subscribe } from "@/components/Subscribe";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-gray-900 pt-12 md:pt-20 2x">
        <div className="container py-section">
          <div className="">
            <div className="max-w-prose">
              <div className="pl-4 md:pl-0">
                <blockquote className="text-white relative text-lg md:text-xl font-heading font-semibold mb-8">
                  <div className="absolute -top-[0.25em] -left-[0.5em] text-primary font-sans leading-none text-[4rem] md:text-[5rem]">
                    &ldquo;
                  </div>
                  <p>
                    Three things are necessary for the salvation of man:
                    <br />
                    to know what he ought to believe;
                    <br />
                    to know what he ought to desire;
                    <br />
                    and to know what he ought to do.
                  </p>
                </blockquote>
              </div>
              <div className="opacity-50 text-white max-md:text-right max-md:text-sm">
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
                <div className="absolute w-full h-full top-0 right-0 translate-x-4 -translate-y-4 lg:translate-x-8 lg:-translate-y-8 bg-primary -z-10" />
                <Image
                  src={humanFlourishingImg}
                  alt=""
                  className="relative w-full"
                />
              </div>
            </div>
            <div className="absolute bottom-2 sm:bottom-4 left-0 w-full z-10 pb-4 max-w-md md:bottom-8 md:pb-8 lg:relative lg:text-right lg:flex-1 lg:-ml-40 xl:max-w-sm xl:-ml-16 xl:mb-16">
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
            <div className="pl-4 sm:pl-6 md:pl-0">
              <div className="max-w-prose relative">
                <div className="absolute -top-[0.25em] -left-[0.5em] text-primary font-sans leading-none text-[4rem] md:text-[5rem]">
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
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:max-lg:col-span-10 md:max-lg:col-start-2">
              <div className="max-w-prose">
                <h2 className="h3 text-white">
                  <TitleLine>
                    People around the world are constantly moving, but advancing
                    towards what?
                  </TitleLine>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-100">
        <div className="container">
          <h2 className="mb-[1.5em]">Advisory Board</h2>
          <AdvisoryBoard />
        </div>
      </section>
      <ParticipateInForum />
      <section className="py-section bg-primary">
        <div className="container">
          <div className="flex flex-wrap items-center -my-4 -mx-6">
            <div className="py-4 px-6 basis-full lg:basis-auto">
              <h4>Sign up for email updates</h4>
            </div>
            <div className="py-4 px-6 flex-1">
              <Subscribe theme="dark" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
