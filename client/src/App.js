import React from "react";
import HomeLayoutHOC from "./HOC/Home.HOC";
import Temp from "./Components/temp";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <h1 className="text-red-700">Hello</h1>
    </>
  );
}

export default App;
