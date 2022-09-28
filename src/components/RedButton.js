import { Graphics } from "pixi.js";

import { gameLogic } from "../index";

export default function RedButton() {
  const redButton = new Graphics();

  redButton.beginFill(gameLogic.red, 1);
  redButton.drawCircle(50, 300, 20);
  redButton.endFill();

  // make button interactive
  redButton.interactive = true;
  redButton.buttonMode = true;

  // // click event handler
  // redButton.on("pointerdown", function () {
  //   // RedButton().scale.x += 0.1;
  //   // RedButton().scale.y += 0.1;
  //   console.log("iK pointer down button");
  // });

  return redButton;
}
