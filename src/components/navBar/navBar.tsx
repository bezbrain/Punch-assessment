import styled from "styled-components";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

import { navData1, navData2 } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { closeNav, openNav } from "../../management/features/navSlice";
import Logo from "../general/logo";

const NavBar = () => {
  const { isOpen } = useSelector((store: RootState) => store.navStore);

  const dispatch = useDispatch<AppDispatch>();

  // Open the nav drop down
  const handleShowNav = () => {
    dispatch(openNav());
  };

  // Close the nav drop down
  const handleCloseNav = () => {
    dispatch(closeNav());
  };

  return (
    <NavBarWrapper className="pt-4 z-10 iPadAir:pt-8">
      {!isOpen && (
        <TiThMenuOutline
          className="fixed right-4 top-[25px] text-3xl text-white cursor-pointer iPadAir:hidden"
          onClick={handleShowNav}
        />
      )}
      {isOpen && (
        <IoClose
          className="fixed z-10 right-4 top-7 text-3xl text-white cursor-pointer iPadAir:hidden"
          onClick={handleCloseNav}
        />
      )}

      <div
        className={`nav__container bg-[#525AA0] ${
          isOpen ? "show__nav__items" : "hide__nav__items"
        }`}
      >
        <Logo logoStyle="iPadAir:pl-4" />

        <nav className="text-[#ffffff] space-y-2 mt-3 iPadAir:flex iPadAir:items-center iPadAir:mt-0 iPadAir:gap-8 iPadAir:space-y-0">
          {navData1.map((each) => {
            const { id, navItem } = each;

            return (
              <ul key={id}>
                <li>
                  <a href="">{navItem}</a>
                </li>
              </ul>
            );
          })}
        </nav>

        <nav className="text-[#ffffff] mt-8 flex items-center gap-4 iPadAir:mt-0">
          {navData2.map((each) => {
            const { id, navItem } = each;

            return (
              <ul key={id}>
                <li>
                  <a
                    href=""
                    className={
                      id === 2
                        ? "bg-white text-[#202229] font-semibold px-4 py-2 rounded-xl"
                        : ""
                    }
                  >
                    {navItem}
                  </a>
                </li>
              </ul>
            );
          })}
        </nav>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.header`
  /* border: 2px solid red; */
  position: fixed;
  width: 100%;
  background-color: #fff;

  .nav__container {
    /* border: 2px solid green; */
    max-width: 1440px;
    padding: 14px 8px;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    /* transition: max-height 0.5s ease-out; */
  }

  @media screen and (max-width: 840px) {
    .nav__container {
      /* border: 2px solid green; */
      flex-direction: column;
      align-items: flex-start;
      padding-left: 1rem;
    }
    .show__nav__items {
      overflow-y: auto;
      max-height: 300px;
      transition: ease 0.5s all;
      border-radius: 0px;
    }
    .hide__nav__items {
      overflow-y: hidden;
      max-height: 50px;
      transition: ease 0.5s all;
    }
  }
`;
