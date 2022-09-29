import React, { useState } from "react";
import colorData from "./color-data.json"
import ColorList from "./Components/ColorList"

function App() {
  const [colors] = useState(colorData);
  return (
    <div className="App">
      <ColorList colors={colors} />
    </div>
  );
}

export default App;
