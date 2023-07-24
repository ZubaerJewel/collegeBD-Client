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
          <span className=" flex justify-center items-center text-orange-500"> <FaGraduationCap></FaGraduationCap>  <h2 className="text-xl ml-2">your college</h2></span>
            <h2 className="text-4xl mt-4">my selected Information</h2>
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