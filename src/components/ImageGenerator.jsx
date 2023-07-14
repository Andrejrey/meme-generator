const ImageGenerator = ({ memes }) => {
  console.log(memes.data.memes[0].url);
  return (
    <div className="image-genetaror-container">
      <img src={memes.data.memes[3].url} alt="" />
    </div>
  );
};

export default ImageGenerator;
