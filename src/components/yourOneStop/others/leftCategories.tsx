import { profileIcon, skillIcon, subCatIcon } from "../../../assets/icons";

interface LeftCategoriesProps {
  title: string;
}

const commonPTagStyle = "flex items-center gap-2 text-[#202229CC]";

const LeftCategories = ({ title }: LeftCategoriesProps) => {
  return (
    <div className="">
      <h3 className="text-[24px] leading-[34px] mb-6">{title}</h3>

      <div className="grid grid-cols-2 gap-4">
        <p className={commonPTagStyle}>
          <img src={skillIcon} alt="skill" />
          <span>989 Skills</span>
        </p>
        <p className={commonPTagStyle}>
          <img src={subCatIcon} alt="sub" />
          <span>45 Sub-Categories</span>
        </p>
        <p className={commonPTagStyle}>
          <img src={profileIcon} alt="profile" />
          <span>1011 Profiles</span>
        </p>
      </div>
    </div>
  );
};

export default LeftCategories;
