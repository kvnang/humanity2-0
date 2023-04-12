import { NumberedList } from "@/components/NumberedList";
import { Session, SessionProps } from "./Session";

export function Topic({
  title,
  sessions,
}: {
  title: string;
  sessions: SessionProps[];
}) {
  return (
    <div>
      <div className="mb-10">
        <h3 className="h3 max-w-lg">{title}</h3>
      </div>
      {sessions.map((session) => (
        <div className="mb-10 last:mb-0" key={session.title}>
          <Session {...session} />
        </div>
      ))}
    </div>
  );
}
