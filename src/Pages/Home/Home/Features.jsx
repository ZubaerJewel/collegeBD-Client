import { FaBitcoin, FaGraduationCap, FaReact } from 'react-icons/fa';
import { BsPeopleFill } from "react-icons/bs";


const Features = () => {
    return (
        <div className="my-20 px-10 py-14 text-white bg-sky-950">
            <div className='grid md:grid-cols-2 gap-5'>
                {/* text */}
                <div>
                <div className='flex items-center text-orange-500'>
           <span className='text-2xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-base uppercase font-semibold">BEst of best.</h2>
            </div>
            <h2 className='text-4xl uppercase mt-3'>our best features</h2>
            <p className='my-5 font-medium'> Explore our diverse range of academic courses, designed to provide comprehensive knowledge and practical skills in various disciplines.</p>
            {/* one */}
            
            <div className='flex'>
               <div className=''> 
               <span className='text-4xl text-orange-500'><BsPeopleFill></BsPeopleFill></span></div>
                <div className='ml-10'>
                    <h4 className='text-3xl my-3 font-bold'>Skilled Teachers</h4>
                    <p className='text-xl my-2'>Our skilled teachers are experts in their fields, passionate about teaching, and possess excellent communication skills.</p>
                </div>
            </div>
            {/* one */}
            {/* two */}

            <div className='flex'>
               <div className=''> 
               <span className='text-4xl text-orange-500'><FaBitcoin></FaBitcoin></span></div>
                <div className='ml-10'>
                    <h4 className='text-3xl my-3 font-bold'>Affordable Courses</h4>
                    <p className='text-xl my-2'>Our college offers a wide range of affordable courses, making quality education accessible to all students without compromising on excellence.</p>
                </div>
            </div>
            {/* two */}

            {/* three */}

            <div className='flex'>
               <div className=''> 
               <span className='text-4xl text-orange-500'><FaReact></FaReact></span></div>
                <div className='ml-10'>
                    <h4 className='text-3xl my-3 font-bold'>Efficient & Flexible</h4>
                    <p className='text-xl my-2'>Our college provides efficient and flexible learning options, empowering students to tailor their education and achieve their academic goals.</p>
                </div>
            </div>
            {/* Three */}

                </div>
                {/* text */}

                {/* img */}
                <div className='h-full'>
                    <img className='h-full' src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=360&t=st=1690021905~exp=1690022505~hmac=d9e93a550e4522b33c11e75f4afd6a1ccc3864d1faabc1d7b962ea4c898d2d3f" alt="" />
                </div>
                {/* img */}
            </div>

            
        </div>
    );
};

export default Features;