import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SliderTile from '../components/SliderTile';
import sliderData from '../data/sliderData';


const Realizations = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <link rel="canonical" href={`https://dachowcy.com/realizacje`} />
                    <title>Realizacje - Dachowcy</title>
                    <meta name="description" content="Wejdź i sprawdź nasze realizacje - zapoznaj się z wykonanymi przez nas projektami!"/>
                    <meta name="keywords" content="dach, budowa dachu, remont dachu, realizacja, projekt, sprawdź, klienci indywidualni, przedsiębiorcy"/>  
                </Helmet>
            </HelmetProvider>
            <section id="realizations" className="section--background">
                <h1>Realizacje</h1>
                <div className="slider">
                    {
                        sliderData.map((slider, index) => {
                            return (
                                <SliderTile
                                    key={index}
                                    realizationLink={slider.sliderAnchorHref}
                                    numberOfPictures={slider.sliderImages.length}
                                    arrayOfPicturesMobile={slider.sliderImagesMobile}
                                    sliderShortDescription={slider.sliderShortDescription}
                                    sliderImagesAlts={slider.sliderImagesAlts}
                                >
                                </SliderTile>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}
export default Realizations;
