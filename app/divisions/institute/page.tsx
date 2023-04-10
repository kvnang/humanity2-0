import Image from "next/image";
import instituteTitle from "./institute.png";
import { TitleLine } from "@/components/TitleLine";

export default function InstitutePage() {
  return (
    <main>
      <section className="pt-page pb-section">
        <div className="container">
          <h1 className="max-w-full w-52 mb-[0.75em] lg:w-60">
            <Image
              src={instituteTitle}
              alt="Institute"
              className="w-full h-auto"
            />
          </h1>
          <div className="prose">
            <p>
              The Institute is the collective intelligence of Humanity 2.0. Its
              primary purpose is to inform and direct Humanity 2.0&apos;s
              efforts; specially those related to addressing impediments to
              human flourishing.
            </p>
            <p>
              Its secondary mission is to update the Human Flourishing Framework
              with new data and insights as they become available.
            </p>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-900">
        <div className="container">
          <h2 className="h1 text-white">
            <TitleLine>Project Vision</TitleLine>
          </h2>
        </div>
      </section>
      <section className="py-section bg-gray-100">
        <div className="container">
          <h2>Overview</h2>
        </div>
      </section>
      <section className="py-section">
        <div className="container">
          <h2 className="mb-[0.75em]">
            <TitleLine>
              Objective{" "}
              <span className="text-pink text-3xl ml-2 -mt-6 inline-block">
                01
              </span>
            </TitleLine>
          </h2>
          <h3 className="h5 mb-[1.5em]">Formulate the Vision</h3>
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 basis-full mb-8 xl:basis-1/3 xl:order-1">
              <div className="pt-6 pl-12 xl:pt-0">
                <blockquote className="relative">
                  <div className="absolute -top-[0.25em] -left-[0.5em] text-primary font-sans leading-none text-[5rem] sm:text-[6rem]">
                    &ldquo;
                  </div>
                  <p className="h6 lg:text-md">
                    Vision without action is merely a dream. Action without
                    vision just passes the time. Vision with action can change
                    the world.
                  </p>
                  <cite className="mt-4 block not-italic">- Joel A. Baker</cite>
                </blockquote>
              </div>
            </div>
            <div className="px-4 basis-full xl:basis-2/3">
              <div className="md:columns-2 gap-8">
                <div className="prose">
                  <p>
                    With the arrival of a truly global age, the human
                    institutions that we have come to rely on are struggling to
                    address global challenges and seize opportunities.
                  </p>
                  <p>
                    We are motivated by a desire to align human interests in
                    order to provide greater focus in our effort to accelerate
                    human flourishing.
                  </p>
                  <p>
                    To this end, Project Vision’s first task is to articulate a
                    vision for the kind of global civilization we should be
                    striving to effect. Without a clear vision and sense of
                    mission, building the necessary solidarity and collective
                    will required to transform civilization will be a near
                    impossibility. Moreover, without a clear vision or picture
                    of what kind of civilization we want to effect, we would be
                    unable to credibly identify or agree on the impediments to
                    realizing it.
                  </p>
                  <p>
                    This ‘vision’ for humanity will be developed by a leading
                    body of experts representing many scholarly, religious and
                    philosophical perspectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
