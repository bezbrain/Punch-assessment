import styled from "styled-components";
import { logoDownIcon } from "../../../assets/icons";

const PreFooter = () => {
  return (
    <PreFooterWrapper>
      <div className="cta__container">
        <h2 className="text-[7vw] font-semibold md:leading-[64px] max-w-[680px] mx-auto text-center md:text-[54px]">
          Need a job done, and done well? Get started
        </h2>

        <div className="bg-[#202229] w-[73px] h-[73px] rounded-[30px] flex justify-center items-center mx-auto mt-6">
          <img src={logoDownIcon} alt="logo" />
        </div>
      </div>
    </PreFooterWrapper>
  );
};

export default PreFooter;

const PreFooterWrapper = styled.div`
  background-color: #525aa0;
  transform: skewY(-2deg);
  max-width: 1440px;
  margin-inline: auto;
  /* padding: 5rem; */

  .cta__container {
    padding-block: 4rem;
    transform: skewY(2deg);
  }
`;
