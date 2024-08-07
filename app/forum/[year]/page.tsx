import Image from "next/image";
import clsx from "clsx";
import { TitleLine } from "@/components/TitleLine";
import { Videos } from "@/components/Videos";
import { ParticipateInForum } from "@/components/ParticipateInForum";
import { NumberedList } from "@/components/NumberedList";
import { FramedImage } from "@/components/FramedImage";
import { Photos } from "@/components/Photos";
import { ScrollFade } from "@/components/ScrollFade";
import { Session } from "./Session";
import { Topic } from "./Topic";
import { Schedule } from "./Schedule";
import forum2022Bg from "@/assets/images/forum-2022-bg.jpg";
import forumPhotosBg from "@/assets/images/forum-photos-bg.jpg";
import { notFound } from "next/navigation";
import { Upcoming } from "./Upcoming";
import { getForum, getForums } from "@/lib/forum";
import { ForumPageNav } from "./ForumPageNav";
import { getMetadata } from "@/lib/metadata";
import { type ResolvingMetadata } from "next";
import { VideoCameraIcon } from "@heroicons/react/24/outline";

export async function generateMetadata(
  {
    params,
  }: {
    params: { year: string };
  },
  parent: ResolvingMetadata
) {
  return getMetadata(
    {
      title: `${params.year} Forum`,
      description: `The Humanity 2.0 Forum is a broad spectrum gathering of luminaries and stakeholders at the Vatican to explore specific impediments to human flourishing and to discuss courses of action aimed at overcoming them.`,
      pathname: `/forum/${params.year}`,
    }
    // await parent
  );
}

export async function generateStaticParams() {
  const forums = await getForums();

  return forums.map((forum) => ({
    year: forum.year.toString(),
  }));
}

export default async function ForumPage({
  params,
}: {
  params: { year: string };
}) {
  const { year } = params;

  const data = await getForum(parseInt(year, 10));

  if (!data) {
    return notFound();
  }

  if ("upcoming" in data) {
    return <Upcoming eventDetails={data.eventDetails} />;
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
            placeholder="blur"
          />
        </div>
        <div className="container">
          {/* Header */}
          <div className="mb-6">
            <h1 className="mb-[0.75em] max-w-xl">
              <TitleLine>{eventDetails.title}</TitleLine>
            </h1>
            <div
              className={`flex -mx-6 -my-4 ${
                eventDetails.descriptionLogos?.length &&
                eventDetails.descriptionLogos.length > 1
                  ? `flex-col`
                  : `flex-wrap lg:flex-nowrap`
              }`}
            >
              <div className="px-6 py-4">
                <div className="prose">
                  <p>{eventDetails.description}</p>
                </div>
              </div>
              {eventDetails.descriptionLogos?.length && (
                <div className="px-6 py-4">
                  <div className="flex flex-wrap items-center -mx-6 -my-4">
                    {eventDetails.descriptionLogos.map((logo, i) => (
                      <div key={`logo-${i}`} className="px-6 py-4">
                        <Image
                          src={logo.src}
                          alt={logo.alt || ""}
                          className="h-14 w-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Page Nav */}
          <ForumPageNav />
          {/* Videos */}
          <div id="videos" className="mt-section">
            <h2 className="mb-[1em]">Videos</h2>
            {videos.playlistId ? (
              <Videos {...videos} />
            ) : (
              <>
                <div className="max-w-lg">
                  <div className="w-full rounded-md shadow-lg bg-white p-4 flex">
                    <div className="relative w-12 h-12 rounded-full shrink-0 mr-4 flex items-center justify-center overflow-hidden">
                      <div className="animate-pulse">
                        <div className="absolute inset-0 bg-primary opacity-20"></div>
                      </div>
                      <VideoCameraIcon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="h6 mb-1">Videos coming soon!</h2>
                      <p className="text-body-tint text-sm">
                        Please stay tuned as we prepare more content.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
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
            <div className="p-6 lg:basis-1/2 3xl:basis-3/5">
              <div className="relative max-w-prose">
                <div className="max-h-[600px] overflow-y-auto">
                  <Schedule
                    dates={eventDetails.dates}
                    venue={eventDetails.venue.name}
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
