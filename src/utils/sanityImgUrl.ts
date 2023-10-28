import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanityClient";
import { ISanityImage } from "src/types";

export const sanityImgUrl = (source: ISanityImage) => {
  return imageUrlBuilder(sanityClient).image(source);
};

export const sanityImgCard = (source: ISanityImage) => {
  return imageUrlBuilder(sanityClient)
    .image(source)
    .width(600)
    .height(350)
    .focalPoint(0.5, 0)
    .crop("focalpoint")
    .fit("crop")
    .url();
};

