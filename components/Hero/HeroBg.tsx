export function HeroBg() {
  return (
    <div className="relative w-full h-0 pb-[100%] motion-safe:animate-pulse-scale">
      <div className="absolute w-full h-full rounded-full p-0.5 overflow-hidden z-0">
        <div
          className="absolute w-full h-full top-0 left-0 bg-gradient-to-tr from-primary to-white animate-spin -z-10 opacity-50 motion-reduce:hidden"
          style={{ animationDuration: "4s" }}
        />
        <div className="w-full h-full rounded-full bg-white p-0.5">
          <div className="w-full h-full rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
