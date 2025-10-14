import { Check } from "./Check";
import { StackContainer } from "./StackContainer";

export const OurStack2 = () => {
  return (
    <div className="OurStack2 py-5">
      <div className="container">
        <Check />
        <div className="ourStack2Content">
          <div className="row text-center justify-content-center ">
            <h2 className="TITLE">our tech stack</h2>
          </div>

          <div className="row">
            <div className="col-12 col-md-4">
              <StackContainer name="Integration platforms" />

              <ul className="ourStackList">
                <li className="ourStackItem">TIBCO</li>
                <li className="ourStackItem">MuleSoft</li>
                <li className="ourStackItem">SnapLogic</li>
              </ul>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center py-5 ">
              <div className="ourLogoWrapper">
                <div className="ourLogo">
                  <img src="/images/LOGO/nullTech.png" alt="NullTech Logo" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <StackContainer name="cloud platforms" />

              <ul className="ourStackList">
                <li className="ourStackItem">AWS</li>
                <li className="ourStackItem">Azure</li>
                <li className="ourStackItem">Google Cloud</li>
              </ul>
            </div>
          </div>

          <div className="row justify-content-center py-2">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <StackContainer name="AI / Data Science Tools" />
            </div>
          </div>
          <div className="row py-5">
            <ul className="ourAiDataScienceList">
              <li className="dataItem">TensorFlow /PyTorch</li>
              <li className="dataItem">Sckit-learn / XGBoost</li>
              <li className="dataItem">Pandas / NumPy</li>
              <li className="dataItem">Apache Spark Hugging</li>
              <li className="dataItem">Face Transformers</li>
              <li className="dataItem">LangChain</li>
              <li className="dataItem">SQL / Snowflake / BigQuery </li>
            </ul>
          </div>
        </div>
        <Check />
      </div>
    </div>
  );
};
