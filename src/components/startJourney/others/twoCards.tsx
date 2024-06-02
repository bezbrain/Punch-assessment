import {
  cardImage,
  colorlessLine,
  femaleHalfImage,
  longerColorless,
  longerGreenLine,
  longerLine,
  longerYellowLine,
  maleHalfImg,
  shortGreenLine,
  shortLine,
  shortYellowLine,
} from "../../../assets/images";

const TwoCards = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-white py-10 px-8 rounded-2xl -mt-12">
        <div className="flex items-center gap-4">
          <img src={cardImage} alt="human" />
          <div className="space-y-1">
            <img src={shortLine} alt="line" />
            <img src={longerLine} alt="line" />
          </div>
        </div>

        {Array(3)
          .fill(undefined)
          .map((_, i) => (
            <div key={i} className="space-y-1 mt-5">
              <img src={colorlessLine} alt="line" />
              <img src={longerColorless} alt="line" />
            </div>
          ))}
      </div>

      <div className="space-y-6">
        <div className="bg-white px-8 py-12 rounded-2xl -mt-20">
          <div className="flex gap-4">
            <img src={femaleHalfImage} alt="human" />
            <div className="space-y-1">
              <img src={shortGreenLine} alt="line" />
              <img src={longerGreenLine} alt="line" />
            </div>
          </div>

          {Array(3)
            .fill(undefined)
            .map((_, i) => (
              <div key={i} className="space-y-1 mt-5">
                <img src={colorlessLine} alt="line" />
                <img src={longerColorless} alt="line" />
              </div>
            ))}
        </div>

        <div className="bg-white px-8 py-6 rounded-t-2xl">
          <div className="flex items-center gap-4">
            <img src={maleHalfImg} alt="human" />
            <div className="space-y-1">
              <img src={shortYellowLine} alt="line" />
              <img src={longerYellowLine} alt="line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCards;
