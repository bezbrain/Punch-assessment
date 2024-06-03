import styled from "styled-components";

import {
  OneCards,
  SlantContainer,
  ThirdCards,
  TwoCards,
} from "../startJourney";
import { oneImage, threeImage, twoImage } from "../../assets/images";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { getLeftValue } from "../../management/features/carouselSlice";

const StartJourney = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  // const [isLeft, setIsLeft] = useState(window.innerWidth);

  const dispatch = useDispatch<AppDispatch>();

  // Initially set the value of this container left value
  const initiallyGetValue = () => {
    if (leftRef.current) {
      const leftValue = leftRef?.current.getBoundingClientRect().left;
      // console.log(leftValue);

      dispatch(getLeftValue(leftValue));
    }
  };

  // Set the value when the screen resizes
  const handleScreenResize = () => {
    initiallyGetValue();
  };

  useEffect(() => {
    initiallyGetValue(); // Initially call the function to first set the left value

    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  return (
    <StartJourneyWrapper ref={leftRef}>
      <h2 className="text-[7vw] sm:text-[54px] text-center mb-16">
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
        cards={<TwoCards />}
        btnValue="Browse More"
        bgColor="bg-[#fff7e0]"
        titleStyle="max-w-[350px]"
      />
      <SlantContainer
        figure={threeImage}
        title="Start building your team."
        body="Onboard your candidate right away and start creating the next big thing."
        cards={<ThirdCards />}
        btnValue="Join Now"
        bgColor="bg-[#f2f2f2]"
        titleStyle="max-w-[275px]"
      />
    </StartJourneyWrapper>
  );
};

export default StartJourney;

const StartJourneyWrapper = styled.div`
  max-width: 1440px;
  margin-inline: auto;

  > h2 {
    font-family: "Switzer-Semi-Bold";
  }
`;
