import { Header } from "./components/header/header.js";
import { Main } from "./components/main/main.js";
import { SetUpPlaybackControls } from "./playback-controls/playback-controls.js";

const body = document.querySelector("body");

const main = Main();

body.replaceChildren(Header(), main);

SetUpPlaybackControls(main);
