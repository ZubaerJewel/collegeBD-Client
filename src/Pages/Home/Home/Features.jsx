import {  FaGraduationCap } from 'react-icons/fa';



const Features = () => {
    return (
        <div className="my-20 px-10 py-14 text-purple-900 ">
             <div className='flex justify-center'>
           <span className='text-4xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-4xl  uppercase font-semibold">our best features</h2>
            </div>
            <div className='grid md:grid-cols-2 gap-5' data-aos="zoom-in"
           data-aos-duration="1000" >
                {/* text */}
                <div className='h-full'data-aos="zoom-in"
           data-aos-duration="3000" >
                    <img className='h-full rounded-xl' src="https://img.freepik.com/premium-photo/vertical-portrait-young-man-wearing-graduation-hat-holding-diploma-while-posing-against-greenery-outdoors_236854-30329.jpg?w=360" alt="" />
                </div>
                <div data-aos="zoom-in"
           data-aos-duration="1500" >
               
            <p className='my-5 font-medium'> Explore our diverse range of academic courses, designed to provide comprehensive knowledge and practical skills in various disciplines.</p>
            {/* one */}
            
            <div className='flex'data-aos="zoom-in"
           data-aos-duration="2000" >
               <div className=''> 
               {/* <span className='text-4xl text-orange-500'><BsPeopleFill></BsPeopleFill></span> */}
               </div>
                <div className='ml-10'>
                    <h4 className='text-3xl my-3 font-bold'>Skilled Teachers</h4>
                    <p className='text-xl my-2'>Our skilled teachers are experts in their fields, passionate about teaching, and possess excellent communication skills.</p>
                </div>
            </div>
            {/* one */}
            {/* two */}

            <div className='flex'data-aos="zoom-in"
           data-aos-duration="2000" >
               <div className=''> 
               {/* <span className='text-4xl text-orange-500'><FaBitcoin></FaBitcoin></span> */}
               </div>
                <div className='ml-10'>
                    <h4 className='text-3xl my-3 font-bold'>Affordable Courses</h4>
                    <p className='text-xl my-2'>Our college offers a wide range of affordable courses, making quality education accessible to all students without compromising on excellence.</p>
                </div>
            </div>
            {/* two */}

            {/* three */}

            <div className='flex'data-aos="zoom-in"
           data-aos-duration="2000" >
               <div className=''> 
               {/* <span className='text-4xl text-orange-500'><FaReact></FaReact></span> */}
               </div>
                <div className='ml-10'>
                    <h4 className='text-3xl my-3 font-bold'>Efficient & Flexible</h4>
                    <p className='text-xl my-2'>Our college provides efficient and flexible learning options, empowering students to tailor their education and achieve their academic goals.</p>
                </div>
            </div>
            {/* Three */}

                </div>
                {/* text */}

                {/* img */}
               
                {/* img */}
            </div>

            
        </div>
    );
};

export default Features;