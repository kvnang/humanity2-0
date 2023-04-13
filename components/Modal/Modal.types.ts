import { StaticImageData } from "next/image";

export interface GalleryImageProps {
  id: number;
  src: StaticImageData;
  downloadUrl?: string;
}

export type GalleryProps = GalleryImageProps[];
