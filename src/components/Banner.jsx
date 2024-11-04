import banner from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='w-2/3 z-50 mx-auto rounded-2xl p-2 border bg-[rgba(255,255,255,0.3)] -mt-36'>
           <img className='rounded-2xl' src={banner} alt="" />
        </div>
    );
};

export default Banner;