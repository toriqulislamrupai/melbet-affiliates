import aboutImage from '../../assets/roulette.a1b009b78e264889a2d281ba11777c78.png';
import melbetImage from '../../assets/fishki.4663d1883d8677868e5f73d61d98c841.png';
import melbetHistoryImage from '../../assets/hexa.4aa84359b7c654191959495b01a80a04.png';
import teamImage from '../../assets/slot.e7a5ca1e567e536f157961698b3db035.png';
import achievementImage from '../../assets/ball.55da785a3f973998ef4c88566b229c06.png';

const AboutUs = () => {
   
       const data = [
        {
          title: "ABOUT US",
          content: "Melbet is a rapidly growing betting company that provides exceptional opportunities for both affiliates and sports fans. With a user-friendly interface, intuitive navigation, competitive odds and a wide selection of betting markets across multiple sports, Melbet caters to the needs of even the most avid bettors. Moreover, Melbet offers a comprehensive affiliate program with many benefits, including impressive conversion rates, generous commission, and various payment options to suit your preferences.",
          image: aboutImage
        },
        {
          title: "MELBET'S HISTORY",
          content: "The company began its journey in 2012, establishing itself as a reputable player in the industry. Operating under Curaçao Egaming License No. 8048/JAZ2020-060, it strives to provide a safe and transparent gaming experience. In April 2016, Melbet proudly introduced its affiliate program, welcoming new affiliates with an attractive standard revenue share of 25%. As the company has prospered, so have its affiliates, and today, these valued partners have the incredible opportunity to earn revenue share of up to 65%! This remarkable growth and success is a testament to Melbet's commitment to building strong and mutually beneficial partnerships.",
          image: melbetImage
        },
        {
          title: " MELBET'S VALUES AND MISSION",
          content: "At Melbet, we place the highest priority on providing a safe environment for everyone involved. We have strict policies on responsible gaming, data security and customer support. We strive to make betting and gaming on our platform simple, safe and secure.We value transparency and prioritize innovation to improve the customer experience. We also take care of our affiliates by offering impressive conversion rates, competitive commission rates, regularly updated promotional materials and easy withdrawals. Our affiliate program encourages collaboration and provides lifetime commission for each affiliate. Join us at Melbet for excellent terms and a mutually beneficial partnership.",
          image: melbetHistoryImage
        },
        {
          title: "OUR TEAM",
          content: "We have assembled a group of experts who will support you every step of the way, with experienced marketers, talented designers, creative copywriters and efficient personal assistants. With 24/7 customer support, you can count on us to help you whenever you need it. Our team works tirelessly to ensure maximum profitability for your business.A dedicated support assistant will be on hand to provide you with personalized assistance and answer any concerns or questions you may have. In addition, our team offers valuable advice on marketing strategy to improve your performance and achieve your goals.Our platform gives you exclusive access to a diverse collection of regularly updated promotional materials. Plus, you'll benefit from a comprehensive dashboard that makes it easy to track clients, generate reports, and analyze valuable data. This will keep you at the forefront of your industry. Rest assured, our team is dedicated to your success and will do everything possible to help you achieve your goals.",
          image: teamImage
        },
        {
          title: "OUR ACHIEVEMENTS",
          content: "We are pleased to announce that Melbet has received the prestigious EVENTUS Award for Best Online Gambling Operator of 2023. This award is a testament to our continued growth, development and commitment to providing the highest quality user experience. It recognizes our overall commercial success, innovative thinking and commitment to excellence. The evaluation criteria included market penetration, expansion strategies, differentiation, brand quality and cost. This achievement strengthens our leadership position and demonstrates the exceptional standard of our services in the online gambling industry.",
          image: achievementImage
        }
      ];
    return (
        <div className='bg-commonYellow'> 
           <div className=''>
            {data.map((data,index)=>(
                <div className={`flex ${index === 1 || index === 3 ? "md:flex-row-reverse lg:flex-row-reverse" : "md:flex-row lg:flex-row"} flex-col  justify-center px-4 items-center  mx-auto max-w-5xl`} key={index}>
                    
                    <div className='md:py-[5%]'>
                    <h2 className='font-bold text-3xl lg:text-5xl'>{data.title}</h2>
                    <p className='py-4'>{data.content}</p>
                    </div>
                    <img src={data.image} alt=""className='md:w-[40%] lg:w-[50%]' />
                </div>
            ))}
            </div> 
        </div>
    );
};

export default AboutUs;