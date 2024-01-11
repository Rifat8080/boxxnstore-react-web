import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import from the appropriate package, in this case, free-brands-svg-icons
import { faPhone, faEnvelope, faLocationDot,faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {

    // FOR PHONE NUMBER CAT
    const phoneNumber = '043478818'; // Replace with your actual phone number

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
        <div className="topbar text-light p-2">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">

                        {/* Left body of the topbar */}

                        <div className="me-3 me-lg-1 d-flex align-items-center " onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faPhone} className="px-2 px-lg-1" />                
                            <span className="d-none d-lg-inline">{phoneNumber}</span>
                        </div>

                        <div className="me-3 me-lg-1 d-flex align-items-center" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faEnvelope} className="px-2 px-lg-1" />
                            <span className="d-none d-lg-inline">{email}</span>
                        </div>

                        <div className="me-3 me-lg-1 d-flex align-items-center">
                            {/* WhatsApp icon with click handler */}
                            <a href="#" className="text-light mr-3" onClick={handleWhatsappClick} >
                                <FontAwesomeIcon icon={faWhatsapp} className="px-2 px-lg-1" />
                                <span className="d-none d-lg-inline">+971528244497</span>
                            </a>
                        </div>

                        <div className=" me-3 me-lg-1 d-flex align-items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="px-2 px-lg-1" />
                            <span className="d-none d-lg-inline">Dubai</span>
                        </div>

                        <div className=" me-3 d-flex align-items-center">
                        <FontAwesomeIcon icon={faClock} className="px-2 px-lg-1" />
                            <span className="d-none d-lg-inline">Timing : 8 am - 10 pm</span>
                        </div>
                    </div>


                    {/* Right body of the topbar */}
                        
                    <div className="d-flex justify-content-center align-items-center ">
                        
                        <div className='topbar-circle d-flex justify-content-center align-items-center me-1'>
                        <a href="#" className="text-light icon-background">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        </div>

                        <div className='topbar-circle d-flex justify-content-center align-items-center me-1'>
                        <a href="#" className="text-light icon-background">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        </div>

                        <div className='topbar-circle d-flex justify-content-center align-items-center me-1'>
                        <a href="#" className="text-light  icon-background">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        </div>

                        <div className='topbar-circle d-flex justify-content-center align-items-center me-1 me-lg-0'>
                        <a href="#" className="text-light icon-background">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TopBar;
