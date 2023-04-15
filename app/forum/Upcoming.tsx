import { TitleLine } from "@/components/TitleLine";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import forumImage from "@/assets/images/forum/2022/9H6A8052.jpg";

export function Upcoming({
  eventDetails,
}: {
  eventDetails: {
    title: string;
    date: string;
    venue: {
      name: string;
      city?: string;
    };
    description?: React.ReactNode;
  };
}) {
  return (
    <main>
      <section className="pt-page pb-section relative">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <div className="col-span-12 lg:col-span-7 2xl:col-span-6">
              <div className="lg:pr-8">
                <h1 className="mb-[0.75em] max-w-lg">
                  <TitleLine>{eventDetails.title}</TitleLine>
                </h1>
                <div className="mb-6">
                  <div className="flex mb-4 last:mb-0">
                    <CalendarDaysIcon className="w-5 h-5 shrink-0 mr-2 text-pink" />
                    <span className="font-semibold">{eventDetails.date}</span>
                  </div>
                  <div className="flex mb-4 last:mb-0">
                    <MapPinIcon className="w-5 h-5 shrink-0 mr-2 text-pink" />
                    <span className="font-semibold">
                      {eventDetails.venue.name}
                      {eventDetails.venue.city ? (
                        <>
                          <br />
                          <span className="font-normal">
                            {eventDetails.venue.city}
                          </span>
                        </>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="prose">{eventDetails.description}</div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 2xl:col-span-6">
              <div className="flex w-full h-full">
                <div className="flex-1 -mx-container -mb-section lg:ml-0 lg:-mt-page relative">
                  <div className="w-full pb-[56.25%] lg:pb-0 lg:h-full relative">
                    <Image
                      src={forumImage}
                      alt=""
                      fill
                      className="object-cover"
                      style={{ objectPosition: "80% center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
