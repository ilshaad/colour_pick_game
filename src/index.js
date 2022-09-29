import { Application, Text } from "pixi.js";
// import TimeField from "./components/TimeField.js";
import pxObjectClass from "./scripts/pxObjectsClass";
// import gameContainer from "./containers/gameContainer.js";
// import resultContainer from "./containers/resultContainer.js";
import gameLogicClass from "./scripts/gameLogicClass.js";

// inialize pixi
const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0xe0e0eb,
});
const iKbody = document.getElementsByTagName("body")[0];

// append pixi application to body
iKbody.appendChild(app.view);

// logic data of the game
export const gameLogic = new gameLogicClass();
// pixi components
export const pxObj = new pxObjectClass();

// game container page
app.stage.addChild(pxObj.gameContainer);

// result container page
app.stage.addChild(pxObj.resultContainer);
// app.stage.addChild(resultContainer());

pxObj.gameContainer.visible = true;
pxObj.resultContainer.visible = false;

// time remaining content
pxObj.gameContainer.addChild(pxObj.timeField);

// score point
pxObj.gameContainer.addChild(pxObj.scoreField);

// coloured circle
pxObj.gameContainer.addChild(pxObj.colouredCircle);

// ColouredCircle().tint = 0x000000;

// coloured buttons
pxObj.gameContainer.addChild(pxObj.redButton);
pxObj.gameContainer.addChild(pxObj.blueButton);
pxObj.gameContainer.addChild(pxObj.greenButton);
pxObj.gameContainer.addChild(pxObj.yellowButton);
pxObj.gameContainer.addChild(pxObj.orangeButton);

// click event handler
pxObj.redButton.on("pointerdown", buttonHandler);
pxObj.blueButton.on("pointerdown", buttonHandler);
pxObj.greenButton.on("pointerdown", buttonHandler);
pxObj.yellowButton.on("pointerdown", buttonHandler);
pxObj.orangeButton.on("pointerdown", buttonHandler);

function buttonHandler() {
  // begin 20 second countdown
  gameLogic.beginGameCountdown();
  console.log("iK pointer down button");

  // user pick colour
  gameLogic.userPickColour(gameLogic.red);

  // 2 second game round for each colour
  gameLogic.twoSecondRandomColourCircle();
}

// gameContainer.ticker.add(function () {
//   gameLogic.timeRemaining += 1;
// });
// TimeField(gameLogic.timeRemaining);

// result score
export function resultScore() {
  const resultText = new Text(gameLogic.score);
  resultText.x = 100;
  resultText.y = 100;
  pxObj.resultContainer.addChild(resultText);
}

// result replay button
const replayButton = new Text("replay again!");
replayButton.x = 100;
replayButton.y = 200;
replayButton.interactive = true;
replayButton.buttonMode = true;
pxObj.resultContainer.addChild(replayButton);

replayButton.on("pointerdown", playAgain);

function playAgain() {
  gameLogic.resetGameLogic();

  pxObj.gameContainer.visible = true;
  pxObj.resultContainer.visible = false;
}
