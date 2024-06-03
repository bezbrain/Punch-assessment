import styled from "styled-components";

import ShortCard from "./others/shortCard";

const HowWeEnsure = () => {
  return (
    <HowWeEnsureWrapper>
      <h2 className="max-w-[370px] text-[7vw] surfaceDuo:leading-[64px] surfaceDuo:text-[54px] surfaceDuo:max-w-[570px]">
        How we ensure you’re in good hands.
      </h2>

      <p className="text-[#1E1515CC] my-6 max-w-[645px] surfaceDuo:text-[22px] surfaceDuo:leading-[32px]">
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </p>

      <div className="content__container">
        <ShortCard step="Step 1:" stepValue="Resume Screening" />
        <ShortCard step="Step 2:" stepValue="Video Interview" />
        <ShortCard step="Step 3:" stepValue="Technical Evaluation" />
        <ShortCard step="Step 4:" stepValue="Application Review" />
        <ShortCard step="Step 5:" stepValue="Lets get to work" />
      </div>
    </HowWeEnsureWrapper>
  );
};

export default HowWeEnsure;

const HowWeEnsureWrapper = styled.div`
  padding: 12rem 1rem;
  max-width: 1440px;
  margin-inline: auto;

  @media screen and (max-width: 539px) {
    padding-block: 6rem;
  }

  > h2 {
    font-family: "Switzer-Semi-Bold";
  }

  .content__container {
    max-width: 630px;
  }
`;
