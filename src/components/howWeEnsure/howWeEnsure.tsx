import styled from "styled-components";
import ShortCard from "./others/shortCard";

const HowWeEnsure = () => {
  return (
    <HowWeEnsureWrapper>
      <h2 className="max-w-[570px] text-[54px]">
        How we ensure you’re in good hands.
      </h2>

      <p className="text-[22px] text-[#1E1515CC] my-6 leading-[32px] max-w-[645px]">
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </p>

      <div className="content__container">
        <ShortCard step="Step 1:" stepValue="Resume Screening" />
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
  max-width: 1300px;
  margin-inline: auto;

  > h2 {
    font-family: "Switzer-Semi-Bold";
    line-height: 64px;
  }

  .content__container {
    max-width: 630px;
  }
`;
