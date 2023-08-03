import ContactForm from './ContactForm/ContactForm';
import Locations from './Locations/Locations';
import './ContactUs.css';
import icon from "../images/C21.png";

const ContactUs = () => (
  <div className="main">
    <img src={icon} className="image-icon" alt="loading..." />
    <div className="container">
      <div className="main-div">
        <div className="header-wrapper">
          <div className="main-header">CENTURY 21 CYPRUS</div>
          <div className="sub-header">CONTACT US</div>
        </div>
        <div className="main-sub-div">
          <div>
            <Locations/>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;