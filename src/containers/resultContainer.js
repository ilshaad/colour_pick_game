import { Container, Text } from "pixi.js";

export default function resultContainer() {
  let resultContainer;

  resultContainer = new Container();

  resultContainer.visible = false;

  // todo placeholder, remove later on
  const resultText = new Text("result text");
  resultContainer.addChild(resultText);

  return resultContainer;
}
