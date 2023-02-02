import React from "react";
import { Header } from "./components/Header";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Education/>
        <Experience/>
      </>
    );
  }
}

export default App;
