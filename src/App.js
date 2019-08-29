import React, {useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard.js";
import "./App.css";

function App() {
  const [data, setData] = useState(null); {/* Use empty object brackets to keep data type consistent. If we 
  don't use empty object in useState, it will set data to "undefined" */}
  useEffect(() => {
    console.log("first render");
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=CR99HLtDSUo23eQAngp64DPBCBTLeDN3NfLhgCNy`)
      .then(response => {
          console.log(response.data);
          setData(response.data); // Data object gives us access to title, url, explanation & put into <PhotoCard />
      });
  }, []); // Consider this array an array of dependencies
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket emoji" alt="rocket emoji">🚀</span>!
      </p>

      {data ? <PhotoCard title={data.title} url={data.url} explanation={data.explanation} date={data.date} />
         : <div>Loading...</div> }
      
    </div>
  );
}

export default App;
