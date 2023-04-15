import { NumberedList } from "@/components/NumberedList";
import { Session, SessionProps } from "./Session";

export function Topic({
  title,
  description,
  sessions,
}: {
  title: string;
  description?: React.ReactNode;
  sessions: SessionProps[];
}) {
  return (
    <div>
      <div className="mb-10">
        <h3 className="h3 max-w-xl mb-[1em] last:mb-0 flex">
          <div className="hidden group-first/topic:block">
            <NumberedList.Number className="text-2xl md:-ml-[calc(1.5em_+_1rem)]" />
          </div>
          {title}
        </h3>
        {description ? (
          <div className="prose group-even:text-white">{description}</div>
        ) : null}
      </div>
      {sessions.map((session) => (
        <div className="mb-10 last:mb-0" key={session.title}>
          <Session {...session} />
        </div>
      ))}
    </div>
  );
}
