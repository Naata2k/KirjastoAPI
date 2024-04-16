import './App.css';
import React, { useState } from 'react';
import KirjastoKortti from './components/KirjastoKortti'

function App() {
  const [hakuTermi, sethakuTermi] = useState('');
  const [kirjastot, setKirjastot] = useState([]);
  
  const kasitteleHaku = async () => {

    //asetetaan kirjastolle ja nimelle erilliset muuttujat, koska voimme hakea kahdella eritavalla kirjastoja
    const kaupunkiHakuURL = `https://api.kirjastot.fi/v4/library?city.name=${hakuTermi}`;
    const nimiHakuURL = `https://api.kirjastot.fi/v4/library?name=${hakuTermi}`;
    
    //Fetchataan kirjasto ja nimihaulla, ja muutetaan vastaus jsoniksi
    const kaupunkiHakuVastaus = await fetch(kaupunkiHakuURL);
    const nimiHakuVastaus = await fetch(nimiHakuURL);
    
    const KaupunkiData = await kaupunkiHakuVastaus.json();
    const NimiData = await nimiHakuVastaus.json();

    console.log(KaupunkiData)   

    if(data.type === "")

  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      kasitteleHaku();
    }
  };

  return (
    <div className="App">

       <div className="haku-container">
          <input
            type="text"
            className="haku-input"
            placeholder="Etsi kirjaston tai kaupungin nimellä"
            value={hakuTermi}
            onChange={(e) => sethakuTermi(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="haku-nappi" onClick={kasitteleHaku}>Hae</button>
          {kirjastot.map((kirjasto) => (
            <KirjastoKortti kirjasto={kirjasto} />
          ))}

        </div>



    </div>
  );
}

export default App;
