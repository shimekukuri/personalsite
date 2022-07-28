import React from "react";
import Container from "./component/Container";
import "./App.css";

function App() {
  return (
    <>
      <div className="snap">
        <Container classes="first-container">
          <h1 style={{marginLeft: "8px"}}>test</h1>
        </Container>
        <Container>
          <h2 style={{marginLeft: "8px"}}>test 2</h2>
        </Container>
        <Container>
          <h2 style={{marginLeft: "8px"}}>test 3</h2>
        </Container>
      </div>
    </>
  );
}

export default App;
