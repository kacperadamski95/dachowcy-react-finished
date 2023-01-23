import React from 'react';
const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__section'>

                <address className="localization">
                    <img src={require("../images/Footer-images/placeholder-min-min.png")} alt="ikonka lokalizacji" width="51.2" height="51.2"></img>
                    <div className="address--links">
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://www.google.com/maps/place/Benowo+7,+82-420+Benowo/@53.8929861,18.9235004,17z/data=!3m1!4b1!4m5!3m4!1s0x4702a42cf149dbc1:0xc6bb4acc0cce881a!8m2!3d53.8929861!4d18.9256891">
                            Adres:
                            <br />
                            Benowo 7
                            <br />
                            82-420 Ryjewo
                            <br />
                        </a>
                    </div>
                </address>
                <address className="phone">
                    <img src={require("../images/Footer-images/phone-min-min.png")} alt="ikonka telefonu" width="51.2" height="51.2"></img>
                    <div className="address--links">
                        <a href="tel:601675058">
                            Telefon:
                            <br />
                            Krzysztof Dobies
                            <br />
                            601-675-058
                        </a>
                    </div>
                </address>
            </div>
            <div className='footer__section'>
                <address className="phone">
                    <img src={require("../images/Footer-images/phone-min-min.png")} alt="ikonka telefonu" width="51.2" height="51.2"></img>
                    <div className="address--links">
                        <a href="tel:601675024">
                            Telefon:
                            <br />
                            Elżbieta Dobies
                            <br />
                            601-675-024
                        </a>
                    </div>
                </address>
                <address className="email">
                    <img src={require("../images/Footer-images/email-min-min.png")} alt="ikonka maila" width="51.2" height="51.2"></img>
                    <div className="address--links">
                        <a href="mailto: ela.dobies@gmail.com">
                            E-mail:
                            <br />
                            ela.dobies@gmail.com
                        </a>
                    </div>
                </address>
            </div>
        </footer>
    );
}

export default Footer