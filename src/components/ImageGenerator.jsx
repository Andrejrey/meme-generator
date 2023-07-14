import { useState } from "react";
import TextGenerator from "./TextGenerator";

const ImageGenerator = ({ memes }) => {
  const [index, setIndex] = useState(1);
  const [textOne, setTextOne] = useState("Sein oder Nichtsein");
  const [textTwo, setTextTwo] = useState("das ist hier die frage");

  function back() {
    setIndex(index - 1);
  }

  function next() {
    setIndex(index + 1);
  }

  function onChangeTextOne(event) {
    setTextOne(event.target.value);
  }

  function onChangeTextTwo(event) {
    setTextTwo(event.target.value);
  }

  return (
    <>
      <div className="image-genetaror-container">
        {memes && (
          <div className="image-container" key={index}>
            <img src={memes[index].url} alt="" />
            <p className="upper-p">{textOne}</p>
            <p className="lower-p">{textTwo}</p>
            <div className="">
              <button disabled={index < 1} onClick={back}>
                Back
              </button>
              <button
                disabled={index > memes.length - 1}
                id="next-button"
                onClick={next}
              >
                Next
              </button>
            </div>
          </div>
        )}
        <form className="text-inputs">
          <input
            onChange={onChangeTextOne}
            type="text"
            placeholder="write your first text"
          />
          <input
            onChange={onChangeTextTwo}
            type="text"
            placeholder="write your second text"
          />
        </form>
      </div>
    </>
  );
};

export default ImageGenerator;
