import image1 from '../../assets/decor-1.031d8081adf965f423ffcbd41272f37a.png';
import image2 from '../../assets/screen-1.41121f235c5d48bbf2b1a79c48ad8579.png';
import image3 from '../../assets/decor-2.3d298833e88f6f78c01ebe8a390dd72f.png';
import image4 from '../../assets/screen-2.99902415f816da909c56b53752a2e649.png';
import image5 from '../../assets/decor-3.3d9fa7c6fe9cfe85fa0e2a68250bdea8.png';
// import image6 from '../../assets/screen-3.78799e2e1f096e9d9d1e74a2348ca9e2.png';
import image7 from '../../assets/decor-4.f030ad9cd07195f4d93903106a10ce82.png';
import image8 from '../../assets/screen-4.a9d2b8018c00ced1a08c8f998cdfac78.png';
import image9 from '../../assets/decor-5.c7c1b022164cfade59eba41c30f3ce89.png';
import image10 from '../../assets/screen-5.94fef414fc5331521e01a1e9ce8b4ee7.png';
import image11 from '../../assets/decor-6.bb19660519b1f1b95a7186d5c7b9406c.png';
import image12 from '../../assets/screen-6.94fef414fc5331521e01a1e9ce8b4ee7.png';
import image13 from '../../assets/decor-7.6f97bbd85ea75cdfaed07254a599b400.png';
import image14 from'../../assets/screen-7.a2c7f19b259087b6b1197348ff9c1872.png';
import { PiTelegramLogoLight } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { useEffect } from 'react';
const Instruction = () => {
     const data = [
            {
              title: "Get ahead with Melbet Partners easily and start earning with a top affiliate program",
              content: "Congratulations, you've joined the Melbet affiliate program! It's super easy to get to grips with.Here's a quick guide to make sure you land on your feet.",
              image: image1
            },
            {
              title: "step 1 – Main menu of My Account ",
              content: "The main menu is the first page you see when you log into your account. You can imagine this as being your head office. Here, you can see the summary of your work, income reports and other data. You can also download the Android app, request help from your assistant, and go to different parts of your account.Now, let's move on to the next step and look at how you can add your site to our affiliate program",
              image: image2
            },
            {
              title: " step 2 – adding a website",
              content: "",
              image: image3
            },
            {
              title: "",
              content: "Want to add your site to our affiliate program? Then just press Add site in the side menu. Next, enter the link to your site, and tell us its language, and what the site category is. Simple, right?",
              image: image4
            },
            {
              title: "step 3 – access to promotional materials",
              content: "",
              image: image5
            },
            // {
            //   title: "step 3 – access to promotional materials",
            //   content: "",
            //   image: image6
            // },
            {
              title: "",
              content: "Melbet Partners recommends only using official graphics and texts to promote our product.You can get them by:requesting materials via our support team,subscribing to official Melbet social media pages, orgoing to the Marketing Tools section of the Promo Materials page Choose your preferred format (e.g., banner), and take a look at the materials available.Now you've got banners and other promo materials, what's next?",
              image: image7
            },
            {
              title: "step 4 – creating affiliate links",
              content: "",
              image: image8
            },
            {
              title: "",
              content: "Your affiliate link contains a unique identifier that'll ensure that all the customers you refer are assigned to you.You can create your affiliate link in the Affiliate Links section. Here you'll find a few settings, which you can get the hang of very easily.",
              contentTwo: "Landing page - this should contain a link to the Melbet promo that you are advertising. For example, if you're advertising the Risk Free Bet promotion, then you'll need this link: https://melbet.com/promotions/no_risk_bet/. However, you only need the second part of the link, without the melbet.com domain. SubID: Make sure to add a SubID to the link - this identifier will be very useful! Example: you are advertising a promotion for the Roland-Garros tournament. You can register the SubID roland_garros and then links leading from the Roland-Garros banner will be marked as roland_garros in your statistics. This will allow you to track which promotional campaigns are popular with your audience and which are not.You can also improve your results by using promotional codes.",
              image: image9
              
            },
            {
              title: "step 5 – generating promo codes",
              content: "",
              image: image10
            },
            {
              title: "",
              content: "Promo codes allow customers to get more bonuses when they register, which makes your offer more attractive to your audience.The settings in the Promo Codes section are simple. Just choose your site and what you want the promo code to be called. Try and make it simple and memorable.There's not long to go now, there's just one more tool to look at.",
              image: image11
            },
            {
                title: "step 6 – withdrawals",
                content: "",
                image: image12
              },
              {
                title: "",
                content: "Now, let's look at the best part of working with Melbet Partners. To request your first withdrawal, you need to contact your personal manager. After that, the process will be carried out automatically, and you'll get the money you've earned sent to you every week. The minimum amount you can withdraw is $30. Congratulations! Now you're all set to start earning with Melbet Partners! Start your journey to success right now and get income from partnering with a leading betting company.",
                image: image13
              },
              {
                title: "step 7 – reports",
                content: "",
                image: image14
              },
              {
                title: "",
                content: "Affiliate program statistics are updated every hour, and affiliate commission amounts are calculated the next day.On the main page of your account you can see some quick statistics, including: Amounts available for withdrawal Yesterday's commission Current month Previous 30 days and total You can see more detailed statistics in the separate Reports section: Short summary – here you can find overall statistics for a set period. You can also generate reports for sites and materials individually.",
              },
          ];
          useEffect(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
          }, []);
    return (
        <div className='bg-commonYellow overflow-hidden'>

        
        <div className='mx-auto flex flex-col justify-center px-[2%] nd:px-0 lg:px-0 md:max-w-2xl   lg:max-w-3xl text-black '>
            {data.map((data,index)=>(
                <div key={index}>
                    
                    <h3 className='text-2xl md:text-2xl lg:text-6xl py-4 font-bold uppercase'>{data.title}</h3>
                    
                    
                    <p className='py-4 md:text-sm lg:text-base'>{data.content}</p>
                    <div className='flex justify-center'>
                    <img src={data.image} alt="" />
                    </div>
                    
                    <p>{data.contentTwo}</p>
                </div>
            ))}
            <div className='flex flex-col py-6 space-y-4 font-bold items-center'>
            <h3 className='lg:text-7xl text-5xl md:text-7xl font-bold'>CONTACTS</h3>
            <p className='text-xs md:text-base lg:text-base px-[3%] md:px-0 lg:px-0'>We will be delighted to help you with any questions you may have regarding our affiliate program.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-20 lg:gap-20 md:text-xl lg:text-3xl md:justify-items-center  lg:justify-items-center'>
                <span className='flex gap-4 items-center'>< MdOutlineMessage className='border w-8 h-8 p-1 border-black ' />
               support@melbetaffiliates.com</span>
                <span className='flex gap-4  items-center'><PiTelegramLogoLight className='border w-8 h-8 p-1 border-black my-2' />
                @melbet_payments</span>
            </div>
        </div>
        </div>
        
        </div>
    );
};

export default Instruction;