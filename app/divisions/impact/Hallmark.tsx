import { ImageHighlight } from "@/components/ImageHighlight";
import Image, { StaticImageData } from "next/image";

export function Hallmark({
  index,
  image,
  title,
  text,
}: {
  index: number;
  image: StaticImageData;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md">
      <div>
        <ImageHighlight
          className="w-full pb-[45%]"
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
      <div className="p-4 md:p-6">
        <div className="prose">
          <h3 className="h6">{title}</h3>
          <p className="text-sm text-body-tint">{text}</p>
        </div>
      </div>
    </div>
  );
}
