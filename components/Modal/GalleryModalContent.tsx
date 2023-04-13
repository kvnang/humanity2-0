"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { modalVariants } from "@/lib/animationVariants";
import downloadPhoto from "@/lib/downloadPhoto";
import { range } from "@/lib/range";
import type { GalleryProps, GalleryImageProps } from "./Modal.types";
import {
  CloseButton,
  ButtonsWrapper,
  LinkButton,
  DownloadButton,
} from "./ModalButtons";
import clsx from "clsx";

export function GalleryModalContent({
  index,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: {
  index: number;
  images?: GalleryProps;
  currentPhoto?: GalleryImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}) {
  const [loaded, setLoaded] = useState(false);

  let filteredImages = images?.filter((img: GalleryImageProps) =>
    range(index - 15, index + 15).includes(img.id)
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const lastIndex = images?.length ? images.length - 1 : 0;
      if (index < lastIndex) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  let currentImage = images ? images[index] : currentPhoto;

  if (!currentImage || !currentImage.src || !images) return null;

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className={clsx(
          "relative z-50 flex w-[90vw] h-[90vh] items-center justify-center"
        )}
        {...handlers}
      >
        {/* Main image */}
        <div
          className={clsx(
            "flex items-center justify-center overflow-hidden transition-all",
            currentImage.src.width < currentImage.src.height
              ? "h-full w-auto"
              : "w-full h-auto"
          )}
        >
          <div
            className="relative flex items-center justify-center w-full h-full"
            style={{
              aspectRatio: currentImage.src.width / currentImage.src.height,
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={modalVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                <Image
                  src={currentImage.src}
                  // width={navigation ? currentImage.src.width : 1920}
                  // height={navigation ? currentImage.src.height : 1280}
                  priority
                  alt=""
                  onLoadingComplete={() => setLoaded(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons + bottom nav bar */}
        <div
          className={clsx("absolute inset-0 flex items-center justify-center")}
        >
          {/* Buttons */}
          {loaded && (
            <div
              className="relative h-full w-full"
              style={{
                aspectRatio: currentImage.src.width / currentImage.src.height,
              }}
            >
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-bg-8/10 p-3 text-black backdrop-blur-lg transition hover:bg-black hover:text-white focus:outline-none"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changePhotoId(index - 1)}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                  )}
                  {index + 1 < images.length && (
                    <button
                      className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-bg-8/10 p-3 text-black backdrop-blur-lg transition hover:bg-black hover:text-white focus:outline-none"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changePhotoId(index + 1)}
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  )}
                </>
              )}
              <ButtonsWrapper position="left">
                {navigation && (
                  <LinkButton
                    href={
                      typeof currentImage.src === "string"
                        ? currentImage.src
                        : currentImage.src.src
                    }
                    target="_blank"
                    title="Open fullsize version"
                    rel="noopener noreferrer"
                  />
                )}
                <DownloadButton
                  onClick={() => {
                    if (!currentImage?.src) return;
                    downloadPhoto(
                      typeof currentImage.src === "string"
                        ? currentImage.src
                        : currentImage.src.src,
                      `${index}.jpg`
                    );
                  }}
                  title="Download fullsize version"
                />
              </ButtonsWrapper>
              <ButtonsWrapper>
                <CloseButton onClick={() => closeModal()} title="Close" />
              </ButtonsWrapper>
            </div>
          )}
          {/* Bottom Nav bar */}
          {navigation && (
            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mt-6 mb-6 flex aspect-[4/3] h-14"
              >
                <AnimatePresence initial={false}>
                  {filteredImages?.map(({ src, id }) => {
                    if (!src) return null;

                    return (
                      <motion.button
                        initial={{
                          width: "0%",
                          x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                        }}
                        animate={{
                          scale: id === index ? 1.25 : 1,
                          width: "100%",
                          x: `${Math.max(index * -100, 15 * -100)}%`,
                        }}
                        exit={{ width: "0%" }}
                        onClick={() => changePhotoId(id)}
                        key={id}
                        className={`${
                          id === index
                            ? "z-20 rounded-md shadow shadow-black-1/2"
                            : "z-10"
                        } ${id === 0 ? "rounded-l-md" : ""} ${
                          id === images.length - 1 ? "rounded-r-md" : ""
                        } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                      >
                        <Image
                          alt="small photos on the bottom"
                          width={180}
                          height={120}
                          className={`${
                            id === index
                              ? "brightness-110 hover:brightness-110"
                              : "brightness-50 contrast-125 hover:brightness-75"
                          } h-full transform object-cover transition`}
                          src={src}
                        />
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}
