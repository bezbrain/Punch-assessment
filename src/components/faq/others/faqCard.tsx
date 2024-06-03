import { yellowLogoIcon } from "../../../assets/icons";

interface FaqCardProps {
  borderStyle?: string;
  bgColor?: string;
  faqContent?: string;
  isImage?: boolean;
  isGeneral?: boolean;
  isJoining?: boolean;
}

const FaqCard = ({
  borderStyle,
  bgColor,
  isImage,
  isGeneral,
  isJoining,
  faqContent,
}: FaqCardProps) => {
  return (
    <div
      className={`flex justify-between items-center border-y-[1px] ${bgColor}`}
    >
      <div
        className={`flex justify-center items-center w-[230px] h-[110px] ${borderStyle}`}
      >
        {isGeneral && <p className="font-semibold">General</p>}
      </div>
      <div className="flex justify-center items-center w-[230px]">
        {isJoining && <p className="font-semibold">Joining Process</p>}
      </div>
      <div className={`h-[110px] w-[390px] flex items-center`}>
        <p className="text-left">{faqContent}</p>
      </div>
      <div className="flex justify-center items-center w-[230px] h-[110px]">
        {isImage && <img src={yellowLogoIcon} alt="logo" />}
      </div>
    </div>
  );
};

export default FaqCard;
