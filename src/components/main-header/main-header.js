import "./main-header.css";
import imgBart2 from "../../assets/images/dd-bart2.png";

function MainHeader() {
  return (
    <div className="mainheader--wrapper">
      <h2>L'INDAGATORE DELL'INCUBO</h2>
      <img src={imgBart2} alt="Dylan Dog standing" />
    </div>
  );
}

export default MainHeader;
