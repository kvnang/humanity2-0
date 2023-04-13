import { ButtonLink } from "@/components/Button";
import { GooglePhotosIcon } from "@/components/Icons";
import Image, { StaticImageData } from "next/image";
import { photos } from "@/lib/forum2022";

interface PhotoProps {
  src: string | StaticImageData;
  objectPosition?: string;
}

function PhotoPreview({ photo }: { photo: PhotoProps }) {
  return (
    <Image
      src={photo.src}
      alt=""
      fill
      className="object-cover"
      style={{ objectPosition: photo.objectPosition }}
    />
  );
}

export function Photos() {
  return (
    <div className="relative">
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:gap-8">
          <div className="grid grid-rows-2 gap-4 2xl:gap-8">
            <div className="relative w-full pb-[60%] bg-white rounded-md overflow-hidden">
              <PhotoPreview photo={photos[0]}></PhotoPreview>
            </div>
            <div className="relative w-full pb-[60%] bg-white rounded-md overflow-hidden">
              <PhotoPreview photo={photos[1]}></PhotoPreview>
            </div>
          </div>
          <div className="grid gap-4 2xl:gap-8">
            <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
              <PhotoPreview photo={photos[2]}></PhotoPreview>
            </div>
          </div>
          <div className="hidden md:grid grid-rows-[4fr_2fr] gap-4 2xl:gap-8">
            <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
              <PhotoPreview photo={photos[3]}></PhotoPreview>
            </div>
            <div className="grid grid-cols-2 gap-4 2xl:gap-8">
              <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
                <PhotoPreview photo={photos[4]}></PhotoPreview>
              </div>
              <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
                <PhotoPreview photo={photos[5]}></PhotoPreview>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid grid-rows-2 gap-4 2xl:gap-8">
            <div className="relative w-full pb-[60%] bg-white rounded-md overflow-hidden">
              <PhotoPreview photo={photos[6]}></PhotoPreview>
            </div>
            <div className="relative w-full pb-[60%] bg-white rounded-md overflow-hidden">
              <PhotoPreview photo={photos[7]}></PhotoPreview>
            </div>
          </div>
        </div>
        {/* <div className="absolute w-full h-[25%] bottom-0 left-0 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div> */}
      </div>
      <div className="w-full mt-8">
        <div className="container">
          <div className="flex items-end justify-end">
            <ButtonLink href="/" className="">
              <div className="w-12 h-8 absolute top-1/2 -translate-y-1/2 left-0 -ml-12">
                <GooglePhotosIcon className="w-8 h-8" />
              </div>
              <span>View Album</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
