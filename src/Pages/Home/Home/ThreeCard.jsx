import { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import SingleCard from './SingleCard';

const ThreeCard = () => {
    const [showCard,setShowCard]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/colleges')
        .then(res=>res.json())
        .then(data=>setShowCard(data))
    },[])
    return (
        <div className='my-20 mx-10'>
            <div className='flex items-center text-orange-500'>
           <span className='text-2xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-base uppercase font-semibold">OUR top three colleges</h2>
            </div>
            <h2 className='text-4xl uppercase mt-3'>our best college</h2>
            <div className='grid md:grid-cols-3 gap-5 mt-16'>
            {
                showCard.map(item=><SingleCard
                key={item.id}
                item={item}
                ></SingleCard>)
            }
            </div>

            
        </div>
    );
};

export default ThreeCard;