import { Graphics } from "pixi.js";

export default function ColouredCircle() {
  const colouredCircle = new Graphics();

  // graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
  colouredCircle.beginFill(0xde3249, 1);
  colouredCircle.drawCircle(100, 200, 50);
  colouredCircle.endFill();

  // ! use to change colour
  // colouredCircle.tint = 0x000000;

  return colouredCircle;
}
