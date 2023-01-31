import React from "react";
import { Header } from "./components/Header";
import { Education } from "./components/Education";

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Education/>
      </>
    );
  }
}

export default App;
