import React from 'react';
const Home = () => {
    return (
        <>
            <section id="home" className="main-page section--background">
                <h1>O nas</h1>
                <article className="about-us">
                    <div className="text--information">
                        <p><strong>Dachy</strong> to nasza specjalność. <strong>Remontujemy</strong> i <strong>budujemy</strong> dachy od wielu lat.
                            Jesteśmy rodzinną firmą, działająca głównie na terenie <strong>województwa pomorskiego</strong>,
                            choć zdarzało się, że podejmowaliśmy się realizacji inwestycji poza granicami naszego
                            województwa, głównie w województwach ościennych.
                            Nasze usługi świadczymy zarówno <strong>dużym przedsiębiorcom</strong>, jak i <strong>indywidualnym klientom</strong>.
                            Nasze doświadczenie i jakość usług dokumentują zrealizowane inwestycje,
                            z których wybrane prezentujemy w zakładce realizacje.
                        </p>
                        <br />
                        <p>Oferujemy najwyższy poziom usług w zakresie:</p>
                        <br />
                        <ul>
                            <li><strong>więźba dachowa</strong> – stawianie nowej więźby dachowej, remont, wymiana zużytych elementów</li>
                            <li><strong>pokrycie dachowe</strong> - dachówka cementowa, ceramiczna, karpiówka, blachodachówka, blacha na rąbek,
                                blacha trapezowa, papa termozgrzewalna</li>
                            <li><strong>okna</strong> i <strong>wyłazy dachowe</strong></li>
                            <li><strong>elementy infrastruktury dachowej</strong> – stopnie kominiarskie, śniegołapy, kominki wentylacyjne</li>
                            <li><strong>obróbki blacharskie</strong></li>
                            <li><strong>rynny</strong> i <strong>rynny spustowe</strong></li>
                            <li><strong>kominy</strong> – budowa, ocieplanie, obróbka</li>
                            <li><strong>demontaż eternitu</strong></li>
                        </ul>
                    </div>
                    <img className="main-page__picture" src={require("../images/Subpages-images/main-page-img.webp")} alt="" width="553" height="700"></img>
                </article>
            </section>
        </>
    );
}

export default Home;