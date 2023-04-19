import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export function SuccessMessage({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="p-4 rounded-md shadow-md bg-bg-2/10">
      <div className="flex">
        <div className="relative w-12 h-12 rounded-full shrink-0 mr-4 flex items-center justify-center overflow-hidden">
          <div className="animate-pulse">
            <div className="absolute inset-0 bg-primary opacity-20"></div>
          </div>
          <PaperAirplaneIcon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="h6 mb-1">{title}</h2>
          <p className="text-body-tint text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}
