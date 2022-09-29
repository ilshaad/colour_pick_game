import { Container } from "pixi.js";
// import { gameLogic } from "../index";

// import BlueButton from "../components/BlueButton";
// import ColouredCircle from "../components/ColouredCircle";
// import GreenButton from "../components/GreenButton";
// import OrangeButton from "../components/OrangeButton";
// import RedButton from "../components/RedButton";
// import ScoreField from "../components/ScoreField";

// import TimeField from "../components/TimeField";
// import YellowButton from "../components/YellowButton";

export default function gameContainer() {
  let gameContainer;

  gameContainer = new Container();

  // gameContainer.visible = true;

  // // time remaining content
  // gameContainer.addChild(TimeField());

  // // score point
  // gameContainer.addChild(ScoreField());

  // // coloured circle
  // gameContainer.addChild(ColouredCircle());

  // // ColouredCircle().tint = 0x000000;

  // // coloured buttons
  // gameContainer.addChild(RedButton());
  // gameContainer.addChild(BlueButton());
  // gameContainer.addChild(GreenButton());
  // gameContainer.addChild(YellowButton());
  // gameContainer.addChild(OrangeButton());

  // // gameContainer.ticker.add(function () {
  // //   gameLogic.timeRemaining += 1;
  // // });
  // // TimeField(gameLogic.timeRemaining);

  return gameContainer;
}
