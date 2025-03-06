import image1 from '../../assets/6e249fb4-eab2-4fde-b3a4-94ead5460e41.png';
import image2 from '../../assets/414f60bc-dccf-4530-87bd-b1789bfb7e3a.png';
import image3 from '../../assets/8fc063da-a212-4d91-a86a-847d02e3fcf4.png';
import image4 from '../../assets/4fe21e83-d03b-49e2-8274-f67c1f0c43d6.jpg';
import image5 from '../../assets/a2eb6848-c711-4f8a-aa35-cf99b2a763be.jpg';
import image6 from '../../assets/829d66f7-5635-4a2b-9f0c-f3ab6568f8a5.jpg';
const News = () => {
     const data = [
        {
          title: "Didier Drogba at SIGMA Eurasia - A MelBet Exclusive You Cant Miss",
          content: "SIGMA Eurasia is about to make history with a once-in-a-lifetime event, courtesy of MelBet! Football legend Didier Drogba, regional brand ambassador in Turkey, will join us on 25 February..",
          date:'17/05/2025',
          image: image1,
        },
        {
          title: "How Did MelBet Achieve Success in Africa? New Interview with Anastasiia Sherbyna",
          content:
            "Anastasiia Sherbyna, Marketing Director of MelBet Partners and Affiliates, explains to iGBA how the company achieved success by taking a comprehensive approach to localizing its..",
          image: image2,
          date:'17/05/2025',
        },
        {
          title: " Join the FTD Safari Contest by Melbet and Win a Trip to Kenya!",
          content:
            "Dear Partners, we have fantastic news for you! Melbet is launching an exciting contest called FTD Safari, promising a thrilling competition for leadership among our partners. Want to not only boost your earnings but also embark on an..",
            date:'5/02/2025',
          image: image3,
        },
        {
          title: "What Happened in Bangkok? A Review of Our Grand Party",
          content:
            "In December, we organized one of the brightest and most unforgettable events in Melbets history - the Hangover Party in Bangkok! What was our goal? To surprise, shock, and even push people slightly out of their comfort zones. Yes,",
            date:'10/02/2025',
          image: image4,
        },
        {
          title: "Grand Plans of Melbet: Which Conferences We will Attend in the First Half of 2025",
          content:
            "We’re excited to share the latest news about the upcoming conferences our Melbet team will attend in the first half of 2025. We carefully plan our calendar to stay ahead of industry trends,",
            date:'15/02/2025',
          image: image5,
        },
        {
          title: "Changes in Melbets Identity: A New Color and a New Level of Engagement",
          content:
            "We’re excited to share some news about how the Melbet brand is evolving. Recently, we introduced a new color to our brand identity, and that’s just the beginning of the changes. Let’s",
            date:'15/02/2025',
          image: image6,
        },
      ];
    return (
        <div className='bg-commonYellow'>
            <div className='py-4 flex justify-center'>
                <h3 className='text-5xl font-bold'>NEWS</h3>
            </div>
        <div className='flex justify-center '>
            <div className=" flex lg:flex-wrap  md:flex-wrap flex-wrap  py-4 gap-2 justify-center  text-black">
        {data.map((data, index) => (
          <div key={index} className=" md:p-4 border  border-black p-6 lg:p-6 w-72 lg:h-[480px] h-[450px] md:w-80 lg:w-[360px] md:h-[450px]  rounded-2xl relative">
            <img src={data.image} alt="" className="!md:w-[50%]!lg:w-auto" />
            <div className="pt-8  ">
              <h3 className="md:text-xl text-xl block lg:text-2xl  font-bold">{data.title}</h3>
              <p className="text-sm py-2 font-medium">{data.content}</p>
             
            </div>
            <p className="text-sm absolute bottom-0 left-1/5   py-2 font-medium">{data.date}</p>
          </div>
        ))}
      </div>
        </div>
        </div>
    );
};

export default News;