import { playMedia } from "../../../assets/icons";

interface ShortCardProps {
  step: string;
  stepValue: string;
}

const ShortCard = ({ step, stepValue }: ShortCardProps) => {
  return (
    <div className="border-[1px] px-4 py-2 rounded-[7px] flex gap-6 items-center shadow-md mt-1">
      <div className="w-[57px] h-[57px] rounded-full flex justify-center items-center bg-[#ECECEC]">
        <img src={playMedia} alt="Media" className="w-[16px] h-[15px]" />
      </div>
      <p>
        <span className="font-semibold">{step}</span> {stepValue}
      </p>
    </div>
  );
};

export default ShortCard;
