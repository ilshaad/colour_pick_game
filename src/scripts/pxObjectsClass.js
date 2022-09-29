import gameContainer from "../containers/gameContainer";
import resultContainer from "../containers/resultContainer";
import TimeField from "../components/TimeField";
import ScoreField from "../components/ScoreField";
import ColouredCircle from "../components/ColouredCircle";
import RedButton from "../components/RedButton";
import BlueButton from "../components/BlueButton";
import GreenButton from "../components/GreenButton";
import YellowButton from "../components/YellowButton";
import OrangeButton from "../components/OrangeButton";

export default class pxObjectClass {
  constructor() {
    // game container
    this.gameContainer = gameContainer();
    // result container
    this.resultContainer = resultContainer();

    // countdown timer
    this.timeField = TimeField();
    // user score
    this.scoreField = ScoreField();
    // random colour circle
    this.colouredCircle = ColouredCircle();

    // click coloured buttons
    this.redButton = RedButton();
    this.blueButton = BlueButton();
    this.greenButton = GreenButton();
    this.yellowButton = YellowButton();
    this.orangeButton = OrangeButton();
  }

  enableAllButtons() {
    this.redButton.interactive = true;
    this.blueButton.interactive = true;
    this.greenButton.interactive = true;
    this.yellowButton.interactive = true;
    this.orangeButton.interactive = true;
    this.redButton.buttonMode = true;
    this.blueButton.buttonMode = true;
    this.greenButton.buttonMode = true;
    this.yellowButton.buttonMode = true;
    this.orangeButton.buttonMode = true;
  }

  disableAllButtons() {
    this.redButton.interactive = false;
    this.blueButton.interactive = false;
    this.greenButton.interactive = false;
    this.yellowButton.interactive = false;
    this.orangeButton.interactive = false;
    this.redButton.buttonMode = false;
    this.blueButton.buttonMode = false;
    this.greenButton.buttonMode = false;
    this.yellowButton.buttonMode = false;
    this.orangeButton.buttonMode = false;
  }
}
