import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const SingleReview = ({singleReview}) => {
    const {name,message}=singleReview;
    return (
        
           <div className="card text-purple-300 bg-purple-600 hover:scale-105 duration-1000 hover:bg-purple-800 shadow-2xl"data-aos="zoom-in"
           data-aos-duration="3000">
    <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-lg mt-3"> <span className="  text-4xl"><FaQuoteLeft></FaQuoteLeft></span>{message} <span><FaQuoteRight className="text-4xl"></FaQuoteRight></span></p>
    </div>
    </div>
            
        
    );
};

export default SingleReview;