import React, {useState} from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard";
import "./App.css";

function App() {
  console.log("top")
  const [data, setData] = useState({}); // Use empty object brackets to keep data type consistent
  {/*If we don't use empty object in useState, it will set data to "undefined" */}
  
  axios.get("https://api.nasa.gov/planetary/apod?api_key=y8Ih2vW2O2XdWTf3knaCA1DOoETsWABCqkpSc9Kq&date=2019-07-28")
    .then(
      response => {
        console.log(response.data);
        setData(response.data); // Data object give us access to title, url, explanation & put in <PhotoCard />
      }
    );
    console.log("bottom");
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      <PhotoCard title={data.title} url={data.url} explanation={data.explanation} />
    </div>
  );
}

export default App;

{/* My personal NASA API Key:
 https://api.nasa.gov/planetary/apod?api_key=y8Ih2vW2O2XdWTf3knaCA1DOoETsWABCqkpSc9Kq */}