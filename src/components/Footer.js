import linkedinIcon from "../assets/linkedin-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";

function Footer() {
  return (
    <div className="py-2 bg-secondary/20 shadow-lg">
      <div className="flex flex-row justify-between items-center w-10/12 mx-auto">
        <div className="text-secondary  text-xs">
          RACE @ 2020 All Rights Reserved
        </div>
        <div className="flex flex-row justify-between items-center w-1/12">
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={linkedinIcon} alt="Linkedin Icon" />
          <img src={twitterIcon} alt="Twitter Icon" />
        </div>
        <div className="text-secondary  text-xs">www.raceconomy.com</div>
      </div>
    </div>
  );
}

export default Footer;
