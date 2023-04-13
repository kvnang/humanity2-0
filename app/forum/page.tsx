import { TitleLine } from "@/components/TitleLine";
import Image from "next/image";
import { PageNav } from "./PageNav";
import { Videos } from "@/components/Videos";
import harvardHumanFlourishing from "@/assets/images/harvard-human-flourishing-program.png";
import forum2023Bg from "@/assets/images/forum-2023-bg.jpg";
import { ParticipateInForum } from "@/components/ParticipateInForum";
import { Session } from "./Session";
import pontificalAcademyOfSciences from "@/assets/images/pontifical-academy-of-sciences.jpg";
import { NumberedList } from "@/components/NumberedList";
import { Topic } from "./Topic";
import {
  openingAddress,
  sponsors,
  topics,
  organizations,
  schedule,
} from "@/lib/forum2022";
import clsx from "clsx";
import { Schedule } from "./Schedule";
import { FramedImage } from "@/components/FramedImage";
import { Photos } from "./Photos";
import forumPhotosBg from "@/assets/images/forum-photos-bg.jpg";
import { ScrollFade } from "@/components/ScrollFade";

export default function ForumPage() {
  return (
    <main>
      <section className="pt-page pb-section relative">
        <div
          className="absolute top-0 right-0 w-3/5 md:w-2/5 -z-10"
          style={{ height: "70%" }}
        >
          <div className="absolute top-0 -left-1 w-2/5 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute -bottom-1 left-0 h-2/5 w-full bg-gradient-to-t from-white to-transparent z-10"></div>
          <Image
            src={forum2023Bg}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "75% top" }}
          />
        </div>
        <div className="container">
          {/* Header */}
          <div className="mb-6">
            <h1 className="mb-[0.75em] max-w-lg">
              <TitleLine>2022 Human Flourishing Forum</TitleLine>
            </h1>
            <div className="flex flex-wrap lg:flex-nowrap -mx-6 -my-4">
              <div className="px-6 py-4">
                <div className="prose">
                  <p>
                    The Human Flourishing Forum consists of a two day program
                    and involves leaders and luminaries from around the world
                    exploring what constitutes and inhibits human flourishing.
                    We are grateful to be partnering with The Human Flourishing
                    Program at Harvard University in hosting this Forum.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4">
                <Image
                  src={harvardHumanFlourishing}
                  alt="The Human Flourishing Program at the Harvard University"
                  className="w-96"
                />
              </div>
            </div>
          </div>
          {/* Page Nav */}
          <PageNav />
          {/* Videos */}
          <div id="videos" className="mt-section">
            <h2 className="mb-[1em]">Videos</h2>
            {/* @ts-expect-error */}
            <Videos playlistId="PL8rJDNiqYPUkoEmbZwXDzp1NyeVZg87Fl" />
          </div>
        </div>
      </section>
      <section id="photos" className="py-section bg-gray-100 relative z-0">
        <div className="absolute inset-0">
          <Image
            src={forumPhotosBg}
            alt=""
            fill
            className="object-cover -z-10"
          />
        </div>
        <div className="container">
          <h2 className="mb-[1em]">Photos</h2>
        </div>
        <Photos albumUrl="https://photos.app.goo.gl/yTztxb2Sqf5AfacY9" />
      </section>
      <section>
        <div id="opening-address" className="pt-section">
          <div className="container">
            <Session {...openingAddress} />
          </div>
        </div>
        <div id="topics">
          <NumberedList.Group>
            {topics.map((topicSection) => (
              <NumberedList.Item
                key={`topic-section-${topicSection[0].title}`}
                hideNumber
                className="group py-section even:bg-gray-900 even:text-white"
              >
                <div className="container">
                  <div className="flex">
                    <NumberedList.Number className="text-2xl -ml-[calc(1.5em_+_1rem)]" />
                    <div>
                      {topicSection.map((topic) => (
                        <div
                          className="mb-10 last:mb-0"
                          key={`topic-${topic.title}`}
                        >
                          <Topic {...topic} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </NumberedList.Item>
            ))}
          </NumberedList.Group>
        </div>
      </section>

      <section id="sponsors" className="py-section">
        <div className="container">
          <h2 className="mb-[1em]">Sponsors</h2>
          {sponsors.map((sponsorsGroup) => (
            <div
              key={`sponsors-group-${sponsorsGroup.level}`}
              className={clsx(
                `grid gap-4 mb-4 last:mb-0`,
                sponsorsGroup.level === "platinum" &&
                  `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`,
                sponsorsGroup.level === "gold" &&
                  `grid-cols-2 sm:grid-cols-3 md:grid-cols-4`
              )}
            >
              {sponsorsGroup.sponsors.map((sponsor) => (
                <div
                  key={`sponsor-${sponsor.name}`}
                  className="relative w-full pb-[50%] border border-gray-100 rounded-md bg-white shadow-sm"
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ padding: "18% 16%" }}
                  >
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        id="participating-organizations"
        className="py-section bg-gray-100"
      >
        <div className="container">
          <h2 className="mb-[1em]">Participating Organizations</h2>
          <div className="relative">
            <div className="max-h-[400px] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-x-6">
                {organizations.map((col) => (
                  <div key={`org-col-${col[0]}`}>
                    {col.map((org) => (
                      <div key={`org-${org}`}>{org}</div>
                    ))}
                  </div>
                ))}
              </div>
              <ScrollFade />
            </div>
          </div>
        </div>
      </section>
      <section id="complete-program" className="py-section">
        <div className="container">
          <h2 className="mb-[1em]">The Program</h2>
          <div className="flex flex-wrap xl:flex-nowrap -m-6">
            <div className="p-6">
              <div className="relative max-w-prose">
                <div className="max-h-[600px] overflow-y-auto">
                  <Schedule
                    dates="Nov 3-4, 2022"
                    venue="Pontifical Academy of Sciences"
                    schedule={schedule}
                  />
                  <ScrollFade />
                </div>
              </div>
            </div>
            <div className="basis-full p-6 xl:flex-1">
              <div className="xl:-mr-12 2xl:-mr-24">
                <figure className="max-w-2xl lg:max-w-4xl">
                  <FramedImage reverse>
                    <Image
                      src={pontificalAcademyOfSciences}
                      alt="Pontifical Academy of Sciences"
                    />
                  </FramedImage>
                  <figcaption className="mt-4">
                    Pontifical Academy of Sciences
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ParticipateInForum theme="dark" />
    </main>
  );
}
