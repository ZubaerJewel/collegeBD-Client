import { toast } from "react-hot-toast";
import { FaCalendarAlt, FaSearch, FaStar } from "react-icons/fa";

const SingleColleges = ({single}) => {
    const DetailsBtn=()=>{
        toast.success('Coming sooon')
    }
    const{admission_date,college_image,college_name,college_rating,research_count}=single
    return (
        <div className="mt-16"data-aos="zoom-in"
        data-aos-duration="2000">
                    <div className="card w-full text-purple-400 bg-purple-800 shadow-xl">
        <figure><img className="h-56 w-full hover:scale-125 duration-500" src={college_image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-center">{college_name}</h2>
            <p className="my-2 flex items-center">Admission Date: {admission_date} <span className="ml-2"><FaCalendarAlt></FaCalendarAlt></span></p>
            <div className="flex flex-col justify-start my-5 ">
                <div className="flex items-center">
                    <h2>Rating: {college_rating}</h2>
                    <span className="ml-2 text-yellow-400"><FaStar></FaStar></span>

                </div>
                <div className="flex items-center">
                    <h2>Research: {research_count}</h2>
                  <span className="ml-2">  <FaSearch></FaSearch></span>

                </div>
            </div>
            <div className="card-actions justify-end">
            <button onClick={DetailsBtn} className="btn bg-purple-500">Details</button>
            </div>
        </div>
        </div>  
            
        </div>
    );
};

export default SingleColleges;