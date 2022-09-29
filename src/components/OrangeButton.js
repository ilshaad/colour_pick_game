import { Graphics } from "pixi.js";
import { gameLogic } from "../index";

export default function OrangeButton() {
  const OrangeButton = new Graphics();

  OrangeButton.beginFill(gameLogic.orange, 1);
  OrangeButton.drawCircle(350, 300, 20);
  OrangeButton.endFill();

  // make button interactive
  OrangeButton.interactive = true;
  OrangeButton.buttonMode = true;

  return OrangeButton;
}
