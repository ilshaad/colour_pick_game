import { Application } from "pixi.js";

import gameContainer from "./containers/gameContainer.js";
import resultContainer from "./containers/resultContainer.js";

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0xe0e0eb,
});
console.log("🚀 ~ file: index.js ~ line 14 ~ app", app);

const iKbody = document.getElementsByTagName("body")[0];

iKbody.appendChild(app.view);

app.stage.addChild(gameContainer());
app.stage.addChild(resultContainer());
