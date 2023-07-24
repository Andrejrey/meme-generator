import { useState, createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

const ImageGenerator = ({ memes }) => {
  console.log(memes && memes[1].box_count);
  const [index, setIndex] = useState(1);
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [textThree, setTextThree] = useState("");
  const memeRef = createRef();

  function back() {
    setIndex(index - 1);
    setTextOne("");
    setTextTwo("");
    setTextThree("");
  }

  function next() {
    setIndex(index + 1);
    setTextOne("");
    setTextTwo("");
    setTextThree("");
  }

  function onChangeTextOne(event) {
    setTextOne(event.target.value);
  }

  function onChangeTextTwo(event) {
    setTextTwo(event.target.value);
  }

  function onChangeTextThree(event) {
    setTextThree(event.target.value);
  }

  return (
    <>
      <div className="image-genetaror-container">
        {memes && (
          <div ref={memeRef} className="image-container" key={index}>
            <img src={memes[index].url} alt="" />
            {memes && memes[index].box_count > 0 && (
              <p className="upper-p">{textOne}</p>
            )}
            {memes && memes[index].box_count > 1 && (
              <p className="middle-p">{textTwo}</p>
            )}
            {memes && memes[index].box_count > 2 && (
              <p className="lower-p">{textThree}</p>
            )}
            <div>
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
              <button
                id="save-button"
                onClick={(e) => exportComponentAsJPEG(memeRef)}
              >
                Save
              </button>
            </div>
          </div>
        )}
        <form className="text-inputs">
          {memes && memes[index].box_count > 0 && (
            <input
              onChange={onChangeTextOne}
              type="text"
              placeholder="write your first text"
            />
          )}
          {memes && memes[index].box_count > 1 && (
            <input
              onChange={onChangeTextTwo}
              type="text"
              placeholder="write your second text"
            />
          )}
          {memes && memes[index].box_count > 2 && (
            <input
              onChange={onChangeTextThree}
              type="text"
              placeholder="write your second text"
            />
          )}
        </form>
      </div>
    </>
  );
};

export default ImageGenerator;
