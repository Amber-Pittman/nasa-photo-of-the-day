import React, {useState} from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard";
import "./App.css";

function App() {
  console.log("top")
  const [title, setTitle] = useState(""); // Use empty string to avoid errors
  
  axios.get("https://api.nasa.gov/planetary/apod?api_key=y8Ih2vW2O2XdWTf3knaCA1DOoETsWABCqkpSc9Kq&date=2019-07-28")
    .then(
      response => {
        console.log(response.data);
        setTitle(response.data.title); //Sets title to be that string
      }
    );
    console.log("bottom");
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      <PhotoCard title={title} url={"https://api.nasa.gov/planetary/apod?api_key=y8Ih2vW2O2XdWTf3knaCA1DOoETsWABCqkpSc9Kq&date=2019-07-28"} explanation={"some explanation"} />
    </div>
  );
}

export default App;

{/* My personal NASA API Key: https://api.nasa.gov/planetary/apod?api_key=y8Ih2vW2O2XdWTf3knaCA1DOoETsWABCqkpSc9Kq */}