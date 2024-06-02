import styled from "styled-components";

const HowItWorked = () => {
  return (
    <HowItWorkedWrapper>
      <div className="content__container">
        <p className="text-4xl">Hello</p>
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
`;
