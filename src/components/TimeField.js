import { Text } from "pixi.js";

export default function TimeField() {
  const timeField = new Text(20);

  timeField.x = 100;
  timeField.y = 20;

  return timeField;
}
