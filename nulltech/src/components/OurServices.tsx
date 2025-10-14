import { StackContainer } from "./StackContainer";

export const OurServices = () => {
  return (
    <div className="OurServices">
      <div className="container">
        <div className="ourServiceContent">
          {/* Central background circle */}
          <div className="centerCircle">
            <StackContainer name="OUR SERVICES" />
          </div>

          {/* Orbiting service items */}
          <h4 className="service cloud serviceTitle">
            CLOUD SERVICES <br /> (MIGRATION & MANAGEMENT)
          </h4>
          <h4 className="service uiux serviceTitle">UI/UX DESIGN SERVICES</h4>
          <h4 className="service integration serviceTitle">
            INTEGRATION DEVELOPMENT
          </h4>
          <h4 className="service mobile serviceTitle">
            MOBILE APP DEVELOPMENT
          </h4>
          <h4 className="service digital serviceTitle">
            DIGITAL TRANSFORMATION
          </h4>

          <h4 className="service data serviceTitle">
            DATA ENGINEERING & BI
            <span className="desc">
              Data warehouse setup (Snowflake, BigQuery), ETL pipelines,
              <br />
              BI dashboards (Power BI, Tableau)
            </span>
          </h4>

          <h4 className="service devops serviceTitle">
            DEVOPS & AUTOMATION
            <span className="desc">
              CI/CD pipeline, infrastructure automation (Terraform, Ansible),
              <br />
              Monitoring and alerting (Prometheus, Grafana)
            </span>
          </h4>

          <h4 className="service ai serviceTitle">
            AI & DATA SCIENCE SOLUTIONS
            <span className="desc">
              Chatbots, predictive analytics,
              <br />
              AI-driven automation
            </span>
          </h4>

          <h4 className="service cyber serviceTitle">CYBERSECURITY SERVICES</h4>
          <h4 className="service managed serviceTitle">
            MANAGED IT SERVICES (MSP)
            <span className="desc">
              24/7 support, monitoring, patch management
            </span>
          </h4>
        </div>

        <div className="mobileOurServiceContent ">
          <StackContainer name="OUR SERVICES" />

          <ul className="servicesList">
            <li className="serviceListItem">
              <h4 className=" serviceTitle my-5">
                CLOUD SERVICES <br /> (MIGRATION & MANAGEMENT)
              </h4>
            </li>
            <li className="serviceListItem">
              <h4 className="serviceTitle">UI/UX DESIGN SERVICES</h4>
            </li>
            <li className="serviceListItem">
              <h4 className="serviceTitle">INTEGRATION DEVELOPMENT</h4>{" "}
            </li>
            <li className="serviceListItem">
              <h4 className="serviceTitle">MOBILE APP DEVELOPMENT </h4>{" "}
            </li>
            <li className="serviceListItem">
              <h4 className="serviceTitle">DIGITAL TRANSFORMATION</h4>
            </li>
            <li className="serviceListItem">
              <h4 className="serviceTitle">
                DATA ENGINEERING & BI
                <span className="desc">
                  Data warehouse setup (Snowflake, BigQuery), ETL pipelines,
                  <br />
                  BI dashboards (Power BI, Tableau)
                </span>
              </h4>
            </li>
            <li className="serviceListItem">
              <h4 className="serviceTitle">
                DEVOPS & AUTOMATION
                <span className="desc">
                  CI/CD pipeline, infrastructure automation (Terraform,
                  Ansible),
                  <br />
                  Monitoring and alerting (Prometheus, Grafana)
                </span>
              </h4>
            </li>

            <li className="serviceListItem">
              <h4 className="serviceTitle">
                AI & DATA SCIENCE SOLUTIONS
                <span className="desc">
                  Chatbots, predictive analytics,
                  <br />
                  AI-driven automation
                </span>
              </h4>
            </li>
            <li className="serviceListItem">
              <h4 className="serviceTitle">
                MANAGED IT SERVICES (MSP)
                <span className="desc">
                  24/7 support, monitoring, patch management
                </span>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
