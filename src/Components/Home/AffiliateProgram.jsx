import { Link } from "react-router-dom";
import Image from "../../assets/bg.ad82104c0d4e484d12bcddba09d1aa61.png";
// import { useEffect } from "react";

const AffiliateProgram = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "auto" });
  // }, []);
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <div className="md:w-3/4  pt-[10%] lg:px-[5%] md:px-[5%] ">
        <div className="md:skew-x-[30deg] lg:skew-x-[30deg]    md:w-min lg:w-min px-[5%] pr-[30%]  bg-black   py-2">
          <h3 className="transform lg:skew-x-[-30deg]  md:skew-x-[-30deg]  md:text-3xl lg:text-5xl text-3xl text-commonYellow  py-2 whitespace-nowrap font-bold">
            AFFILIATE <br className="md:hidden"/> PROGRAM <br /> USER <br className="md:hidden" /> MANUAL
          </h3>
        </div>
        <div className="flex flex-col pl-2 md:pl-[10%] lg:pl-[10%] pr-[25%] md:pr-[15%]  lg:pr-[15%] py-[5%] gap-y-4">
          <p className="leading-5 md:pr-[15%] lg:pr-[15%]">
            The following manual will set you on the way of productive
            partnership with MelBet Partners. Affiliate platform has been
            designed with simplicity and robustness in mind as you will see for
            yourself very soon.
          </p>
          <Link to='/instruction'>
          <button className="bg-black w-min whitespace-nowrap text-white hover:text-black text-center text-xl lg:text-2xl hover:bg-white font-bold px-12 py-4">
            READ MORE
          </button>
          </Link>
        </div>
      </div>
      <img src={Image} alt="" className="absolute top-0 -right-56 md:top-20 lg:top-0 md:-right-32 lg:-right-48  md:w-[500px] lg:w-[700px]  "/>
    </div>
  );
};

export default AffiliateProgram;
