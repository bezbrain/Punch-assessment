import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { heroImage, inputIcon } from "../../assets/images";
import { HeroBaseCard, HeroLines } from "../hero";

const Hero = () => {
  const [isValue, setIsValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValue(e.target.value);
  };

  return (
    <HeroWrapper>
      <div className="top__hero max-w-[670px] mx-auto px-4 text-center">
        <h1 className="text-[54px] leading-[64px] flex flex-wrap items-center justify-center">
          <span>Finding the right fit</span>{" "}
          <img src={heroImage} alt="hero-image" className="px-2" /> has{" "}
          <span>never been easier.</span>
        </h1>
        <p className="text-[22px]">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>

        <div className="input__container">
          {!isValue && (
            <p className="absolute left-4">
              <span className="font-semibold">Looking for</span> design |
            </p>
          )}
          <input
            type="text"
            className="border-[1px] h-full pl-4 pr-[5.5rem] rounded-lg w-full"
            value={isValue}
            onChange={handleInputChange}
          />
          <div className="bg-[#FFBE2E] h-[74px] w-[74px] flex items-center justify-center rounded-lg cursor-pointer absolute right-0">
            <img src={inputIcon} alt="icon" className="w-[25px] h-[15px]" />
          </div>
        </div>
      </div>

      <HeroBaseCard />
      <HeroLines />
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.section`
  padding-top: 18vh;

  .top__hero > h1 {
    font-family: "Switzer-Bold";
  }

  .top__hero > p {
    margin-top: 1rem;
    line-height: 32px;
  }

  .input__container {
    /* border: 2px solid red; */
    position: relative;
    max-width: 570px;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    height: 74px;
  }
  .input__container > input::placeholder {
    font-size: 16px;
  }
  .input__container > input:focus {
    outline: 1px solid #525aa0;
  }
`;
