
import { useEffect } from "react";
import AffiliateProgram from "../../Components/Home/AffiliateProgram";
import Earning from "../../Components/Home/Earning";
import HomeBanner from "../../Components/Home/HomeBanner";
import Partnership from "../../Components/Home/Partnership";
import Testimonials from "../../Components/Home/Testimonials";
import Advantages from "../Advantages/Advantages";
import Faq from "../Faq/Faq";

const Home = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, []);
  

  return (
    <div className="bg-commonYellow ">
      <HomeBanner />
      <div id="advantages">
        <Advantages />
      </div>
      <Earning/>
      <Testimonials/>
      <AffiliateProgram/>
      <Partnership/>
      <div id="faq">
      <Faq />
      </div>
      
    </div>
  );
};

export default Home;
