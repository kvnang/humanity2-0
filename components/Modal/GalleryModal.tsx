"use client";

import * as React from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
// @ts-ignore
import useKeypress from "react-use-keypress";
import { GalleryModalContent } from "./GalleryModalContent";
import type { GalleryImageProps, GalleryProps } from "./Modal.types";

export function GalleryModal({
  images,
  onClose,
  onChange,
  currentPhoto,
}: {
  images: GalleryProps;
  onClose?: () => void;
  onChange?: (newVal: number) => void;
  currentPhoto?: GalleryImageProps;
}) {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const photoId = currentPhoto?.id;
  const index = Number(photoId);

  const [direction, setDirection] = React.useState(0);
  const [curIndex, setCurIndex] = React.useState(index);

  function handleClose() {
    onClose?.();
  }

  function changePhotoId(newVal: number) {
    setDirection(newVal > index ? 1 : -1);
    setCurIndex(newVal);
    onChange?.(newVal);
  }

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black-1/2 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <GalleryModalContent
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
