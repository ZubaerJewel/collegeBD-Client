import { useEffect, useState } from "react";
import SingleColleges from "./SingleColleges";
import { FaGraduationCap } from 'react-icons/fa';



const Colleges = () => {
    const [sixCard,setSixCard]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/sixCollege')
        .then(res=>res.json())
        .then(data=>setSixCard(data))
    },[])
    return (
        <div className="mx-10 my-20">
           {/* title */}
         <div className="uppercase text-center mt-16">
          <span className=" flex justify-center items-center text-orange-500"> <FaGraduationCap></FaGraduationCap>  <h2 className="text-xl ml-2">our popular college</h2></span>
            <h2 className="text-4xl mt-4">visit our more college</h2>
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