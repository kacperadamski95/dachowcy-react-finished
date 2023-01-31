import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

class Contact extends React.Component {
   componentDidMount() {
      var script = document.createElement("script");
      script.id = "ff-script";
      script.src = "https://formfacade.com/include/108593390326212194144/form/1FAIpQLSfVlF43KcO1mhpO0I9EZcau2S7NZqhLsxsGEtVV1SbbHUft_w/classic.js?div=ff-compose";
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
   }
   render() {
      return (
      <>
         <HelmetProvider>
            <Helmet>
               <link rel="canonical" href={`https://dachowcy.com/kontakt`} />
               <title>Kontakt - Dachowcy</title>
               <meta name="description" content="Szukasz kontaktu z nasza firmą? Chcesz zrobić remont dachu lub zbudować dach? Tutaj znajdziesz nasz numer telefonu, adres mailowy, formularz kontaktowy. Zapraszamy!"/>
               <meta name="keywords" content="dachy, kontakt, telefon, email, mail, formularz kontaktowy, Dachowcy"/>  
            </Helmet>
         </HelmetProvider>
         <section className="contact">
            <h1>Kontakt</h1>
            <div id="ff-compose"></div>
         </section>
      </>
      )
   }
}

export default Contact;