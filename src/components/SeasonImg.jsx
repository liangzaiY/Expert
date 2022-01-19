const SeasonImg = ({ imgList = [] }) => {
  return (
    <div>
      {imgList.map((img) => (
        <img key={img} style={{ width: "100%" }} src={img} />
      ))}
    </div>
  );
};

export default SeasonImg;
