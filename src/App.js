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

      {data && <PhotoCard title={data.title} url={data.url} explanation={data.explanation} date={data.date} />}
      {/* The logical && will return the right-most value in JS if they're both true. Here it 
        checks to see if data exists first. If data is null, false, undefined, or 0, && will
        say that it's false and it doesn't need to check the right side. It already knows that
        if one of the 2 things is false, then the whole thing counts as false. Therefore, we 
        never run the right half of our code.  */}
        
      {/* {data 
            ? <PhotoCard title={data.title} url={data.url} explanation={data.explanation} />}
            : <div>Loading...</div>
            } 
            
          // This is another way
          
          The ternary operator is like our "if statement". If the thing before the "?" is true, 
          then we do the thing in the 2nd part of the statement. You'll also need to include the 
          colon and then after that will contain the "else" branch. If I don't have an else branch
          then I can replace the ternary ("?") with &&. Something else we might want to do is
          have the else branch be something like a div that says loading. So when the api is pulling
          the information from NASA, it will momentarily show "Loading..." on the screen before
          rendering the NASA data information. This is how you can get the spinners on a page while
          you wait for the page to load (as long as you add them in.)
          */}
    </div>
  );
}

export default App;

{/* My personal NASA API Key:
 https://api.nasa.gov/planetary/apod?api_key=y8Ih2vW2O2XdWTf3knaCA1DOoETsWABCqkpSc9Kq */}