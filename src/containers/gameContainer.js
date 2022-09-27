import { Container } from "pixi.js";
import ColouredCircle from "../components/ColouredCircle";
import ScoreField from "../components/ScoreField";

import TimeField from "../components/TimeField";

export default function gameContainer() {
  let gameContainer;

  gameContainer = new Container();

  gameContainer.visible = true;

  // time remaining content
  gameContainer.addChild(TimeField());

  // score point
  gameContainer.addChild(ScoreField());

  // coloured circle
  gameContainer.addChild(ColouredCircle());

  // ColouredCircle().tint = 0x000000;

  // console.log(ColouredCircle());

  return gameContainer;
}
