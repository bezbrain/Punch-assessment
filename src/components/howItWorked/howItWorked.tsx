import styled from "styled-components";
import {
  grooveImage,
  itWorkedGroove,
  itWorkedImage,
} from "../../assets/images";
import { leftLogoIcon, logoIcon } from "../../assets/icons";

const HowItWorked = () => {
  return (
    <HowItWorkedWrapper>
      <div className="content__container max-w-[1440px] mx-auto">
        <div className="how__it__worked text-white w-[40%]">
          <h2 className="text-[50px] leading-[64px] flex flex-wrap items-center max-w-[400px]">
            <span>How it worked</span> <span>for Jason</span>
            <img
              src={itWorkedImage}
              alt="it-worked-image"
              className="mx-4 h-[55px] w-[55px] rounded-full"
            />
            <span>at</span>{" "}
            <img src={grooveImage} alt="groove" className="mt-3 h-[45px]" />
          </h2>

          <p className="my-12 text-[22px] max-w-[460px]">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since.
          </p>

          <div className="flex gap-4">
            <div className="bg-[#FFFFFF] rounded-[20px] w-[50px] h-[50px] flex justify-center items-center">
              <img src={leftLogoIcon} alt="left" />
            </div>
            <div className="bg-[#FFFFFF] rounded-[20px] w-[50px] h-[50px] flex justify-center items-center">
              <img src={logoIcon} alt="left" />
            </div>
          </div>
        </div>

        <div className="text-white w-[50%] self-end pb-12">
          <div className="flex gap-4 items-center">
            <div className="bg-[#AF7CFF] h-[99px] w-[99px] flex justify-center items-center rounded-[38px]">
              <img src={itWorkedGroove} alt="groove" />
            </div>
            <div>
              <h3 className="text-[34px]">Jason Makki</h3>
              <p className="text-[#C6C4C4]">Engineer at GROOVE</p>
              <p className="text-[#C6C4C4]">San Francisco</p>
            </div>
          </div>

          <div className="right__hand__side max-w-[500px] mt-16">
            <p className="text-[22px]">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
    </HowItWorkedWrapper>
  );
};

export default HowItWorked;

const HowItWorkedWrapper = styled.div`
  /* border: 2px solid red; */
  background-color: #202229;
  transform: skewY(-4deg);
  padding-inline: 1rem;

  .content__container {
    transform: skewY(4deg);
    padding-block: 12rem;
    display: flex;
    justify-content: space-between;
  }

  .how__it__worked > h2 {
    font-family: "Switzer-Semi-Bold";
  }
  .how__it__worked p {
    color: rgba(255, 255, 255, 0.8);
  }

  .right__hand__side p {
    color: rgba(255, 255, 255, 0.8);
  }
`;
