export function Blockquote({
  text,
  author,
}: {
  text: string;
  author?: string;
}) {
  return (
    <div className="pl-4 md:pl-12">
      <blockquote className="relative">
        <div className="absolute -top-[0.25em] -left-[0.5em] text-primary font-sans leading-none text-[4rem] md:text-[5rem]">
          &ldquo;
        </div>
        <p className="h6 lg:text-md">{text}</p>
        {author && <cite className="mt-4 block not-italic">- {author}</cite>}
      </blockquote>
    </div>
  );
}
