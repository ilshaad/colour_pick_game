import { Graphics } from "pixi.js";
import { gameLogic } from "../index";

export default function GreenButton() {
  const GreenButton = new Graphics();

  GreenButton.beginFill(gameLogic.green, 1);
  GreenButton.drawCircle(200, 300, 20);
  GreenButton.endFill();

  // make button interactive
  GreenButton.interactive = true;
  GreenButton.buttonMode = true;

  return GreenButton;
}
