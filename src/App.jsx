import { useEffect, useState } from "react";
import axios from "axios";
import ImageGenerator from "./components/ImageGenerator";
import NavBar from "./components/NavBar";

function App() {
  const [memes, setMemes] = useState(null);
  console.log(memes);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      setMemes(response.data);
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
