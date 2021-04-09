import "./main-header.css";
import imgLogoDD from "../../assets/images/dd-logo.png";
import imgBart2 from "../../assets/images/dd-bart2.png";

function MainHeader() {
  return (
    <div className="mainheader--wrapper">
      <div>
        <h2>
          <img src={imgLogoDD} alt="Dylan Dog Home Logo" />
        </h2>
        <h3>L'INDAGATORE DELL'INCUBO</h3>
        </div>
      <img src={imgBart2} alt="Dylan Dog standing" />
    </div>
  );
}

export default MainHeader;
