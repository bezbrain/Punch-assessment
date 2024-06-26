import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { AppDispatch, RootState } from "../../../store";
import {
  focusDesignAndCreative,
  focusITDev,
} from "../../../management/features/heroSlice";

const HeroBaseCard = () => {
  const { isTIDevelopment } = useSelector(
    (store: RootState) => store.heroStore
  );

  const dispatch = useDispatch<AppDispatch>();

  const showITHandler = () => {
    dispatch(focusITDev());
  };
  const showDesignHandler = () => {
    dispatch(focusDesignAndCreative());
  };

  return (
    <HeroBaseCardWrapper className="max-w-[920px] mx-auto mt-10 bg-[#F8F8F8] px-4 pt-3 pb-4 sm:px-16">
      <div className="mx-auto w-fit bg-[#D2D2D2] rounded-[15px] mb-4">
        <button
          className={`${
            isTIDevelopment ? "bg-[#C7F4C2]" : ""
          } px-2 text-sm iPhone:text-[16px] iPhone:px-6 py-2 rounded-[15px]`}
          onClick={showITHandler}
        >
          IT & Development
        </button>
        <button
          className={`${
            !isTIDevelopment ? "bg-[#C7F4C2]" : ""
          } px-2 text-sm iPhone:text-[16px] iPhone:px-6 py-2 rounded-[15px]`}
          onClick={showDesignHandler}
        >
          Design and Creative
        </button>
      </div>

      <div className="IT__list__con flex flex-wrap justify-center gap-x-16 gap-y-4 sm:gap-0 sm:justify-between">
        <ul>
          <li>Python Developer</li>
          <li>Shopify Developer</li>
          <li className="font-semibold text-[#202229]">MERN Stack Developer</li>
          <li>Full Stack Developer</li>
        </ul>
        <ul>
          <li>Data Scientist</li>
          <li>Front End Developer</li>
          <li>Shopify Developer</li>
          <li>Python Developer</li>
        </ul>
        <ul>
          <li>Shopify Developer</li>
          <li>Python Developer</li>
          <li>Full Stack Developer</li>
          <li className="font-semibold text-[#202229]">Explore More</li>
        </ul>
      </div>
    </HeroBaseCardWrapper>
  );
};

export default HeroBaseCard;

const HeroBaseCardWrapper = styled.div`
  border-radius: 15px;

  .IT__list__con > ul {
    line-height: 2.2rem;
  }

  .IT__list__con > ul > li {
    color: #959595;
  }
  @media screen and (max-width: 639px) {
    .IT__list__con > ul {
      line-height: 1.8rem;
    }
  }
`;
