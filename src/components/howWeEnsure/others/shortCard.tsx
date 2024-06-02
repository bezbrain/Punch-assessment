import { useDispatch, useSelector } from "react-redux";

import { playMedia, whiteMedia } from "../../../assets/icons";
import { AppDispatch, RootState } from "../../../store";
import { closeACard, openACard } from "../../../management/features/mediaSlice";

interface ShortCardProps {
  step: string;
  stepValue: string;
}

const ShortCard = ({ step, stepValue }: ShortCardProps) => {
  const { isCardOpen } = useSelector((store: RootState) => store.mediaStore);

  const dispatch = useDispatch<AppDispatch>();

  const getLastTwoChar = step.slice(-2);
  const getNumber = getLastTwoChar.charAt(0);

  const toggleDropdown = () => {
    dispatch(openACard(getNumber));
    if (isCardOpen) {
      dispatch(closeACard());
    }
  };

  return (
    <div className="border-[1px] px-4 py-3 rounded-[7px] shadow-md mt-1">
      <div
        className="flex gap-6 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div
          className={`w-[57px] h-[57px] rounded-full flex justify-center items-center ${
            isCardOpen === getNumber ? "bg-[#8BA4FD]" : "bg-[#ECECEC]"
          }`}
        >
          <img
            src={isCardOpen === getNumber ? whiteMedia : playMedia}
            alt="Media"
            className="w-[16px] h-[15px]"
          />
        </div>
        <p>
          <span className="font-semibold">{step}</span> {stepValue}
        </p>
      </div>

      <p
        className={`max-w-[530px] transition-all ${
          isCardOpen === getNumber ? "mt-4 h-[auto]" : "h-[0px] overflow-hidden"
        }`}
      >
        Candidates are assessed through skill based questions in a virtual
        setting. Allowing you to gauge personality and cultural fit.
      </p>
    </div>
  );
};

export default ShortCard;
