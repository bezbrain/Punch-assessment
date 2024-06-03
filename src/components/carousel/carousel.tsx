import styled from "styled-components";
import { frameOne, frameThree, frameTwo } from "../../assets/images";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Carousel = () => {
  const { containerLeftValue } = useSelector(
    (store: RootState) => store.carouselStore
  );

  // console.log(containerLeftValue);

  return (
    <CarouselWrapper>
      <div
        className="content__container"
        style={{ marginLeft: containerLeftValue }}
      >
        <div className="mt-24">
          <h2 className="text-[54px] w-[380px] leading-[64px]">
            Why choose Zwilt?
          </h2>

          <p className="max-w-[325px] text-[22px] text-[#202229CC] mt-8">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>
      </div>

      <div className="carousel__container top-0 -right-[420px] overflow-auto flex">
        <div className="h-[600px] min-w-[1300px]">
          <img src={frameOne} alt="frame1" className="h-full w-full" />
        </div>
        <div className="h-[600px] min-w-[1300px]">
          <img src={frameTwo} alt="frame2" className="h-full w-full" />
        </div>
        <div className="h-[600px] min-w-[1300px]">
          <img src={frameThree} alt="frame3" className="h-full w-full" />
        </div>
      </div>
    </CarouselWrapper>
  );
};

export default Carousel;

const CarouselWrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  padding-block: 10rem 5rem;
  padding-left: 1rem;
  background: linear-gradient(to top, #f2f4ff, #ffffff);
  background-color: #f2f4ff;
  /* width: 1300px; */
  margin-inline: auto;
  transform: skewY(-2deg);

  .content__container {
    transform: skewY(2deg);
    /* border: 2px solid green; */
    /* display: flex;
    justify-content: space-between; */
  }

  .content__container h2 {
    font-family: "Switzer-Semi-Bold";
  }

  .carousel__container {
    transform: skewY(2deg);
  }
`;
