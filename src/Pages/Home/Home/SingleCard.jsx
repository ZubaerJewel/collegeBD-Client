import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCard = ({item}) => {
    const {admissionDates,collegeImage,collegeName,id,researchHistory,sports,events}=item
    return (
        <div>
            <div className="card w-full bg-base-200 font-semibold shadow-2xl">
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
    
      <Link to={`/card/${id}`} className=''>  <button className="btn text-white bg-[#ff4d89] hover:bg-[#F63E7B]">Details</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleCard;