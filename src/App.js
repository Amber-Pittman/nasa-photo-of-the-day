import React, {useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard";
import "./App.css";

function App() {
  const [data, setData] = useState({}); // Use empty object brackets to keep data type consistent
  {/*If we don't use empty object in useState, it will set data to "undefined" */}
  useEffect(() => {
    console.log("first render");
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=y8Ih2vW2O2XdWTf3knaCA1DOoETsWABCqkpSc9Kq&date=2019-07-28")
  //     .then(response => {
  //         console.log(response.data);
  //         setData(response.data); // Data object gives us access to title, url, explanation & put in <PhotoCard />
  //     });
        // return () => {
        //   // do cleanup here
        // }
  // }, []); // Consider this array an array of dependencies

  {/* useEffect takes a callback as it's first function (code we want to 
  delay they execution on) & then takes in its 2nd argument - an array of 
  data. We use useEffect for a set amount of time. We use it conditionally. */}
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      {data && <PhotoCard title={data.title} url={data.url} explanation={data.explanation} />}
      {/* The logical & will return the right-most value in JS if they're both true. Here it 
        checks to see if data exists first. If data is null, false, undefined, or 0, && will
        say that it's false and it doesn't need to check the right side.  */}
      {/* {data 
            ? <PhotoCard title={data.title} url={data.url} explanation={data.explanation} />}
            : <div>Loading...</div>
            } 
            
          // This is another way*/}
    </div>
  );
}

export default App;

{/* My personal NASA API Key:
 https://api.nasa.gov/planetary/apod?api_key=y8Ih2vW2O2XdWTf3knaCA1DOoETsWABCqkpSc9Kq */}