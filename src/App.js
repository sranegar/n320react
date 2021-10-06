import "./styles.css";
import React from "react";
import Clock from "./Clock.js";
import UserName from "./components/UserName.js";
import RecipeSearch from "./components/RecipeSearch.js";
import Example from "./Example.js";
import AnimLab from "./AnimationLab/AnimLab.js";

export default class App extends React.Component {
  //create an array of components
  state = {
    pages: [
      <Clock />,
      <UserName />,
      <RecipeSearch />,
      <Example />,
      <AnimLab />
    ],
    curPage: 0
  };
  render() {
    return (
      <div className="App">
        <h1>Stephanie Ranegar</h1>
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
            Animate Lecture
          </button>
          <button
            onClick={() => {
              this.swapProject(4);
            }}
          >
            AnimLab
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