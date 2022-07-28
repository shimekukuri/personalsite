import React from "react";
import Container from "./component/Container";
import "./App.css"

function App() {
  return (
    <>
      <Container classes="first-container">
        <h1 style={{margin: "0px"}}>test</h1>
      </Container>
      <Container>
        <h2>test 2</h2>
      </Container>
      <Container><h2>test 3</h2></Container>
    </>
  );
}

export default App;
