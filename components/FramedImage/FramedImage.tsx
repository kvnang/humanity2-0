export function FramedImage({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-4 pl-4 lg:pt-8 lg:pl-8 3xl:-ml-8">
      <div className="w-full relative z-0">
        <div className="absolute -z-10 -translate-y-4 lg:-translate-y-8 -translate-x-4 lg:-translate-x-8 bg-primary inset-0"></div>
        {children}
      </div>
    </div>
  );
}
