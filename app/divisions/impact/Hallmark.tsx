import { ImageHighlight } from "@/components/ImageHighlight";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

export function Hallmark({
  index,
  image,
  logo,
  title,
  text,
  website,
  featured,
}: {
  index: number;
  image: StaticImageData;
  logo?: StaticImageData;
  title: string;
  text: string | React.ReactNode;
  website?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-md overflow-hidden shadow-md flex flex-col ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div className={`${featured ? "lg:w-1/3 lg:shrink-0 2xl:w-2/5" : ""}`}>
        <ImageHighlight
          className={`w-full pb-[45%] ${featured ? "lg:pb-0 lg:h-full" : ""}`}
          align={index % 2 ? "right" : "left"}
        >
          <Image
            src={image}
            alt=""
            placeholder="blur"
            fill
            className="object-cover"
          />
        </ImageHighlight>
      </div>
      <div className="p-4 md:p-6 h-full flex flex-col">
        <div className="flex-1">
          {logo && (
            <div className="mb-4">
              <Image
                src={logo}
                alt={title}
                className={`h-4 w-auto ${featured ? "lg:h-6" : ""}`}
              />
            </div>
          )}
          <div className="prose">
            <h3 className="h6">{title}</h3>
            <div className="text-sm text-body-tint">
              {typeof text === "string" ? <p>{text}</p> : text}
            </div>
          </div>
        </div>
        {website && (
          <div className="flex justify-end">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm no-underline transition-colors hover:text-primary font-semibold"
            >
              Website
              <ArrowUpRightIcon className="w-4 h-4 ml-1 shrink-0" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
