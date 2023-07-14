import ImageGenerator from "./ImageGenerator";
import TextGenerator from "./TextGenerator";

const MemeGenerator = ({ memes }) => {
  return (
    <>
      <ImageGenerator memes={memes} />
    </>
  );
};

export default MemeGenerator;
