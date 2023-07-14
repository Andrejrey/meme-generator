import { useState } from "react";

const ImageGenerator = ({ memes }) => {
  const [index, setIndex] = useState(1);

  function back() {
    setIndex(index - 1);
  }

  function next() {
    setIndex(index + 1);
  }

  return (
    <div className="image-genetaror-container">
      {memes && (
        <div className="image-container" key={index}>
          <img src={memes[index].url} alt="" />
          <p className="upper-p">Text 1</p>
          <p className="lower-p">Text 2</p>
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
    </div>
  );
};

export default ImageGenerator;
