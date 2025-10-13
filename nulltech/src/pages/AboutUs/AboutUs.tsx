import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Check } from "../../components/Check";

export const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="container">
        <Check />
        <div className="aboutUsContent d-flex justify-content-center flex-column align-items-center my-5 ">
          <div className="row ">
            <h2 className="TITLE">who we are ?</h2>
          </div>
          <div className="row p-5 rowBlur">
            <ul className="whoWeAreList">
              <li className="weList d-flex gap-4 align-items-start">
                <FontAwesomeIcon icon={faCircle} className="circle" />
                <p className="aboutDescription">
                  Null Tech is a North Macedonia - based company with a strong
                  regional presence. It vas founded by a highly experienced team
                  with over two decades of expertise in design, development,
                  integration, data, and cloud solutions, and is dedicated to
                  delivering comprehensive ent-to-ned services.
                </p>
              </li>
              <li className="weList d-flex gap-4">
                <FontAwesomeIcon icon={faCircle} className="circle" />
                <p className="aboutDescription">
                  full capabilities in design, development, integration,
                  testing,data,and cloud solutions.
                </p>
              </li>
              <li className="weList d-flex gap-4">
                <FontAwesomeIcon icon={faCircle} className="circle" />
                <p className="aboutDescription">
                  Null tech has the ability ti operate both as a dedicated
                  partner-provider of full-stack solutions and as a contractor
                  focused on specific functions within large-scale projects for
                  major corporations.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Check />
      </div>
    </div>
  );
};
