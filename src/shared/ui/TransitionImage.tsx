"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
export const TransitionImage = ({
  image,
  alt,
  width,
  height,
}: {
  image: StaticImageData;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Image
      alt={alt}
      src={image}
      width={width}
      height={height}
      sizes="100vw"
      className={`transition-opacity duration-500 ease-in ${
        imageLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: "100%",
        height: "auto",
      }}
      onLoadingComplete={() => setImageLoaded(true)}
    />
  );
};
