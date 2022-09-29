import { Graphics } from "pixi.js";
import { gameLogic } from "../index";

export default function YellowButton() {
  const YellowButton = new Graphics();

  YellowButton.beginFill(gameLogic.yellow, 1);
  YellowButton.drawCircle(275, 300, 20);
  YellowButton.endFill();

  // make button interactive
  YellowButton.interactive = true;
  YellowButton.buttonMode = true;

  return YellowButton;
}
