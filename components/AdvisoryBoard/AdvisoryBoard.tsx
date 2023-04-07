import { advisoryBoard } from "@/lib/advisoryBoard";
import { Profile } from "@/components/Profile";

export function AdvisoryBoard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      {advisoryBoard.map((member) => (
        <Profile key={member.name} {...member} />
      ))}
    </div>
  );
}
