import FooterLogoPart from "../../Components/Footer/FooterLogoPart";
import FooterText from "../../Components/Footer/FooterText";

const Footer = () => {
  return (
    <div className="bg-black  py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 justify-items-center">
        
      
      <FooterLogoPart/>
      <FooterText/>
      </div>
    </div>
  );
};

export default Footer;
