import { Check } from "./Check";
import { StackContainer } from "./StackContainer";

export const OurStacks = () => {
  return (
    <div className="OurStacks">
      <div className="container">
        <Check />

        <div className="ourStackContent py-5">
          <div className="row text-center justify-content-center mb-4">
            <h2 className="TITLE">our tech stack</h2>
          </div>

          <div className="row align-items-start g-4">
            {/* Left column */}
            <div className="col-12 col-md-4 d-flex">
              <StackContainer name="Programming languages" />
              <ul className="ourStackList">
                <li className="ourStackItem">.NET</li>
                <li className="ourStackItem">Python</li>
                <li className="ourStackItem">PHP</li>
                <li className="ourStackItem">JavaScript</li>
                <li className="ourStackItem">TypeScript</li>
                <li className="ourStackItem">Java</li>
                <li className="ourStackItem">Go (Golang)</li>
                <li className="ourStackItem">Kotlin</li>
                <li className="ourStackItem">SQL</li>
                <li className="ourStackItem">Flutter</li>
              </ul>
            </div>

            {/* Middle column */}
            <div className="col-12 col-md-4 d-flex justify-content-center ">
              <div className="ourLogoWrapper">
                <div className="ourLogo">
                  <img src="/images/LOGO/nullTech.png" alt="NullTech Logo" />
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-12 col-md-4 d-flex">
              <StackContainer name="Tools" />
              <ul className="ourStackList">
                <li className="ourStackItem">Docker</li>
                <li className="ourStackItem">Kubernetes</li>
                <li className="ourStackItem">VS Code</li>
                <li className="ourStackItem">Jira</li>
                <li className="ourStackItem">Postman</li>
                <li className="ourStackItem">Figma</li>
                <li className="ourStackItem">CI/CD Tools</li>
                <li className="ourStackItem">Terraform</li>
                <li className="ourStackItem">Firebase</li>
                <li className="ourStackItem">Jenkins</li>
                <li className="ourStackItem">Git</li>
              </ul>
            </div>
          </div>
        </div>

        <Check />
      </div>
    </div>
  );
};
