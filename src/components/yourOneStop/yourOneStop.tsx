import styled from "styled-components";

import { LeftCategories, OneStopCard } from "../yourOneStop";
import { card1, card2 } from "../../utils/data";
import { oneStopIcon } from "../../assets/icons";

const YourOneStop = () => {
  return (
    <OneStopWrapper>
      <div className="content__container">
        <h2 className="text-[7vw] sm:text-[54px] surfaceDuo:mb-20">
          Your one-stop marketplace for finding the talent your business needs.
        </h2>

        <div className="max-w-[1440px] mx-auto justify-between smxl:flex">
          {/* Left hand side */}
          <div className="justify-between py-8 gap-4 surfaceDuo:flex sm:gap-16 smxl:gap-0 smxl:flex-col smxl:w-[30%]">
            <LeftCategories title="Find Dev and IT professionals to scale your business." />
            <LeftCategories title="Explore Creative individuals with a keen eye for detail." />
          </div>

          {/* Right hand side cards */}
          <div className="space-y-8 smxl:w-[60%]">
            <OneStopCard card={card1} title="IT & Development" />
            <OneStopCard card={card2} title="Design & Creative" />
          </div>
        </div>

        <div className="justify-between items-center mt-4 max-w-[730px] mx-auto surfaceDuo:flex surfaceDuo:space-y-0 smxl:max-w-[1440px]">
          <div className="flex items-center gap-3 smxl:w-[30%]">
            <div className="bg-[#202229] rounded-[30px] w-[74px] h-[74px] flex justify-center items-center">
              <img
                src={oneStopIcon}
                alt="one-stop"
                className="w-[25px] h-[15px]"
              />
            </div>
            <p className="text-[22px]">Exlore more</p>
          </div>

          <div className="smxl:w-[60%]">
            <p className="text-[22px] text-[#202229CC]">
              <span className="font-semibold">30 more</span> to explore
            </p>
          </div>
        </div>
      </div>
    </OneStopWrapper>
  );
};

export default YourOneStop;

const OneStopWrapper = styled.div`
  /* border: 2px solid red; */
  background-color: #edefff;
  margin-top: 1rem;
  transform: skewY(-4deg);
  padding-inline: 1rem;

  .content__container {
    transform: skewY(4deg);
    padding-block: 12rem;
  }
  @media screen and (max-width: 539px) {
    .content__container {
      padding-block: 4rem;
    }
  }

  .content__container > h2 {
    font-family: "Switzer-Bold";
    max-width: 970px;
    margin-inline: auto;
    text-align: center;
    line-height: 64px;
  }
  @media screen and (max-width: 639px) {
    .content__container > h2 {
      line-height: 48px;
    }
  }
`;
