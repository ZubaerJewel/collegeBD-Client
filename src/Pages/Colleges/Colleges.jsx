import { useEffect, useState } from "react";
import SingleColleges from "./SingleCollege";
import { FaGraduationCap } from 'react-icons/fa';



const Colleges = () => {
    const [sixCard,setSixCard]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/sixCollege')
        .then(res=>res.json())
        .then(data=>setSixCard(data))
    },[])
    return (
        <div className="mx-10 my-20"data-aos="zoom-in"
        data-aos-duration="1500">
           {/* title */}
           <div className='flex justify-center'>
           <span className='text-4xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-4xl  uppercase font-semibold">visit our more college</h2>
            </div> 
           
           {/* title */}
           <div className="grid md:grid-cols-3 gap-5">
            {
                sixCard.map(single=><SingleColleges
                key={single.id}
                single={single}
                ></SingleColleges>)
            }

           </div>
        </div>
    );
};

export default Colleges;