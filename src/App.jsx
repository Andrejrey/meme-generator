import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import MemeGenerator from "./components/MemeGenerator";

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
      <MemeGenerator memes={memes} />
    </>
  );
}

export default App;
