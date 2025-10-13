import { Check } from "../../components/Check";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="Contact p-5">
      <div className="container">
        <Check />

        <div className="row text-center justify-content-center ">
          <h2 className="TITLE">lets keep in touch</h2>
          <p className="titleDescription">
            if you are interested in what we have to offer from out
            presentation, feel to contact us!
          </p>
        </div>
        <div className="row rowBlur   my-5 ">
          <div className="col-12  col-md-6 col-lg-3 ">
            <h3 className="contactTitle">offices</h3>
            <ul className="contactList ">
              <li className="contactItem d-flex align-items-center gap-3">
                <a
                  href="https://www.google.com/maps/place/Skopje,+North+Macedonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactLink"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="contactItemDescription">
                    Skopje, North Macedonia
                  </p>
                </a>
              </li>
              <li className="contactItem d-flex gap-3">
                <a
                  href="https://www.google.com/maps/place/Ljubljana,+Slovenia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactLink"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="contactItemDescription">Ljubljana, Slovenia</p>
                </a>
              </li>
              <li className="contactItem d-flex gap-3">
                <a
                  href="https://www.google.com/maps/place/Belgrade,+Serbia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactLink d-flex align-items-center gap-3"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="contactItemDescription">Belgrade, Serbia</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12  col-md-6 col-lg-3">
            <h3 className="contactTitle">e-mail</h3>
            <ul className="contactList ">
              <li className="contactItem d-flex align-items-center gap-3">
                <a href="mailto:info@nulltech.ai " className="contactLink">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p className="contactItemDescription">info@nulltech.ai</p>
                </a>
              </li>
              <li className="contactItem d-flex  align-items-center gap-3">
                <a href="mailto:vasko.d@nulltech.ai" className="contactLink">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p className="contactItemDescription">vasko.d@nulltech.ai</p>
                </a>
              </li>
              <li className="contactItem d-flex  align-items-center gap-3">
                <a
                  href="mailto: aleksandar.d@nulltech.ai "
                  className="contactLink"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p className="contactItemDescription">
                    aleksandar.d@nulltech.ai
                  </p>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12  col-md-6 col-lg-3">
            <h3 className="contactTitle">phone</h3>
            <ul className="contactList">
              <li className="contactItem d-flex  align-items-center gap-3">
                <FontAwesomeIcon icon={faPhone} />
                <p className="contactItemDescription">+38978258848</p>
              </li>
              <li className="contactItem d-flex  align-items-center gap-3">
                <FontAwesomeIcon icon={faPhone} />
                <p className="contactItemDescription">+38970221997</p>
              </li>
              <li className="contactItem d-flex align-items-center gap-3">
                <FontAwesomeIcon icon={faPhone} />
                <p className="contactItemDescription">+38978313742</p>
              </li>
            </ul>
          </div>

          <div className="col-12  col-md-6 col-lg-3">
            <h3 className="contactTitle">website</h3>
            <ul className="contactList ">
              <li className="contactItem d-flex align-items-center gap-3">
                <a href="#" className="contactLink">
                  <FontAwesomeIcon icon={faGlobe} />
                  <p className="contactItemDescription">nulltech.ai</p>
                </a>
              </li>
              <li className="contactItem d-flex gap-3">
                <a href="#" className="contactLink">
                  <FontAwesomeIcon icon={faGlobe} />
                  <p className="contactItemDescription">nulltech.mk</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Check />
      </div>
    </div>
  );
};
