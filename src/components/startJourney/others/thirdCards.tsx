import { leelarImage, tenTimesImage, thirdOne } from "../../../assets/images";

const ThirdCards = () => {
  return (
    <div>
      <div className="flex -mt-8 ml-[230px]">
        <img
          src={thirdOne}
          alt="allison"
          className="-mr-[72px] w-[300px] h-[280px]"
        />
        <img src={leelarImage} alt="leelar" className="-pl-8 w-[250px]" />
      </div>

      <img src={tenTimesImage} alt="10x" className=" ml-[240px] -mt-[52px]" />
    </div>
  );
};

export default ThirdCards;
