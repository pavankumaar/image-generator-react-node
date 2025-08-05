import React, { useState } from "react";
import "./App.css";
import InputPrompt from "./components/InputPrompt/InputPrompt";
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageurl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPrompt(value);
  };

  const fetchImage = async() => {
    try {
      setIsLoading(true);
      //server is hosted there
      const res = await fetch('https://image-generator-react-node-1.onrender.com/api/generateImage');
      const blob = await res.blob();
      const imageObjectURL = URL.createObjectURL(blob);
      setImageUrl(imageObjectURL);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Header />
      <MainContent imageUrl={imageurl} isLoading={isLoading}/>
      <InputPrompt prompt={prompt} setPrompt={setPrompt} handleInputChange={handleInputChange} fetchImage={fetchImage} isLoading={isLoading}/>
    </div>
  );
}

export default App;
