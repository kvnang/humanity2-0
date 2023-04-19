import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface SpeakerProps {
  name: string;
  role?: string;
  title?: string;
}

export type ScheduleProps = {
  title?: string;
  time?: string;
  speakers?: SpeakerProps[];
  secondary?: boolean;
  separator?: boolean;
};

export function ScheduleItem({
  title,
  time,
  speakers,
  secondary,
}: {
  title: string;
  time: string;
  speakers?: SpeakerProps[];
  secondary?: boolean;
}) {
  return (
    <>
      <div
        className={clsx(`h5 mb-2`, secondary ? `text-base font-medium` : ``)}
      >
        {title}
      </div>
      <div className="font-mono text-sm text-body-tint mb-2">{time}</div>
      {!!speakers?.length && (
        <div>
          <ul>
            {speakers.map((speaker) => (
              <li key={speaker.name}>
                {speaker.name}
                {speaker.role ? (
                  <span className="inline-block align-middle text-xs font-semibold rounded-full px-2 py-0.5 ml-2 bg-gray-100">
                    {speaker.role}
                  </span>
                ) : null}
                {speaker.title ? (
                  <span className="text-body-tint"> - {speaker.title}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export function ScheduleItemSeparator() {
  return <div className="border-b border-primary"></div>;
}

export function Schedule({
  dates,
  venue,
  schedule,
}: {
  dates: string;
  venue: string;
  schedule: ScheduleProps[];
}) {
  return (
    <div className="max-w-prose">
      <div className="mb-8 overflow-hidden">
        <div className="flex flex-wrap -m-2">
          <div className="flex p-2">
            <CalendarDaysIcon className="w-6 h-6 stroke-2 shrink-0 mr-2 text-pink" />
            <span>{dates}</span>
          </div>
          <div className="flex p-2">
            <MapPinIcon className="w-6 h-6 stroke-2 shrink-0 mr-2 text-pink" />
            <span>{venue}</span>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <ScheduleItemSeparator />
      </div>
      <ul>
        {schedule.map((item, i) => {
          if ("separator" in item) {
            return (
              <li key={`separator-${i}`} className="mb-8 last:mb-0">
                <ScheduleItemSeparator />
              </li>
            );
          }

          return (
            <li key={`${item.title}-${i}`} className="mb-8 last:mb-0">
              <ScheduleItem
                title={item.title || ""}
                time={item.time || ""}
                speakers={item.speakers}
                secondary={item.secondary}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
