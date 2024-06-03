import { leelarImage, tenTimesImage, thirdOne } from "../../../assets/images";

const ThirdCards = () => {
  return (
    <div className="w-fit mt-8 smxl:mt-0">
      <div className="flex gap-6 ml-auto w-fit smxl:-mt-8">
        <img src={thirdOne} alt="allison" className="w-[300px]" />
        <img src={leelarImage} alt="leelar" className="w-[200px]" />
      </div>

      <img
        src={tenTimesImage}
        alt="10x"
        className="w-[524px] mt-6 ml-auto -mb-8 smxl:-mb-3"
      />
    </div>
  );
};

export default ThirdCards;
