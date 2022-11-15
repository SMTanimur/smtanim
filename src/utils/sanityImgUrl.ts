import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanityClient";

export function sanityImgUrl(source: any) {
  return imageUrlBuilder(sanityClient).image(source);
}
