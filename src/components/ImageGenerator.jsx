import { useState, createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import Draggable from "react-draggable";

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
          <div className="image-container" key={index}>
            <div ref={memeRef}>
              <img src={memes[index].url} alt="" />
              {memes && memes[index].box_count > 0 && (
                <Draggable>
                  <p className="upper-p">{textOne}</p>
                </Draggable>
              )}
              {memes && memes[index].box_count > 1 && (
                <Draggable>
                  <p className="middle-p">{textTwo}</p>
                </Draggable>
              )}
              {memes && memes[index].box_count > 2 && (
                <Draggable>
                  <p className="lower-p">{textThree}</p>
                </Draggable>
              )}
            </div>
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
              placeholder="write your third text"
            />
          )}
        </form>
      </div>
    </>
  );
};

export default ImageGenerator;
