import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MaterialTile from '../components/MaterialTile'
import materialData from '../data/materialData'


const Offer = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <link rel="canonical" href={`https://dachowcy.com/oferta`} />
                    <title>Oferta - Dachowcy</title>
                    <meta name="description" content="Budowa i remont dachu. Sprawdź oferowane przez nas usługi. Szybka realizacja, wysoka jakość. Na pewno znajdziesz coś dla siebie!"/>
                    <meta name="keywords" content="dachówka, blacha, papa, styropapa, obróbki blacharskie, więźba dachowa, łaty i kontrłaty, podbitka, karpiówka, dachówka klasztorna, 
                    dachówka ceramiczna płaska, mniszka, holenderka, marsylka, łupek, blachodachówka, okna, kominki wentylacyjne, śniegołapy"/>  
                </Helmet>
            </HelmetProvider>
            <section id="offer" className="section--background">
                <h1>Kompleksowa budowa dachów</h1>
                <div className="offer__tiles">
                    {
                        materialData.map((material, index) => {
                            return (
                                <MaterialTile
                                    key={index}
                                    materialClass={material.materialClass}
                                    materialIconSrc={material.materialIcon}
                                    materialIconAlt={material.materialAlt}
                                    materialTitle={material.materialTitle}
                                >
                                    {material.materialDescription}
                                </MaterialTile>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Offer;