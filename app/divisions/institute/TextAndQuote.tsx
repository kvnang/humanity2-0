import { Blockquote } from "./Blockquote";

export function TextAndQuote({
  text,
  quote,
  reverse,
}: {
  text?: React.ReactNode;
  quote?: {
    text: string;
    author?: string;
  };
  reverse?: boolean;
}) {
  return (
    <div className="flex flex-wrap -mx-4">
      <div
        className={`px-4 basis-full mb-8 xl:basis-1/3 ${
          reverse ? "" : "xl:order-1"
        }`}
      >
        {quote && (
          <div className="pt-4 md:pt-6 xl:pt-0">
            <Blockquote text={quote.text} author={quote.author} />
          </div>
        )}
      </div>
      <div className="px-4 basis-full xl:basis-2/3">
        <div className="">
          <div className="prose text-current">{text}</div>
        </div>
      </div>
    </div>
  );
}
