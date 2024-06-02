import {
  rubyDevImage,
  systemOpsImage,
  thirdFirstImage,
  fourthFirstImage,
} from "../../../assets/images";

const OneCards = () => {
  return (
    <div className="grid grid-cols-2 gap-6 -mt-8">
      {/* Ruby developer */}
      <div className="bg-white rounded-b-[20px]">
        <div className="bg-[#ffdbcf] rounded-bl-[28px]">
          <img src={rubyDevImage} alt="Ruby" className="w-[250px]" />
        </div>
        <h3 className="text-[18px] py-2 px-4">Ruby Developer</h3>
        <p className="text-[12px] max-w-[142px] m-4">
          Redwood City, California 7 years experience
        </p>
      </div>

      {/* System ops engr */}
      <div className="bg-white rounded-b-[20px] self-start -mt-4">
        <div className="bg-[#c9f0c5] rounded-bl-[28px]">
          <img src={systemOpsImage} alt="System" className="w-[250px]" />
        </div>
        <h3 className="text-[18px] py-2 px-4">System ops engineer</h3>
        <p className="text-[12px] max-w-[142px] m-4">
          Abu Dhabi, UAE 5 years experience
        </p>
      </div>

      <div className="bg-[#d7d1ff] rounded-t-[24px] -mb-8">
        <img src={thirdFirstImage} alt="third" className="w-[210px] mx-auto" />
      </div>

      <div className="bg-[#fcdc8b] -mt-16 rounded-t-[24px]">
        <img
          src={fourthFirstImage}
          alt="fourth"
          className="mx-auto w-[250px]"
        />
      </div>
    </div>
  );
};

export default OneCards;
