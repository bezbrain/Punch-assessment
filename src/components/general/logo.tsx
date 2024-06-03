import { zwiltLogo } from "../../assets/logo";

interface LogoProps {
  logoStyle?: string;
}

const Logo = ({ logoStyle }: LogoProps) => {
  return (
    <div>
      <img src={zwiltLogo} alt="Zwilt" className={logoStyle} />
    </div>
  );
};

export default Logo;
