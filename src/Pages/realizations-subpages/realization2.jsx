import React from "react";
import sliderData from "../../data/sliderData";
import { useEffect, useState } from "react";

function MyImage({ src, index, sliderImagesMobile, sliderImagesAlts }) {
  const [imageUrl, setImageUrl] = useState(src);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageUrl(sliderImagesMobile[index]);
      } else {
        setImageUrl(src);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [src, index, sliderImagesMobile]);

  return (
    <img
      width="100%"
      height="100%"
      src={imageUrl}
      alt={sliderImagesAlts[index]}
    />
  );
}
const realization2 = () => {
  const {
    sliderDescription,
    sliderImages,
    sliderImagesMobile,
    sliderImagesAlts,
  } = sliderData[1];
  return (
    <section className="section--background background--realizations">
      <h1>{sliderDescription}</h1>
      <div className="realizations--images">
        {sliderImages.map((src, index) => (
          <MyImage
            width="100%"
            height="auto"
            key={index}
            src={src}
            index={index}
            sliderImagesMobile={sliderImagesMobile}
            sliderImagesAlts={sliderImagesAlts}
          />
        ))}
      </div>
    </section>
  );
};

export default realization2;
