import { useContext } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { toast } from 'react-hot-toast';

const SingleCard = ({item}) => {
  const {user}=useContext(AuthContext);
 

  const handleDetails=()=>{
    if(!user){
     toast.error('Invalid User Please Login first')
    }
  }
 
    const {admissionDates,collegeImage,collegeName,_id,researchHistory,sports,events}=item
    return (
        <div data-aos="zoom-in"
        data-aos-duration="2000">
            <div className="card w-full text-purple-400 bg-purple-800 font-semibold shadow-2xl">
  <figure><img className="h-56 hover:scale-150 transform duration-1000" src={collegeImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title uppercase text-center my-2">{collegeName}</h2>
    <p className='text-center '>Admission Dates</p>
   <div className="flex items-center my-1 gap-2">
   <FaCalendarAlt></FaCalendarAlt> <p>{admissionDates.start_date}</p>
    <FaCalendarAlt></FaCalendarAlt><p>{admissionDates.end_date}</p>
   </div>
   <p><span className=' my-1'>Upcoming-Event</span>: {events.name}</p>
   <p><span className=' my-1'>Research History</span>:{researchHistory.title}</p>
   <p><span className='my-1'>Sports</span>: {sports.name}</p>


    <div className="card-actions justify-end"> 
    
    { user?
      <Link to={`/card/${_id}`} className=''>
        <button className="btn text-white bg-purple-500 hover:bg-purple-300">Details
        </button></Link>:<Link to='/login'>
          <button onClick={handleDetails} 
          className="btn text-white bg-purple-500 hover:bg-purple-300">Details</button>
          </Link>}
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleCard;