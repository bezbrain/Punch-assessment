import styled from "styled-components";

import { SlantContainer } from "../startJourney";

const StartJourney = () => {
  return (
    <StartJourneyWrapper>
      <h2 className="text-[54px] text-center mb-16">
        Start your journey today.
      </h2>

      <SlantContainer />
    </StartJourneyWrapper>
  );
};

export default StartJourney;

const StartJourneyWrapper = styled.div`
  max-width: 1300px;
  margin-inline: auto;

  > h2 {
    font-family: "Switzer-Semi-Bold";
  }
`;
