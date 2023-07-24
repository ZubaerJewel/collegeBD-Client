import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div>
        
        
        <Carousel>
                <div>
                    <img src="https://img.freepik.com/premium-photo/man-cap-gown-with-background-cubes-words-university-arts-it_561641-1166.jpg?w=740" />
                    <div className="absolute items-center h-full flex transform  left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className='text-white space-y-5 pl-10 w-1/2'data-aos="zoom-in"
           data-aos-duration="2000">
            <h1 className='mt-3 md:text-xl w-full'>Welcome to <span className="text-orange-400">Collegiate Nexus</span></h1>
            <h2 className='md:text-5xl uppercase'>Education is the best key success in life</h2>
          </div>
          </div>
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/student-campus-flat-composition-with-university-building-background-vector-illustration_1284-81556.jpg?w=740&t=st=1690006339~exp=1690006939~hmac=f443ac53db1929b980dabd4c2994f4d2b95b0cbd3d9dc884b08a5fb44cf97236" />
                    <div className="absolute items-center h-full flex transform  left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className='text-white space-y-5 pl-10 w-1/2'>
          <h1 className='mt-3 md:text-xl w-full'>Welcome to <span className="text-orange-400">Collegiate Nexus</span></h1>
            <h2 className='md:text-4xl uppercase'>Education: Igniting minds, fuelling dreams, shaping a boundless tomorrow.</h2>
          </div>
          </div>
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/student-flat-concept-with-young-men-graduation-scene-with-university-campus-background-vector-illustration_1284-81557.jpg?w=740&t=st=1690006523~exp=1690007123~hmac=0f4c6d14c79c96f6b2e242f930fbe2bbae2ba56c57279881012b95a8d14645f0" />
                    <div className="absolute items-center h-full flex transform  left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className='text-white space-y-5 pl-10 w-1/2'>
          <h1 className='mt-3 md:text-xl w-full'>Welcome to <span className="text-orange-400">Collegiate Nexus</span></h1>
            <h2 className='md:text-4xl uppercase'>Empower yourself through education, and the world becomes limitless.</h2>
          </div>
          </div>
                    
                </div>
            </Carousel>
       </div>
    );
};

export default Banner;