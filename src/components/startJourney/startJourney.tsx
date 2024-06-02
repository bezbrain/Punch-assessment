import styled from "styled-components";

import { OneCards, SlantContainer } from "../startJourney";
import { oneImage, threeImage, twoImage } from "../../assets/images";

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
        btnValue="Join Now"
        bgColor="bg-[#edefff]"
        titleStyle="max-w-[445px]"
      />
      <SlantContainer
        figure={twoImage}
        title="Evaluate to your heart’s content."
        body="Assess the candidate through work history, transparent tests and video interviews."
        cards
        btnValue="Browse More"
        bgColor="bg-[#fff7e0]"
        titleStyle="max-w-[350px]"
      />
      <SlantContainer
        figure={threeImage}
        title="Start building your team."
        body="Onboard your candidate right away and start creating the next big thing."
        cards
        btnValue="Join Now"
        bgColor="bg-[#f2f2f2]"
        titleStyle="max-w-[275px]"
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
