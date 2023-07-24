import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGraduationCap } from "react-icons/fa";
import MySingleCollege from "./MySingleCollege";


const MyColleges = () => {
    const{user}=useContext(AuthContext);
    const [myCollege,setMyCollege]=useState([]);

    const url=`http://localhost:5000/allPost?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMyCollege(data) 
        })
    },[url])
   
    return (
        <div className="mx-10 my-20"data-aos="zoom-in"
        data-aos-duration="2000">
           <div className="uppercase text-center mt-16">
           <div className='flex justify-center'>
           <span className='text-4xl mr-1'> <FaGraduationCap></FaGraduationCap></span>
            <h2 className="text-4xl  uppercase font-semibold">my selected Information</h2>
            </div> 
         </div>

         <div className="md:grid  gap-5 mx-auto mt-10 my-5">
            {
                myCollege.map(singleCollege=><MySingleCollege
                key={singleCollege._id}
                singleCollege={singleCollege}
                ></MySingleCollege>)
            }
         </div>
            
        </div>
    );
};

export default MyColleges;