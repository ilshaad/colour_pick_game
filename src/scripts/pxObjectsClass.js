import gameContainer from "../containers/gameContainer";
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
}
