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
                    <img className='h-full rounded-xl    mt-7' src="https://c8.alamy.com/comp/2G3CPA2/mature-man-in-a-graduation-gown-holding-a-book-outdoors-2G3CPA2.jpg" alt="" />
                </div>
                <div data-aos="zoom-in"
           data-aos-duration="1500" >
               
            <p className='my-5 font-medium'> 
            Remember that each student's perception of the "best" features may vary based on their individual needs and aspirations. Therefore, when considering a college, it's essential to assess how well its features align with your personal goals and aspirations.
            </p>
            {/* one */}
         
            <div className='flex'data-aos="zoom-in"
           data-aos-duration="2000" >
               <div className=''> 
               {/* <span className='text-4xl text-orange-500'><BsPeopleFill></BsPeopleFill></span> */}
               </div>
                <div className='ml-10'>
                    <h4 className='text-3xl my-3 font-bold'>Career Services:</h4>
                    <p className='text-xl my-2'>
                    An exceptional college has a dedicated career services department that assists students in career planning, resume building, interview preparation, and job searches. They conduct workshops and job fairs to connect students with potential employers.
                    </p>
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
                    <h4 className='text-3xl my-3 font-bold'>Outstanding Faculty:</h4>
                    <p className='text-xl my-2'>A college with the best features should have a team of highly qualified and experienced faculty members. These professors and instructors play a vital role in shaping students' knowledge and skills. They are passionate about teaching, engaging, and provide mentorship to help students reach their full potential.</p>
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
                    <h4 className='text-3xl my-3 font-bold'>Supportive Campus Environment:</h4>
                    <p className='text-xl my-2'>
A positive and inclusive campus environment fosters a sense of community among students. The best colleges encourage extracurricular activities, clubs, and student organizations, promoting personal growth, leadership, and social skills.</p>
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