import PropTypes from "prop-types";
import smallDeviceLogo from "../../assets/logo2-mobile.6dfa37520650ec3c782f2c72f2a9a9aa.svg";
import mediumDeviceLogo from "../../assets/logo.4ac3cfad391ca3a059d5ca9cf6fdbf90.png";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import ButtonData from "./ButtonData"; // Import ButtonData

const SmallDeviceHeader = ({
  languages,
  selectedLanguage,
  handleLanguageChange,
  headerData,
  buttons,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (index, header) => {
    setActiveTab(index);
    setIsOpen(false); // Close the menu when tab is clicked
    handleNavigation(header, index); // Handle navigation after setting active tab
  };

  const scrollableIndices = [1, 4];
  
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const handleNavigation = (header, index) => {
    if (scrollableIndices.includes(index)) {
      const sectionId = header.link.split("#")[1];

      if (location.pathname !== "/") {
        navigate(`/#${sectionId}`);
        setTimeout(() => handleScroll(sectionId), 300);
      } else {
        handleScroll(sectionId);
      }
    } else {
      navigate(header.link);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setIsOpen(false); // Close the menu after navigation
  };

  return (
    <div className="lg:hidden py-2 md:px-4">
      <div className="flex flex-row items-center justify-around md:justify-between">
        <Link to={"/"} className="">
          <div>
            <img src={smallDeviceLogo} alt="" className="md:hidden" />
            <img
              src={mediumDeviceLogo}
              alt=""
              className="hidden md:block w-full max-w-[150px]"
            />
          </div>
        </Link>

        <div className="flex flex-row items-center gap-2">
          {/* Render ButtonData Component for Dropdown Language Selection */}
          <ButtonData
            languages={languages}
            selectedLanguage={selectedLanguage}
            handleLanguageChange={handleLanguageChange}
            buttons={buttons}
          />

          <span onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
            <TiThMenu className="w-6 h-auto" />
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center bg-commonYellow top-0 text-black font-bold text-lg">
          {headerData.map((header, index) => (
            <li
              key={index}
              className={`w-full p-8 text-center border-b-4 border-black list-none 
                       ${activeTab === index ? "bg-black text-white" : ""}`}
              onClick={() => {
                handleTabClick(index, header); // Set active tab and close menu
              }}
            >
              {scrollableIndices.includes(index) ? (
                <ScrollLink
                  to={header.link.split("#")[1]} // ✅ Dynamic ID
                  onClick={() => handleNavigation(header, index)} // Handle navigation and close menu
                >
                  {header.label}
                </ScrollLink>
              ) : (
                <RouterLink to={header.link}>{header.label}</RouterLink>
              )}
            </li>
          ))}
          <span className="p-8 cursor-pointer" onClick={() => setIsOpen(false)}>
            <ImCross />
          </span>
        </div>
      )}
    </div>
  );
};

SmallDeviceHeader.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
  headerData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SmallDeviceHeader;
