import styled from "styled-components";
import {
  fourthFirstImage,
  oneImage,
  rubyDevImage,
  systemOpsImage,
  thirdFirstImage,
} from "../../../assets/images";
import { oneStopIcon } from "../../../assets/icons";

const SlantContainer = () => {
  return (
    <SlantWrapper className="slant__container">
      <div className="content__container flex justify-between">
        <div className="pt-24 pb-8 flex items-start gap-6">
          <img src={oneImage} alt="one" className="h-[83px]" />

          <div className="-mt-2">
            <h3 className="max-w-[445px] text-[34px] font-semibold text-[#202229] leading-[44px]">
              Find your next star performer.
            </h3>
            <p className="text-[#202229CC] max-w-[405px] my-6">
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs.
            </p>

            <div className="flex items-center gap-2">
              <div className="bg-[#202229] w-[50px] h-[50px] rounded-[20px] flex justify-center items-center">
                <img src={oneStopIcon} alt="icon" />
              </div>
              <button>Join Now</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-4">
          <div className="bg-white rounded-b-[20px]">
            <div className="bg-[#ffdbcf] rounded-bl-[28px]">
              <img src={rubyDevImage} alt="Ruby" className="w-[250px]" />
            </div>
            <h3 className="text-[18px] p-4">Ruby Developer</h3>
            <p className="text-[12px] max-w-[142px] m-4">
              Redwood City, California 7 years experience
            </p>
          </div>

          <div className="bg-white rounded-b-[20px] self-start">
            <div className="bg-[#c9f0c5] rounded-bl-[28px]">
              <img src={systemOpsImage} alt="System" className="w-[250px]" />
            </div>
            <h3 className="text-[18px] p-4">System ops engineer</h3>
            <p className="text-[12px] max-w-[142px] m-4">
              Abu Dhabi, UAE 5 years experience
            </p>
          </div>

          <div>
            <img src={thirdFirstImage} alt="third" />
          </div>

          <div>
            <img src={fourthFirstImage} alt="fourth" />
          </div>
        </div>
      </div>
    </SlantWrapper>
  );
};

export default SlantContainer;

const SlantWrapper = styled.div`
  background-color: #edefff;
  transform: skewY(-4deg);
  padding-inline: 1rem;

  .content__container {
    transform: skewY(4deg);
  }
`;
