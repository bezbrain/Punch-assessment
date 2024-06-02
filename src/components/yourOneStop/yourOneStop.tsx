import styled from "styled-components";

import { LeftCategories, OneStopCard } from "../yourOneStop";
import { card1, card2 } from "../../utils/data";

const YourOneStop = () => {
  return (
    <OneStopWrapper>
      <div className="content__container">
        <h2 className="text-[54px] mb-20">
          Your one-stop marketplace for finding the talent your business needs.
        </h2>

        <div className="max-w-[1300px] mx-auto flex justify-between">
          <div className="w-[30%]">
            <LeftCategories title="Find Dev and IT professionals to scale your business." />
            <LeftCategories title="Explore Creative individuals with a keen eye for detail.  " />
          </div>

          <div className="w-[60%] space-y-8">
            <OneStopCard card={card1} title="IT & Development" />
            <OneStopCard card={card2} title="Design & Creative" />
          </div>
        </div>
      </div>
    </OneStopWrapper>
  );
};

export default YourOneStop;

const OneStopWrapper = styled.div`
  /* border: 2px solid red; */
  background-color: #edefff;
  margin-top: 1rem;
  transform: skewY(-4deg);
  padding-inline: 1rem;

  .content__container {
    transform: skewY(4deg);
    padding-block: 12rem;
  }

  .content__container > h2 {
    font-family: "Switzer-Bold";
    max-width: 970px;
    margin-inline: auto;
    text-align: center;
    line-height: 64px;
  }
`;
