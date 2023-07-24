import { FaBook,FaGraduationCap, FaCalendarAlt, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const MySingleCollege = ({singleCollege}) => {
    const {user}=useContext(AuthContext);
    const{address,date,email,name,number,college,subject}=singleCollege;
    const handleReview=()=>{
        if(!user){
            toast.error('Invalid User Please Login first')
           }
    }
// ---------------------------
const [showCard,setShowCard]=useState([]);
useEffect(()=>{
    fetch('https://college-server-zubaerjewel.vercel.app/sixCollege')
    .then(res=>res.json())
    .then(data=>setShowCard(data))
},[])
    return (
        <div className="mt-8"data-aos="zoom-in"
         data-aos-duration="2000">
            <div className="md:card w-full h-full bg-base-300 shadow-2xl hover:bg-purple-300 duration-500">
        

         
      
     
        <div className="card-body">
            <h2 className="card-title">Name : {name}</h2>
            <div className=" mb-2 mt-2">
   { user && 
               
                <div className="">
                    <div className="w-500  ml-4">
                        <img src={user?.photoURL} />
                    </div>
               
                </div>
                }
        </div>
            <div className="md:flex gap-10 my-3">
                
                <span className="flex items-center font-semibold gap-1">College Name: 
                <span className="text-purple-500 text-4xl"><FaGraduationCap></FaGraduationCap></span>{college}</span>
            </div>
            <div className=" mb-2 mt-2">
   { showCard.map(item => 
    <div className="" key={item.id}>
         <div>
      {item.college_name === college ? <div className="w-500  ml-4">
        <img src={item?.college_image} />
    </div> : <p></p>}
    </div>
    

</div>

   )
               
               
                }
        </div>
            <div className="md:flex gap-3 my-5">
                <h2 className="">Contact Information:-</h2>
                <span className="font-semibold md:flex items-center"><AiOutlineMail></AiOutlineMail></span>{email}
               <span className="font-semibold items-center md:flex"><BiLocationPlus></BiLocationPlus></span>{address}
                <span className="font-semibold md:flex items-center"><FaPhone></FaPhone></span>{number}
            </div>

            <div className="md:flex gap-10 my-3">
                <span className="md:flex items-center gap-1 font-semibold">Admission Date: <span className="text-purple-500"><FaCalendarAlt></FaCalendarAlt></span>{date}</span>
                <span className="flex items-center font-semibold gap-1">Subject: <span className="text-purple-500"><FaBook></FaBook></span>{subject}</span>
            </div>
            <div className="card-actions justify-end">
           {user?<Link to='/review'><button className="btn bg-purple-800 text-purple-300">Review</button></Link>:<Link to='/login'><button onClick={handleReview} className="btn btn-primary">Review</button></Link>}
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default MySingleCollege;