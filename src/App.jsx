import { useEffect, useState } from "react";
import axios from "axios";
import ImageGenerator from "./components/ImageGenerator";
import NavBar from "./components/NavBar";

function App() {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then(({ data }) => {
      setMemes(data.data.memes);
    });
  }, []);

  return (
    <>
      <NavBar />
      <ImageGenerator memes={memes} />
    </>
  );
}

export default App;
