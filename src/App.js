import "./styles.css";
import React from "react";
import Clock from "./Clock.js";
import RandomRoll from "./components/RandRoll.js";
import RecipeSearch from "./components/RecipeSearch.js";
import TimesClicked from "./components/TimesClicked.js";
import Example from "./Example.js";
import AnimLab from "./AnimationLab/AnimLab.js";
import DialogueDetective from "./DialogueDetective/DialogueDetect.js";
import Map from "./Map/Map.js";
import Inventory from "./Cart/Inventory.js";
import Crystals from "./CrystalDex/Crystals.js";
import MusicPlayer from "./MPlayer/MusicPlayer.js";
import FakeKanban from "./componentsDS/FakeKanban.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default class App extends React.Component {
  //create an array of components
  state = {
    pages: [
      <Clock />,
      <RandomRoll />,
      <RecipeSearch />,
      <TimesClicked />,
      <Example />,
      <AnimLab />,
      <DialogueDetective />,
      <Map />,
      <Inventory />,
      <DndProvider backend={HTML5Backend}>
        <FakeKanban />
      </DndProvider>,
      <MusicPlayer />
    ],
    curPage: " "
  };
  render() {
    return (
      <div className="App">
        <h1>Stephanie Ranegar</h1>
        <h3>GETTING FAMILIAR WITH ⚛️ REACT</h3>
        <p>A series of short hands-on React practices</p>
        <div>
          <button
            onClick={() => {
              this.swapProject(0);
            }}
          >
            Clock
          </button>
          <button
            onClick={() => {
              this.swapProject(1);
            }}
          >
            Random Roll
          </button>
          <button
            onClick={() => {
              this.swapProject(2);
            }}
          >
            Recipe Search
          </button>
          <button
            onClick={() => {
              this.swapProject(3);
            }}
          >
            Times Clicked
          </button>
          <button
            onClick={() => {
              this.swapProject(4);
            }}
          >
            Animate Lecture
          </button>
          <button
            onClick={() => {
              this.swapProject(5);
            }}
          >
            AnimLab
          </button>
          <button
            onClick={() => {
              this.swapProject(7);
            }}
          >
            Map
          </button>
          <button
            onClick={() => {
              this.swapProject(8);
            }}
          >
            Bag Lag
          </button>
          <button
            onClick={() => {
              this.swapProject(9);
            }}
          >
            Item List
          </button>
          <button
            onClick={() => {
              this.swapProject(10);
            }}
          >
            Music Player
          </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }
}

// export default function App() {

//   let tired = 7;

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <p>I am {tired} level tired</p>
//     </div>
//   );
// }
