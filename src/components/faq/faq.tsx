import styled from "styled-components";
import { FaqCard } from "../faq";

const Faq = () => {
  return (
    <FaqWrapper>
      <div className="content__container">
        <h2 className="text-[54px] text-center mb-8">
          Frequently asked questions
        </h2>

        <div>
          <FaqCard
            borderStyle="border-r-2"
            isGeneral={true}
            faqContent="I want to work part-time, is that possible"
          />
          <FaqCard faqContent="How long are the average projects?" />
          <FaqCard
            bgColor="bg-[#e8e8e8]"
            isImage={true}
            faqContent="How does the payment works?"
          />
          <FaqCard faqContent="How much can I earn?" />
          <FaqCard
            isGeneral={true}
            isJoining={true}
            borderStyle="bg-[#e8e8e8]"
            faqContent="I want to work part-time, is that possible"
          />
          <FaqCard faqContent="How long are the average projects?" />
          <FaqCard faqContent="How long are the average projects?" />
          <FaqCard faqContent="How much can I earn?" />
        </div>
      </div>
    </FaqWrapper>
  );
};

export default Faq;

const FaqWrapper = styled.div`
  padding-block: 6rem;
  background-color: #f3f3f3;
  transform: skewY(-2deg);

  .content__container {
    transform: skewY(2deg);
  }

  .content__container > h2 {
    font-family: "Switzer-Semi-Bold";
  }
`;
