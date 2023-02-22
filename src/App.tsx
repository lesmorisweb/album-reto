import { useState } from "react";

import "./App.css";
import { InfoContainer } from "./components/InfoContainer/InfoContainer";
import { PicturesContainer } from "./components/PictureContainer/PictureCard";

function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        <div className="card">
          <PicturesContainer
            img="https://i.scdn.co/image/ab67616d0000b273bdda8178e59b8fba40b82deb"
            artist="Ciro y los Persas"
          />
          <InfoContainer
            artist="Ciro y los Persas"
            date={2016}
            genero="Rock Argentino"
            style="dance"
            title="Naranja Persa"
          />
        </div>
        <div className="card">
          <PicturesContainer
            img="https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/52/0e/ad/520ead05-9f6e-3c63-cc1d-4fd1b7d28175/00602567944577.rgb.jpg/1200x1200bf-60.jpg"
            artist="Bersuir Vergarabat"
          />
          <InfoContainer
            artist="Bersuir Vergarabat"
            date={1998}
            genero="Rock Argentino"
            style="Listen"
            title="Libertinaje"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
