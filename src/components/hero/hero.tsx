import { useRef, useState } from "react";
import styled from "styled-components";

import { inputIcon } from "../../assets/images";

const Hero = () => {
  const [isPlaceholder, setIsPlaceholder] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = () => {
    if (inputRef.current) {
      if (inputRef.current.value.length === 0) {
        setIsPlaceholder(true);
      }
    }
  };

  return (
    <HeroWrapper>
      <div className="top__hero max-w-[670px] mx-auto px-4 text-center">
        <h1 className="text-[54px] leading-[64px]">
          Finding the right fit has never been easier.
        </h1>
        <p className="text-[22px]">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>

        <div className="input__container">
          {isPlaceholder && (
            <p className="absolute left-4">
              <span className="font-semibold">Looking for</span> design |
            </p>
          )}
          <input
            type="text"
            // placeholder="Looking for design |"
            className="border-[1px] h-full pl-4 pr-[5.5rem] rounded-lg w-full"
            ref={inputRef}
            onKeyDown={() => setIsPlaceholder(false)}
            onChange={handleInputChange}
          />
          <div className="bg-[#FFBE2E] h-[74px] w-[74px] flex items-center justify-center rounded-lg cursor-pointer absolute right-0">
            <img src={inputIcon} alt="icon" className="w-[25px] h-[15px]" />
          </div>
        </div>
      </div>
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
