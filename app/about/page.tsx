import { TitleLine } from "@/components/TitleLine";
import Image from "next/image";
import aboutMissionImage from "@/assets/images/about-mission.jpg";
import aboutApproachBg from "@/assets/images/about-approach-bg.jpg";
import aboutQuoteBg from "@/assets/images/about-quote-bg.jpg";
import { AboutTabs } from "./AboutTabs";

const VISION = [
  <>
    We are <strong>one species</strong>, with a collective responsibility for
    shaping our future.
  </>,
  <>
    Challenges to humanity must be met by focused and{" "}
    <strong>coordinated action</strong>.
  </>,
  <>
    No human being has more, or less, <strong>intrinsic value</strong> than any
    other.
  </>,
  <>
    Every human being should have the opportunity to realize their{" "}
    <strong>full potential.</strong>
  </>,
  <>
    Common resources should be used to further the <strong>common good</strong>{" "}
    before private interests.
  </>,
];

export default function AboutPage() {
  return (
    <main>
      <section className="py-section bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-10 md:col-start-3 lg:col-span-6 lg:col-start-7 2xl:col-span-5 2xl:col-start-8">
              <h1 className="text-white mb-[0.75em]">
                <TitleLine>Our Mission</TitleLine>
              </h1>
              <div className="prose text-white">
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
      <section className="py-section">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4 gap-y-10 mb-8">
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 2xl:col-span-5 2xl:col-start-8">
              <div className="max-w-prose">
                <h2 className="h5 mb-[1.5em]">
                  What does a civilization built to accelerate human flourishing
                  look like?
                </h2>
                <blockquote className="mb-6">
                  <p>
                    <span className="font-bold">
                      &ldquo;If you know where you&apos;re going, you&apos;re
                      more likely to get there.&rdquo;
                    </span>{" "}
                    <span className="text-body-tint">- Unknown</span>
                  </p>
                </blockquote>
              </div>
              <div className="prose">
                <p>
                  We are building a new model for human cooperation that enables
                  us to transcend the boundaries and silos we have created and
                  to unite in realizing humanity 2.0.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:-order-1 lg:col-span-5 2xl:col-span-6">
              <div className="pt-4 pl-4 -mr-4 lg:pt-8 lg:pl-8 lg:-mr-8 3xl:-ml-8 max-w-lg lg:max-w-2xl">
                <div className="w-full relative z-0">
                  <div className="absolute -z-10 -translate-y-4 lg:-translate-y-8 -translate-x-4 lg:-translate-x-8 bg-primary inset-0"></div>
                  <Image src={aboutMissionImage} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 2xl:col-span-5 2xl:col-start-8">
              <div className="max-w-prose">
                <h2 className="h1 mb-[0.75em]">Our Vision</h2>
                <h3 className="h6">
                  A world that affords every person, family, and community the
                  opportunity to flourish.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container">
          <div className="relative py-section">
            <div className="w-[var(--line-width)] border-t-4 border-primary absolute top-0 right-10 rotate-90 md:right-20"></div>
            <div className="grid grid-cols-12 gap-x-4">
              <div className="col-span-12 lg:col-span-4 2xl:col-span-5">
                <div className="flex md:pr-6">
                  <h2 className="h4 mb-[1.5em]">
                    Our vision is defined by five beliefs:
                  </h2>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 2xl:col-span-7">
                <ol
                  className="grid md:grid-cols-2 md:grid-rows-3 md:grid-flow-col gap-6 lg:gap-8"
                  style={{ counterReset: "vision-counter" }}
                >
                  {VISION.map((item, index) => (
                    <li
                      key={`vision-${index}`}
                      style={{ counterIncrement: "vision-counter" }}
                      className={`flex before:[content:"0"_counter(vision-counter)] before:text-2xl before:font-heading before:mr-4 before:leading-none before:text-primary before:w-[1.5em] before:shrink-0`}
                    >
                      <div className="max-w-prose">{item}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="bg-gray-700 relative z-0">
          <div className="absolute inset-0 -z-10">
            <Image
              src={aboutApproachBg}
              alt=""
              fill
              sizes="100vw"
              className="object-cover "
            />
          </div>
          <div className="container">
            <div className="py-section">
              <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-12">
                  <h2 className="h1 mb-[0.75em] text-white">
                    <TitleLine reverse>Our Approach</TitleLine>
                  </h2>
                  <div className="prose text-white">
                    The Humanity 2.0 approach is defined by three works:
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container">
            <div className="relative py-section">
              <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-12">
                  <AboutTabs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 2xl:col-span-5 2xl:col-start-8">
              <TitleLine>
                <div className="prose">
                  <p>
                    Accountability, transparency and impact are key values of
                    Humanity 2.0. Having measurable KPIs and clear reporting
                    structures are an integral part of our approach.
                  </p>
                  <p>
                    Moreover, human flourishing is not a commodity and therefore
                    transparency in our ideation and methods as well as ongoing
                    collaboration with aligned partners is fundamentally a part
                    of Humanity 2.0.
                  </p>
                </div>
              </TitleLine>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section relative z-0">
        <div className="absolute top-0 right-0 w-1/2 lg:w-2/3 2xl:w-full h-full -z-10">
          <Image
            src={aboutQuoteBg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-white to-transparent"></div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <div className="max-w-md">
                <h2 className="h3">
                  <TitleLine reverse>
                    Collaboration with Partners is Critical to Success
                  </TitleLine>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
