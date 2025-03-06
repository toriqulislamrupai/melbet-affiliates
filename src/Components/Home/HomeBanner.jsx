import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.92860b66869d9b806c562bb423e33c0c.png';

const HomeBanner = () => {
    return (
        <div>
        <div className='grid lg:grid-cols-2 md:ml-auto md:max-w-3xl lg:max-w-none grid-cols-1   lg:justify-items-center px-[2%]  md:justify-items-start overflow-hidden relative'>
            <div className="flex flex-col  lg:px-0 py-[35%]  lg:pt-12 lg:pb-[20%] md:py-20 md:space-y-2 space-y-2  lg:space-y-8 items-center lg:items-start md:items-start  font-extrabold  tracking-wide ">
                <h3 className="text-[40px] text-4xl md:text-3xl lg:text-7xl text-center md:text-left lg:text-left  z-20 ">
                    <span className="text-white hidden lg:block ">GET PAID <br /> FOR</span>
                   
                    <span className="text-white block  lg:hidden ">GET PAID  FOR</span>
                    
                    <span>EVERY <br className='lg:block block md:hidden' /> REFERRED</span>
                    <br />
                    <span className="text-white">CUSTOMER</span>
                </h3>
                <p className="text:text-lg md:text-left text-center lg:text-left lg:text-lg font-medium px-2 lg:px-0 md:px-0">
                This unique program enables you to achieve earnings <br className='hidden md:block lg:block' /> of up to 40% of the profit from customers, along with a <br className='md:block kg:block hidden' /> lifetime revenue share.
                </p>
                <Link to='/registration'>
                <button className="bg-black text-white hover:text-black text-center text-xl lg:text-2xl hover:bg-white px-12 py-4">
                    GET STARTED
                </button>
                </Link>
                
                
            </div>
            <img src={bannerImage} alt="" className='lg:w-[60%] md:w-[60%] absolute -top-1/3 lg:-top-1/6  md:top-0 md:-right-[20%] lg:-right-[10%] ' />
            
        </div>
        
        </div>
    );
};

export default HomeBanner;