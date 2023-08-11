import classNames from "@utils/className";
import { MouseEvent, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProjectImageSliderProps {
  images: string[];
  className?: string;
}

const ProjectImageSlider = ({ images, className = "" }: ProjectImageSliderProps) => {
  const [indexActive, setIndexActive] = useState(0);
  const [imageActiveState, setImageActiveState] = useState({
    backgroundImage: `url(${images[indexActive]})`,
    backgroundPosition: "0% 0%",
    backgroundSize: "100%"
  });
  const handleChooseActive = (index: number) => {
    setIndexActive(index);
    setImageActiveState({
      backgroundPosition: "0% 0%",
      backgroundSize: "100%",
      backgroundImage: `url(${images[index]})`
    });
  };
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setImageActiveState({
      ...imageActiveState,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "initial"
    });
  };
  const handleMouseLeave = () => {
    setImageActiveState({
      ...imageActiveState,
      backgroundPosition: "0% 0%",
      backgroundSize: "100%"
    });
  };
  return (
    <div className={className}>
      <div
        className="object-top w-full overflow-hidden bg-no-repeat border border-gray-600 rounded-lg aspect-video image-reset cursor-zoom-in"
        style={imageActiveState}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <div className="relative flex gap-2 py-3 overflow-x-auto customScrollbar">
        {images.map((image, index) => (
          <div
            key={index}
            className={classNames(
              "inline-block rounded-md overflow-hidden transition-all duration-200 cursor-pointer w-20 h-20 bg-linearCard flex-shrink-0 border-2",
              indexActive === index ? " border-[#00ffea]" : "border-gray-600"
            )}
            onClick={() => handleChooseActive(index)}
            onMouseEnter={() => handleChooseActive(index)}
          >
            <LazyLoadImage
              src={image}
              alt={`image-${index}`}
              width={200}
              height={200}
              className="object-cover object-top w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImageSlider;