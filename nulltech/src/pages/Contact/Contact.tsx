import React from "react";
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
    <div className="Contact">
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
            <ul className="contactList p-4">
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Skopje, North Macedonia</p>
              </li>
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Ljubljana, Slovenia</p>
              </li>
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Belgrade, Serbia</p>
              </li>
            </ul>
          </div>

          <div className="col-12  col-md-6 col-lg-3">
            <h3 className="contactTitle">e-mail</h3>
            <ul className="contactList p-4">
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>info@nulltech.ai</p>
              </li>
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>vasko.d@nulltech.ai</p>
              </li>
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>aleksandar.d@nulltech.ai</p>
              </li>
            </ul>
          </div>

          <div className="col-12  col-md-6 col-lg-3">
            <h3 className="contactTitle">phone</h3>
            <ul className="contactList p-4">
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faPhone} />
                <p>+38978258848</p>
              </li>
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faPhone} />
                <p>+38970221997</p>
              </li>
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faPhone} />
                <p>+38978313742</p>
              </li>
            </ul>
          </div>

          <div className="col-12  col-md-6 col-lg-3">
            <h3 className="contactTitle">website</h3>
            <ul className="contactList p-4">
              <li className="contactItem d-flex gap-3 text-center">
                <FontAwesomeIcon icon={faGlobe} />
                <p>nulltech.ai</p>
              </li>
              <li className="contactItem d-flex gap-3">
                <FontAwesomeIcon icon={faGlobe} />
                <p>nulltech.ai</p>
              </li>
            </ul>
          </div>
        </div>

        <Check />
      </div>
    </div>
  );
};
