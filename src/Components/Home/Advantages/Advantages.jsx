
import ImageOne from '../../../assets/coin.b8505ce66cdeb3365dbd0c70462da5d2.png'
import ImageTwo from "../../../assets/promo.c2810b6abe1e5b2e4d4338fd02c570da.png";
import ImageThree from "../../../assets/bonus.bf4810150a8547ba7e8f042491511000.png";
import ImageFour from "../../../assets/support.a3c9874e89c9b3bbac1afdc03f325c62.png";
import ImageFive from "../../../assets/fast-payment.6c339e9b12ec770ecac4584edac43469.png";
import ImageSix from "../../../assets/statistic.0860515c4e4148dcccb0ba8fec6aeaa7.png";
import AdvantagesSlider from "./AdvantagesSlider";


const Advantages = () => {
  const data = [
    {
      title: "Commission types: CPA, Hybrid, RevShare, CPL, CPI",
      content: "We work with all possible types of commissions for partners",
      image: ImageOne,
    },
    {
      title: "Extensive Collection of Ready-to-Use Promotional Materials",
      content:
        "We work with all standard display formats. Constantly updating promotional materials",
      image: ImageTwo,
    },
    {
      title: " Exclusive bonuses for referred players",
      content:
        "The more players you can bring in, the higher your commission percentage becomes",
      image: ImageThree,
    },
    {
      title: "24/7 Support in Multiple Languages",
      content:
        "Our customer support team is always available. Please don't hesitate to ask any questions",
      image: ImageFour,
    },
    {
      title: "Quick and easy payouts to affiliates",
      content:
        "We process transfers in accordance with our payment terms and conditions without delays",
      image: ImageFive,
    },
    {
      title: "Detailed Statistics in Real-Time",
      content:
        "Statistics are updated every minute, so you can check the results in real time",
      image: ImageSix,
    },
  ];
  
  return (
    <div className="flex flex-col gap-4 overflow-hidden justify-center items-center">
      <div className="skew-x-[30deg] w-full md:w-min lg:w-min px-[10%] bg-black  py-2">
        <h3 className="transform skew-x-[-30deg]  md:text-3xl lg:text-5xl text-3xl text-commonYellow text-center py-2 whitespace-nowrap font-bold">
          OUR ADVANTAGES
        </h3>
      </div>
      <div className=" grid-cols-3 hidden lg:grid md:grid py-4 gap-2 justify-items-center  text-white">
        {data.map((data, index) => (
          <div key={index} className="bg-black md:p-4 lg:p-6 md:w-60 lg:w-[310px]  lg:h-96 rounded-2xl">
            <img src={data.image} alt="" className="!md:w-[50%]!lg:w-auto" />
            <div className="hover:bg-commonYellow hover:text-black px-2">
              <h3 className="md:text-base lg:text-xl font-bold">{data.title}</h3>
              <p className="text-sm py-2 font-medium">{data.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden md:hidden block">
<AdvantagesSlider slides={data}/>
      </div>
    </div>
  );
};

export default Advantages;
