import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import from the appropriate package, in this case, free-brands-svg-icons
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {

    // FOR PHONE NUMBER CAT
    const phoneNumber = '123-456-7890'; // Replace with your actual phone number

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    // For email handling code

    const email = 'INFO@BOXXNSTORE.COM'; // Replace with your actual phone number

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    // FOR WHATSAPP FORWARD LINK CAT(CALL TO ACTION)

    const whatsappNumber = '+971528244497'; // Replace with your actual WhatsApp phone number

    // ...

    const handleWhatsappClick = () => {
        // Construct the WhatsApp message link
        const whatsappLink = `https://wa.me/${whatsappNumber}`;

        // Open the WhatsApp message link in a new tab
        window.open(whatsappLink, '_blank');
    };



    return (
        <div className=" topbar  bg-dark text-light p-2">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="mr-3" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faPhone}  className="mr-1"/>
                            <span>{phoneNumber}</span>
                        </div>
                        <div className="mr-3" onClick={handleEmailClick} style={{cursor:'pointer'}}>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-1"/>
                            <span>{email}</span>
                        </div>


                        <div className="d-flex align-items-center">
                            {/* WhatsApp icon with click handler */}
                            <a href="#" className="text-light mr-3" onClick={handleWhatsappClick}>
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
                                <span>+971528244497</span>
                            </a>
                        </div>

                        <div>
                        <FontAwesomeIcon icon={faMapMarker} className="mr-1" />
                            <span>Dubai</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href="#" className="text-light mr-3">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-light mr-3">
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-light">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
