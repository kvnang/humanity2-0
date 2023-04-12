import type { StaticImageData } from "next/image";
import Image from "next/image";

export interface ProfileProps {
  name: string;
  title: string;
  organization: string;
  image: string | StaticImageData;
}

export function Profile({ name, title, organization, image }: ProfileProps) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="w-20 sm:w-28 lg:w-36 mb-6 relative z-0">
          <div className="w-full pb-[100%] bg-pink rounded-full absolute inset-0 translate-x-2 -translate-y-2 -z-10"></div>
          <div className="relative w-full pb-[100%] bg-gray-100 rounded-full overflow-hidden">
            <Image fill src={image} alt={name} />
          </div>
        </div>
        <div>
          <h5 className="text-base sm:text-md mb-2">{name}</h5>
          <div className="text-body-tint mb-1 text-sm sm:text-base">
            {title}
          </div>
          <div className="text-sm sm:text-base">{organization}</div>
        </div>
      </div>
    </div>
  );
}
