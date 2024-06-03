import styled from "styled-components";

const HeroLines = () => {
  return (
    <HeroLinesWrapper className="">
      <div className="h-[20px] w-full"></div>
      <div className="h-[15px] w-full mt-[6px]"></div>
      <div className="h-[10px] w-full mt-[10px]"></div>
      <div className="h-[6px] w-full mt-[16px]"></div>
      <div className="h-[2px] w-full mt-[16px]"></div>
    </HeroLinesWrapper>
  );
};

export default HeroLines;

const HeroLinesWrapper = styled.div`
  margin-top: 6.5rem;

  @media screen and (max-width: 539px) {
    margin-top: 4.5rem;
  }

  > div {
    transform: rotate(356deg);
    background: radial-gradient(circle at center, #5a60a3, #e6e1f2 100%);
  }
`;
