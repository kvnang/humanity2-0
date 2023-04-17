import Image from "next/image";
import clsx from "clsx";
import { TitleLine } from "@/components/TitleLine";
import { Videos } from "@/components/Videos";
import { ParticipateInForum } from "@/components/ParticipateInForum";
import { NumberedList } from "@/components/NumberedList";
import { FramedImage } from "@/components/FramedImage";
import { Photos } from "@/components/Photos";
import { ScrollFade } from "@/components/ScrollFade";
import { PageNav } from "../PageNav";
import { Session } from "../Session";
import { Topic } from "../Topic";
import { Schedule } from "../Schedule";
import forum2022Bg from "@/assets/images/forum-2022-bg.jpg";
import forumPhotosBg from "@/assets/images/forum-photos-bg.jpg";

import * as data2022 from "@/lib/forum2022";
import * as data2019 from "@/lib/forum2019";
import * as data2018 from "@/lib/forum2018";

import { notFound } from "next/navigation";
import { Upcoming } from "../Upcoming";

export default function ForumPage({ params }: { params: { year: string } }) {
  const { year } = params;

  let data;

  if (year === "2022") {
    data = data2022;
  } else if (year === "2019") {
    data = data2019;
  } else if (year === "2018") {
    data = data2018;
  } else if (year === "2023") {
    return (
      <Upcoming
        eventDetails={{
          title: "Human Flourishing Forum 2023",
          date: "November 9-10, 2023",
          venue: {
            name: "Pontifical Academy of Sciences",
            city: "Vatican City",
          },
          description: (
            <>
              <p>
                A gathering of luminaries and stakeholders at the Vatican to
                explore recent insights and foster new partnerships aimed at
                accelerating human flourishing globally.
              </p>
              <ul>
                <li>Forum: Presentations, Panels, and Workshops</li>
                <li>Private Tour</li>
                <li>Exclusive Dinners</li>
              </ul>
            </>
          ),
        }}
      />
    );
  } else {
    return notFound();
  }

  const {
    openingAddress,
    sponsors,
    topics,
    organizations,
    schedule,
    videos,
    photos,
    albumUrl,
    eventDetails,
  } = data;

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
            src={forum2022Bg}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "75% top" }}
            sizes="(min-width: 768px) 40vw, 60vw"
            priority
          />
        </div>
        <div className="container">
          {/* Header */}
          <div className="mb-6">
            <h1 className="mb-[0.75em] max-w-xl">
              <TitleLine>{eventDetails.title}</TitleLine>
            </h1>
            <div className="flex flex-wrap lg:flex-nowrap -mx-6 -my-4">
              <div className="px-6 py-4">
                <div className="prose">
                  <p>{eventDetails.description}</p>
                </div>
              </div>
              {eventDetails.descriptionLogo && (
                <div className="px-6 py-4">
                  <Image
                    src={eventDetails.descriptionLogo.src}
                    alt={eventDetails.descriptionLogo.alt || ""}
                    className="w-96"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Page Nav */}
          <PageNav />
          {/* Videos */}
          <div id="videos" className="mt-section">
            <h2 className="mb-[1em]">Videos</h2>
            {/* @ts-expect-error */}
            <Videos {...videos} />
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
            sizes="100vw"
          />
        </div>
        <div className="container">
          <h2 className="mb-[1em]">Photos</h2>
        </div>
        <Photos albumUrl={albumUrl} photos={photos} />
      </section>
      <section>
        {openingAddress ? (
          <div id="opening-address" className="pt-section">
            <div className="container">
              <Session {...openingAddress} />
            </div>
          </div>
        ) : null}
        <div id="topics">
          <NumberedList.Group>
            {topics.map((topicSection) => (
              <NumberedList.Item
                key={`topic-section-${topicSection[0].title}`}
                hideNumber
                className="group py-section even:bg-gray-900 even:text-white"
              >
                <div className="container">
                  {topicSection.map((topic) => (
                    <div
                      className="group/topic mb-10 last:mb-0"
                      key={`topic-${topic.title}`}
                    >
                      <Topic {...topic} />
                    </div>
                  ))}
                </div>
              </NumberedList.Item>
            ))}
          </NumberedList.Group>
        </div>
      </section>

      <section id="sponsors" className="py-section bg-gray-50">
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
              {sponsorsGroup.sponsors.map((sponsor) => {
                const aspectRatio = sponsor.image.width / sponsor.image.height;
                return (
                  <div
                    key={`sponsor-${sponsor.name}`}
                    className="relative w-full pb-[50%] border border-gray-100 rounded-md bg-white shadow-sm"
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        padding: aspectRatio < 1.2 ? "12% 16%" : "18% 16%",
                      }}
                    >
                      <Image
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                );
              })}
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
      <section id="program" className="py-section">
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
                      src={eventDetails.venue.image}
                      alt={eventDetails.venue.name}
                    />
                  </FramedImage>
                  <figcaption className="mt-4">
                    {eventDetails.venue.name}
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
