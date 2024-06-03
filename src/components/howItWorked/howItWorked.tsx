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
      <div className="content__container justify-between max-w-[1440px] mx-auto space-y-12 iPad:space-y-0 iPad:flex">
        {/* Left hand side */}
        <div className="how__it__worked text-white iPad:w-[40%]">
          <h2 className="text-[30px] flex leading-[44px] flex-wrap items-center max-w-[400px] iPhone:text-[40px] iPad:text-[50px] iPad:leading-[64px]">
            <span>How it worked</span> <span>for Jason</span>
            <img
              src={itWorkedImage}
              alt="it-worked-image"
              className="mx-4 h-[55px] w-[55px] rounded-full"
            />
            <span>at</span>{" "}
            <img
              src={grooveImage}
              alt="groove"
              className="mt-3 ml-4 h-[45px]"
            />
          </h2>

          <p className="my-4 max-w-[460px] iPad:text-[22px] md:my-6 iPad:my-12">
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

        {/* Right hand side */}
        <div className="text-white self-end pb-12 iPad:w-[50%]">
          <div className="flex gap-4 items-center">
            <div className="bg-[#AF7CFF] h-[69px] w-[69px] flex justify-center items-center rounded-3xl iPhone:rounded-[38px] iPhone:h-[99px] iPhone:w-[99px]">
              <img src={itWorkedGroove} alt="groove" />
            </div>
            <div>
              <h3 className="text-[24px] iPad:text-[34px]">Jason Makki</h3>
              <p className="text-[#C6C4C4] text-sm iPhone:text-[16px]">
                Engineer at GROOVE
              </p>
              <p className="text-[#C6C4C4]">San Francisco</p>
            </div>
          </div>

          <div className="right__hand__side max-w-[500px] mt-4 md:mt-10 iPad:mt-16">
            <p className="iPad:text-[22px]">
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
  }
  @media screen and (max-width: 539px) {
    .content__container {
      padding-block: 6rem;
    }
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
