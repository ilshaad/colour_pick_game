import { pxObj, resultScore } from "../index";
import { gameLogic } from "../index";

export default class gameLogicClass {
  constructor() {
    this.red = 0xff0000;
    this.blue = 0x0000ff;
    this.green = 0x008000;
    this.yellow = 0xffff00;
    this.orange = 0xffa500;
    this.allColours = [
      this.red,
      this.blue,
      this.green,
      this.yellow,
      this.orange,
    ];

    this.score = 0;
    this.timer = 20;
    this.gameLive = true;
    this.twoSecondTimer = 2;
    this.twoSecondCycle;
    this.userColourPick = null;
    this.computeRandomColour = null;
    this.cycleColours = false;
  }

  // user clicks first colour & starts game
  beginGameCountdown() {
    // start 20 second timer
    if (gameLogic.timer === 20) {
      const twentySeconds = setInterval(function () {
        pxObj.timeField.text = gameLogic.timer - 1;
        console.log(gameLogic.timer - 1);
        gameLogic.timer = gameLogic.timer - 1;

        console.log(gameLogic.gameLive);

        // end timer when it reaches 0
        if (gameLogic.timer === 0) {
          clearInterval(twentySeconds);
          gameLogic.gameLive = false;
        }
      }, 1000);
    }
  }

  // user clicks a colour button
  userPickColour(colour) {
    gameLogic.userColourPick = colour;
    console.log(gameLogic.userColourPick);

    // this.userPickColour(this.blue);
  }

  // large circle random cycle pick colour
  twoSecondRandomColourCircle() {
    // start 2 second timer
    // if (this.twoSecondTimer === 2) {
    this.twoSecondCycle = setInterval(() => {
      if (this.timer >= 0) {
        this.getRandomColour();

        pxObj.colouredCircle.tint = this.computeRandomColour;

        console.log(this.gameLive);

        if (this.computeRandomColour === this.userColourPick) {
          this.score = this.score + 1;
          pxObj.scoreField.text = this.score;
        }
      }

      if (this.gameLive === false) {
        pxObj.disableAllButtons();
        this.goToResultContainer();
        resultScore();
        clearInterval(this.twoSecondCycle);
      }
      // }
    }, 2000);
  }

  getRandomColour() {
    let randomIndex = Math.floor(Math.random() * this.allColours.length);

    let randomColour = this.allColours[randomIndex];

    this.computeRandomColour = randomColour;

    console.log(randomColour);
  }

  goToResultContainer() {
    clearInterval(this.twoSecondCycle);
    pxObj.gameContainer.visible = false;
    pxObj.resultContainer.visible = true;
  }

  resetGameLogic() {
    clearInterval(this.twoSecondCycle);
    this.score = 0;
    this.timer = 20;
    this.gameLive = true;
    this.userColourPick = null;
    this.computeRandomColour = null;
    pxObj.enableAllButtons();
  }
}
