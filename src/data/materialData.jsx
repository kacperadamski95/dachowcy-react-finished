import React from 'react';
const materialData = [
    {
        materialClass: "material--wood",
        materialIcon: require("../images/Offer-images/wood.png"),
        materialAlt: "Ikonka Drewna",
        materialTitle: "Drewno na dachu",
        materialDescription:
            <ul>
                <li>więźba dachowa – budowa nowych konstrukcji, remont i wymiana zużytych elementów</li>
                <li>łaty i kontrłaty – ich odpowiedni montaż jest gwarancją prawidłowego umocowania dachówki, blachodachówki
                    itp., jak również estetycznego wyglądu dachu</li>
                <li>podbitka – to taka kropka nad „i” jest w dużej mierze elementem wpływający na estetykę dachu. Dodatkowo
                    dociepla dom i chroni więźbę przed niekorzystnym wpływem warunków atmosferycznych</li>
            </ul>
    },
    {
        materialClass: "material--tile",
        materialIcon: require("../images/Offer-images/tile.png"),
        materialAlt: "Ikonka Dachówki",
        materialTitle: "Dachówka",
        materialDescription:
            <>
                <p>Na rynku obecnych jest wiele rodzajów dachówki ceramicznej i cementowej.
                    <br />
                    Jest to m.in.</p>
                <ul>
                    <li>karpiówka</li>
                    <li>dachówka klasztorna</li>
                    <li>dachówka ceramiczna płaska</li>
                    <li>mniszka</li>
                    <li>holenderka</li>
                    <li>marsylka</li>
                    <li>łupek</li>
                </ul>
                <p>
                    Zgodnie z życzeniem klienta
                    oferujemy krycie każdą z nich.
                </p>
            </>
    },
    {
        materialClass: "material--tinware",
        materialIcon: require("../images/Offer-images/tinware.png"),
        materialAlt: "Ikonka Blachy",
        materialTitle: "Blacha",
        materialDescription:
            <>
                <p>Wykonujemy pokrycia dachowe ze wszystkich dostępnych na rynku rodzajów blach, takich jak:</p>
                <ul>
                    <li>blachodachówka</li>
                    <li>blacha na rąbek</li>
                    <li>blachodachówka modułowa</li>
                    <li>blachodachówka z posypką</li>
                    <li>blacha trapezowa</li>
                </ul>
            </>
    },
    {
        materialClass: "material--mug",
        materialIcon: require("../images/Offer-images/mug.png"),
        materialAlt: "Ikonka Papy",
        materialTitle: "Papa",
        materialDescription:
            <>
                <p>Oferujemy krycie dachów papą oraz hydroizolacje z użyciem m.in.</p>
                <ul>
                    <li>papy termozgrzewalnej</li>
                    <li>podkładowej</li>
                    <li>nawierzchniowej</li>
                    <li>styropapy</li>
                </ul>
            </>
    },
    {
        materialClass: "material--flashings",
        materialIcon: require("../images/Offer-images/flashings.png"),
        materialAlt: "Ikonka Obróbek Blacharskich",
        materialTitle: "Obróbki Blacharskie",
        materialDescription:
            <>
                <p>
                    Dbałość o szczegóły w wykonaniu wszystkich elementów dachu od początku do końca jest gwarantem
                    solidności,
                    trwałości oraz bezproblemowej eksploatacji zbudowanych przez nas dachów.
                    Oferujemy profilowanie i montaż niezbędnych obróbek blacharskich.
                </p>
            </>
    },
    {
        materialClass: "material--windows",
        materialIcon: require("../images/Offer-images/flashings.png"),
        materialAlt: "Ikonka Reszty Infrastruktyry Dachowej",
        materialTitle: "Reszta Infrastruktury Dachowej",
        materialDescription:
            <>
                <p>Montujemy:</p>
                <ul>
                    <li>okna i wyłazy dachowe</li>
                    <li>kominki wentylacyjne</li>
                    <li>stopnie kominiarskie</li>
                    <li>śniegołapy</li>
                </ul>
            </>
    }
]

export default materialData;