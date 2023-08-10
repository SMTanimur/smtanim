import classNames from "@utils/className";
import { sanityImgUrl } from "@utils/sanityImgUrl";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { IProjectImages } from "src/types";

interface ProjectImageSliderProps {
  images: IProjectImages[];
  className?: string;
}

const ProjectImageSlider = ({ images, className = "" }: ProjectImageSliderProps) => {
  const [indexActive, setIndexActive] = useState(0);
  const [imageActiveState, setImageActiveState] = useState({
    backgroundImage: `url(${sanityImgUrl(images[indexActive]).width(1300).url()})`,
    backgroundPosition: "0% 0%",
    backgroundSize: "cover",
  });
  const handleChooseActive = (index: number) => {
    setIndexActive(index);
    setImageActiveState({
      ...imageActiveState,
      backgroundImage: `url(${sanityImgUrl(images[index]).width(1200).url()})`,
    });
  };
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setImageActiveState({
      ...imageActiveState,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "initial",
    });
  };
  const handleMouseLeave = () => {
    setImageActiveState({
      ...imageActiveState,
      backgroundPosition: "0% 0%",
      backgroundSize: "cover",
    });
  };

  return (
    <div className={className}>
      <div
        className="object-cover object-top w-full overflow-hidden bg-no-repeat bg-cover border border-gray-600 rounded-lg aspect-video image-reset bg-linearPurple2 cursor-zoom-in"
        style={imageActiveState}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <div className="relative flex gap-2 py-3 overflow-x-auto customScrollbar">
        {images.map((image, index) => (
          <div
            key={image._key}
            className={classNames(
              "inline-block rounded-md overflow-hidden transition-all duration-200 cursor-pointer w-20 h-20 bg-linearCard flex-shrink-0 border-2",
              indexActive === index ? " border-[#00ffea]" : "border-gray-600"
            )}
            onClick={() => handleChooseActive(index)}
            onMouseEnter={() => handleChooseActive(index)}
          >
            <Image
              src={sanityImgUrl(image).width(200).url()}
              alt="project-preview"
              width={200}
              height={200}
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImageSlider;
