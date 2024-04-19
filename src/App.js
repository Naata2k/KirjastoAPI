import './App.css';
import React, { useState } from 'react';
import KirjastoKortti from './components/KirjastoKortti'

function App() {
  const [hakuTermi, setHakuTermi] = useState('');
  const [kirjastot, setKirjastot] = useState([]);
  
  const kasitteleHaku = async () => {

    //asetetaan kirjastolle ja nimelle erilliset muuttujat, koska voimme hakea kahdella eritavalla kirjastoja
    const kaupunkiHakuURL = `https://api.kirjastot.fi/v4/library?city.name=${hakuTermi}`;
    const nimiHakuURL = `https://api.kirjastot.fi/v4/library?name=${hakuTermi}`;
    
    //Fetchataan kirjasto ja nimihaulla, ja muutetaan vastaus jsoniksi
    const kaupunkiHakuVastaus = await fetch(kaupunkiHakuURL);
    const nimiHakuVastaus = await fetch(nimiHakuURL);
    
    const kaupunkiData = await kaupunkiHakuVastaus.json();
    const nimiData = await nimiHakuVastaus.json();

    //jos kaupunki haulla löytyy kirjastoja laitetaan ne kirjastot listaan
    if (kaupunkiData.items && kaupunkiData.items.length > 0) {
      setKirjastot(kaupunkiData.items);
    //jos nimi haulla löytyy kirjastoja laitetaan se kirajstot listaan
    } else if (nimiData.items && nimiData.items.length > 0) {
      setKirjastot(nimiData.items);
    } else {
      console.log("Kirjastoja ei löytynyt");
    }
  }
 
//map funktio kirjastot listasta, jokaisen kirjaston kohalla luodaan KirjastoKortti joilla on propseina itse kirjasto ja sen id
  return (
    <div className="App">
       <div className="haku-container">

          <h1>Kirjasto hakukone</h1>
          <input
            type="text"
            className="haku-input"
            placeholder="Etsi kirjaston tai kaupungin nimellä"
            value={hakuTermi}
            onChange={(e) => setHakuTermi(e.target.value)}
          />
          <button className="haku-nappi" onClick={kasitteleHaku}>Hae</button>
          
          {kirjastot.map((kirjasto) => (
            <KirjastoKortti key={kirjasto.id} kirjasto={kirjasto} />
          ))}

        </div>
    </div>
  );
}

export default App;
