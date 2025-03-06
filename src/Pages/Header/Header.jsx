import { useState } from "react";
import headerLogo from "../../assets/logo.4ac3cfad391ca3a059d5ca9cf6fdbf90.png";
import ButtonData from "../../Components/Header/ButtonData";
import HeaderData from "../../Components/Header/HeaderData";
import SmallDeviceHeader from "../../Components/Header/SmallDeviceHeader";
import { Link } from "react-router-dom";
import Advantages from "../Advantages/Advantages";

const Header = () => {
  const [activeTab, setActiveTab] = useState();
  const headerData = [
    { label: "ABOUT US", link: "/about" },
    { label: "ADVANTAGES", link:"/#advantages"},
    { label: "INSTRUCTIONS", link: "/instruction" },
    { label: "NEWS", link: "/news" },
    { label: "FAQ", link: "/#faq" },
  ];
  const languages = [
    { value: "ae", label: "AE" },
    { value: "az", label: "AZ" },
    { value: "bd", label: "BD" },
    { value: "br", label: "BR" },
    { value: "cn", label: "CN" },
    { value: "cz", label: "CZ" },
    { value: "de", label: "DE" },
    { value: "dk", label: "DK" },
    { value: "es", label: "ES" },
    { value: "en", label: "EN" },
    { value: "et", label: "ET" },
    { value: "fi", label: "FI" },
  ];
  const buttons = [
    {
      label: "REGISTRATION",
      action: () => console.log("Registration clicked"),link: "/registration"
    },
    { label: "LOG IN", action: () => console.log("Log in clicked"), link: "/login" },
    { label: "En", action: () => console.log("Language changed") },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    console.log(`Language selected: ${e.target.value}`);
  };
  
  

  return (
    <div className="bg-black text-white sticky top-0 z-50">
      <div className="lg:flex hidden flex-row items-center justify-center gap-8 py-6 whitespace-nowrap">
        <Link to="/">
          <img
            src={headerLogo}
            alt=""
            className="w-full  lg:max-w-[150px]"
            onClick={() => setActiveTab(-1)}
          />
        </Link>
        <HeaderData
          activeTab={activeTab}
          headerData={headerData}
        />
        <ButtonData
          languages={languages || []}
          selectedLanguage={selectedLanguage || ""}
          handleLanguageChange={handleLanguageChange}
          buttons={buttons}
        />
      </div>
      <SmallDeviceHeader
        languages={languages || []}
        selectedLanguage={selectedLanguage || ""}
        handleLanguageChange={handleLanguageChange}
        headerData={headerData}
        buttons={buttons}
      />
      <div className="hidden">
        <Advantages  />
      </div>
    </div>
  );
};
Header.propTypes = {
  
};

export default Header;
