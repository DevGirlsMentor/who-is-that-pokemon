import "./style.scss";

import IconRight from "../../assets/images/icon-right.svg";
import IconWrong from "../../assets/images/icon-wrong.svg";
import IconPokebola from "../../assets/images/icon-pokebola.png";

const letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];

const lettersSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

const lettersThirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

export function Keyboard() {
  return (
    <div className="keyboard-container">
      <div className="keyboard-button">
        {letters && letters.map((item) => <button key={item}>{item}</button>)}
      </div>
      <div className="keyboard-button">
        {lettersSecondRow &&
          lettersSecondRow.map((item) => <button key={item}>{item}</button>)}
      </div>
      <div className="keyboard-button">
        {lettersThirdRow &&
          lettersThirdRow.map((item) => <button key={item}>{item}</button>)}
        <button className="button-chances">
          <img src={IconPokebola} alt="Chances" />
          <div className="chances">
            <p>0</p>
          </div>
        </button>
      </div>
    </div>
  );
}
