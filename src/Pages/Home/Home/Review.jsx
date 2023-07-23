import { FaGraduationCap } from 'react-icons/fa';

const Review = () => {
    return (
        <div className='mx-10 my-20'>
           <div className='flex items-center text-orange-500'>
           <span className='text-2xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-base uppercase font-semibold">testimonial.</h2>
            </div>
            <h2 className='text-4xl uppercase mt-3'>{"what's"} our student say</h2>
        </div>
    );
};

export default Review;