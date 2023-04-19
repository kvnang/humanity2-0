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
    <div>
      <div className="mb-6">
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
      <div>
        <div className="prose">
          <h3 className="h6">{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
