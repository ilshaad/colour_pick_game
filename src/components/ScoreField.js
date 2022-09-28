import { Text } from "pixi.js";

import { gameLogic } from "../index";

export default function ScoreField() {
  const scoreField = new Text(gameLogic.score);

  scoreField.x = 100;
  scoreField.y = 60;

  // scoreField.text = gameLogic.score;

  return scoreField;
}
