import { ReactNode } from "react";
import styled from "styled-components";

import { oneStopIcon } from "../../../assets/icons";

interface SlantContainerProps {
  figure: string;
  title: string;
  body: string;
  cards: ReactNode;
  btnValue: string;
  bgColor: string;
  titleStyle: string;
}

const SlantContainer = ({
  figure,
  title,
  body,
  cards,
  btnValue,
  bgColor,
  titleStyle,
}: SlantContainerProps) => {
  return (
    <SlantWrapper className={`slant__container ${bgColor}`}>
      <div className="content__container smxl:flex justify-between">
        <div className="pt-20 flex items-start gap-6">
          <img
            src={figure}
            alt="one"
            className="surfaceDuo:h-[83px] surfaceDuo:w-[60px]"
          />

          <div className="-mt-2">
            <h3
              className={`text-[24px] font-semibold text-[#202229] surfaceDuo:leading-[44px] surfaceDuo:text-[34px] ${titleStyle}`}
            >
              {title}
            </h3>
            <p className="text-[#202229CC] max-w-[405px] my-6">{body}</p>

            <div className="flex items-center gap-2">
              <div className="bg-[#202229] w-[50px] h-[50px] rounded-[20px] flex justify-center items-center">
                <img src={oneStopIcon} alt="icon" />
              </div>
              <button>{btnValue}</button>
            </div>
          </div>
        </div>

        {cards}
      </div>
    </SlantWrapper>
  );
};

export default SlantContainer;

const SlantWrapper = styled.div`
  transform: skewY(-4deg);
  padding-inline: 1rem 2rem;
  margin-top: 1.5rem;
  overflow: hidden;

  @media screen and (max-width: 539px) {
    padding-inline: 1rem;
  }

  .content__container {
    transform: skewY(4deg);
  }
`;
