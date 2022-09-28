import { pxObj } from "../index";
import { gameLogic } from "../index";

export default class gameLogicClass {
  constructor() {
    this.red = 0xff0000;
    this.blue = 0x0000ff;
    this.green = 0x008000;
    this.yellow = 0xffff00;
    this.orange = 0xffa500;

    this.score = 0;
    this.timer = 20;
    this.twoSecondTimer = 2;
    this.userColourPick = null;
    this.computeRandomColour = null;
  }

  // user clicks first colour & starts game
  beginGameCountdown() {
    // start 20 second timer
    if (gameLogic.timer === 20) {
      const twentySeconds = setInterval(function () {
        pxObj.timeField.text = gameLogic.timer - 1;
        console.log(gameLogic.timer - 1);
        gameLogic.timer = gameLogic.timer - 1;

        // end timer when it reaches 0
        if (gameLogic.timer === 0) {
          clearInterval(twentySeconds);
        }
      }, 1000);
    }
  }

  // user clicks a colour button
  userPickColour(colour) {
    // console.log(colour);
    gameLogic.userColourPick = colour;
    console.log(gameLogic.userColourPick);
  }

  // large circle random cycle pick colour
  twoSecondRandomColourCircle() {
    // start 2 second timer
    if (gameLogic.twoSecondTimer === 2) {
      const twoSecondCycle = setInterval(() => {
        console.log(gameLogic.twoSecondTimer);
        gameLogic.twoSecondTimer = gameLogic.twoSecondTimer - 1;

        // pxObj.colouredCircle.tint = gameLogic.blue;

        // end timer when it reaches 0
        if (gameLogic.twoSecondTimer === 0) {
          clearInterval(twoSecondCycle);
        }
      }, 1000);
    }
  }
}
