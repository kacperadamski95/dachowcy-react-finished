import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
const realization4 = () => {
  const {
    sliderDescription,
    sliderHeadlight,
    sliderImages,
    sliderImagesMobile,
    sliderImagesAlts,
  } = sliderData[3];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={`https://dachowcy.com/realizacje/sztutowo`} />
          <title>Realizacja Sztutowo - Dachowcy</title>
          <meta name="description" content="Zobacz nasza realizację w Sztutowie - budowa ogromnego dachu na budynku hipermarketu."/>
          <meta name="keywords" content="Dachowcy, województwo Pomorskie, dach, dekarz, firma dekarska, budowa dachu, remont dachu, przedsiębiorcy, więźba dachowa, dachówka ceramiczna, podbitka drewniana"/>  
        </Helmet>
      </HelmetProvider>
      <section className="section--background background--realizations">
        <h1><strong>{sliderHeadlight}</strong></h1>
        <p>{sliderDescription}</p>
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
    </>
  );
};

export default realization4;
