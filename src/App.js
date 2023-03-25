import React from "react";

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  };

  const textStyle = {
    fontSize: "24px",
    textAlign: "center",
  };

  return (
    <div className="App" style={appStyle}>
      <p style={textStyle}>
        Ever want to watch a movie or tv show but not know where it's available?{" "}
        <br />
        Google no more!
        <br />
        Just search for what you want to watch and we'll show you where you can
        find it!
      </p>
    </div>
  );
}

export default App;
