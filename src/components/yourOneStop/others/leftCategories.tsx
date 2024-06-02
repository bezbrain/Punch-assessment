import { profileIcon, skillIcon, subCatIcon } from "../../../assets/icons";

interface LeftCategoriesProps {
  title: string;
}

const LeftCategories = ({ title }: LeftCategoriesProps) => {
  return (
    <div>
      <h3 className="text-[24px]">{title}</h3>

      <div>
        <p>
          <img src={skillIcon} alt="skill" />
          <span>989 Skills</span>
        </p>
        <p>
          <img src={subCatIcon} alt="sub" />
          <span>45 Sub-Categories</span>
        </p>
        <p>
          <img src={profileIcon} alt="profile" />
          <span>1011 Profiles</span>
        </p>
      </div>
    </div>
  );
};

export default LeftCategories;
