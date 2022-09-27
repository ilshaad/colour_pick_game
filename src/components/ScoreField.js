import { Text } from "pixi.js";

export default function ScoreField() {
  const scoreField = new Text(1);

  scoreField.x = 100;
  scoreField.y = 60;

  return scoreField;
}
