import styled from "styled-components";

import { OneCards, SlantContainer } from "../startJourney";
import { oneImage } from "../../assets/images";

const StartJourney = () => {
  return (
    <StartJourneyWrapper>
      <h2 className="text-[54px] text-center mb-16">
        Start your journey today.
      </h2>

      <SlantContainer
        figure={oneImage}
        title="Find your next star performer."
        body="Explore the vast Zwilt marketplace to find the candidate that meets your needs."
        cards={<OneCards />}
      />
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
