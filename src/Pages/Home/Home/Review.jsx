import { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import SingleReview from './SingleReview';

const Review = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://college-server-zubaerjewel.vercel.app/getReview')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])

    return (
        <div className='mx-10 my-20'data-aos="zoom-in"
        data-aos-duration="2000">
           <div className='flex justify-center'>
           <span className='text-4xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-4xl  uppercase font-semibold">{"what's"} our student say</h2>
            </div>
          

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