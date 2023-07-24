import { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import SingleCard from './SingleCard';

const ThreeCard = () => {
    const [showCard,setShowCard]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/threeCard')
        .then(res=>res.json())
        .then(data=>setShowCard(data))
    },[])
    return (
        <div className='my-20 mx-10'data-aos="zoom-in"
        data-aos-duration="1000">
             <div className='flex justify-center'>
           <span className='text-4xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-4xl  uppercase font-semibold">OUR top three colleges</h2>
            </div>
            
            <h2 className='text-4xl uppercase mt-3'>our best college</h2>
            <div className='grid md:grid-cols-3 gap-5 mt-16'>
            {
                showCard.map(item=><SingleCard
                key={item._id}
                item={item}
                ></SingleCard>)
            }
            </div>

            
        </div>
    );
};

export default ThreeCard;