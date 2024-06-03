import styled from "styled-components";

import { FooterLinksColumn, PreFooter } from "../footer";
import Logo from "../general/logo";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="slant__container">
        <div className="content__container">
          <PreFooter />

          <section className="mt-40 mb-16 max-w-[1440px] mx-auto">
            {/* Top footer */}
            <div className="flex justify-between gap-8">
              <div className="w-[25%]">
                <Logo />
                <p className="text-[14px] max-w-[285px] mt-6 text-[rgba(255,255,255,0.7)]">
                  We take complex hiring processes - and simplify them.
                  Connecting you to the world’s highly qualified talent pool.
                </p>
              </div>

              <div className="w-[65%]">
                <h2 className="text-[54px] leading-[64px] w-[780px]">
                  Connecting the right people to the right businesses.
                </h2>
              </div>
            </div>

            {/* Base footer */}
            <div className="flex justify-between mt-16">
              <div className="w-[25%]">
                <a href="" className="text-[rgba(255,255,255,0.4)] text-[14px]">
                  LINKS AND REDIRECTS
                </a>

                <div className="flex gap-4 mt-6">
                  <button className="bg-[#292B34] w-[162px] text-center py-2 text-[15px] rounded-[20px] text-[rgba(255,255,255,0.6)] ">
                    Hire now
                  </button>
                  <button className="bg-[#292B34] w-[162px] text-center py-2 text-[15px] rounded-[20px] text-[rgba(255,255,255,0.6)] ">
                    Apply now
                  </button>
                </div>
              </div>

              <div className="w-[65%] flex justify-between">
                <FooterLinksColumn
                  columnTitle="PLATFORM"
                  contentOne="Find Work"
                  contentTwo="Find Talent"
                  contentThree="Categories"
                  contentFour="About Us"
                />
                <FooterLinksColumn
                  columnTitle="CATEGORIES"
                  contentOne="Data Science"
                  contentTwo="IT & Networking"
                  contentThree="Web & Mobile"
                />
                <FooterLinksColumn
                  columnTitle="HELP"
                  contentOne="FAQ’s"
                  contentTwo="Contact Us"
                />
                <FooterLinksColumn
                  columnTitle="GET IN TOUCH @"
                  contentOne="Instagram"
                  contentTwo="LinkedIn"
                  contentThree="Twitter"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <hr className="w-full mt-8" /> */}

      <div className="text-[rgba(255,255,255,0.4)] p-4  flex justify-between max-w-[1440px] mx-auto mt-8 border-t-[1px]">
        <p className="text-[rgba(255,255,255,0.6)]">
          All rights reserved by Zwilt
        </p>
        <div className="flex gap-12">
          <a href="" className="underline">
            Privacy Policy
          </a>
          <a href="" className="underline">
            Terms and Conditions
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #131417;

  .slant__container {
    background-color: #131417;
    padding: 4rem 1rem;
    color: #fff;
    transform: skewY(-2deg);
  }

  .content__container {
    transform: skewY(2deg);
  }
`;
