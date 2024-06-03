import {
  cardImage,
  colorlessLine,
  femaleHalfImage,
  longerColorless,
  longerGreenLine,
  longerLine,
  longerYellowLine,
  maleHalfImg,
  markImage,
  shortGreenLine,
  shortLine,
  shortYellowLine,
} from "../../../assets/images";

const TwoCards = () => {
  return (
    <div className="flex gap-6 items-center w-fit ml-auto mt-16 surfaceDuo:mt-0">
      <div className="bg-white py-10 px-8 rounded-2xl -mt-12 w-[250px]">
        <div className="flex items-center gap-4">
          <img src={cardImage} alt="human" />
          <div className="space-y-1 w-full">
            <img src={shortLine} alt="line" className="w-[4/5] h-3" />
            <img src={longerLine} alt="line" className="w-full h-3" />
          </div>
        </div>

        {Array(3)
          .fill(undefined)
          .map((_, i) => (
            <div key={i} className="space-y-1 mt-5">
              <img src={colorlessLine} alt="line" className="w-[4/5] h-3" />
              <img src={longerColorless} alt="line" className="w-full h-3" />
            </div>
          ))}
      </div>

      <div className="space-y-6 relative w-[250px]">
        <div className="bg-white px-8 py-12 rounded-2xl -mt-20">
          <div className="flex gap-4">
            <img src={femaleHalfImage} alt="human" />
            <div className="space-y-1 w-full">
              <img src={shortGreenLine} alt="line" className="w-[4/5] h-3" />
              <img src={longerGreenLine} alt="line" className="w-full h-3" />
            </div>
          </div>

          {Array(3)
            .fill(undefined)
            .map((_, i) => (
              <div key={i} className="space-y-1 mt-5">
                <img src={colorlessLine} alt="line" className="w-[4/5] h-3" />
                <img src={longerColorless} alt="line" className="w-full h-3" />
              </div>
            ))}
        </div>

        <img
          src={markImage}
          alt="mark"
          className="absolute bottom-10 -left-10"
        />

        <div className="bg-white px-8 py-6 rounded-t-2xl">
          <div className="flex items-center gap-4">
            <img src={maleHalfImg} alt="human" />
            <div className="space-y-1">
              <img src={shortYellowLine} alt="line" className="w-[4/5] h-3" />
              <img src={longerYellowLine} alt="line" className="w-full h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCards;
