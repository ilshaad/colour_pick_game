import { Text } from "pixi.js";

import { gameLogic } from "../index";

export default function TimeField() {
  const timeField = new Text(gameLogic.timer);

  timeField.x = 100;
  timeField.y = 20;

  // timeField.text = number;
  return timeField;
}
