import React from 'react';

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
      return <section className="contact">
         <div id="ff-compose"></div>
      </section>
   }
}

export default Contact;