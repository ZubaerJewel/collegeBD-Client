import { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import SingleReview from './SingleReview';

const Review = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getReview')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])

    return (
        <div className='mx-10 my-20'data-aos="zoom-in"
        data-aos-duration="2000">
           <div className='flex items-center text-orange-500'>
           <span className='text-2xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-base uppercase font-semibold">testimonial.</h2>
            </div>
            <h2 className='text-4xl uppercase mt-3'>{"what's"} our student say</h2>

            <div className='grid md:grid-cols-2 gap-5 my-16'>
                {
                    review.map(singleReview=><SingleReview
                    key={singleReview._id}
                    singleReview={singleReview}
                    ></SingleReview>)

                }
            </div>
        </div>
    );
};

export default Review;