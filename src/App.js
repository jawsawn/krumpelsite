import React from "react";
import bjork from "./bjork.png";
import katecookie from "./katecookie.png";
import snote from "./snote.png";

function App(){


  return (
    <div>
      <h1>Welcome to krumpel</h1>
      <img src={katecookie} />
      <img src={bjork} />
      <img src={snote} />
    </div>
  );
}

export default App;