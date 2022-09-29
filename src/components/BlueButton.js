import { Graphics } from "pixi.js";
import { gameLogic } from "../index";

export default function BlueButton() {
  const blueButton = new Graphics();

  blueButton.beginFill(gameLogic.blue, 1);
  blueButton.drawCircle(125, 300, 20);
  blueButton.endFill();

  // make button interactive
  blueButton.interactive = true;
  blueButton.buttonMode = true;

  return blueButton;
}
