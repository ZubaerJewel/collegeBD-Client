import { useLoaderData } from "react-router-dom";

const PerCardInfo = () => {
    const loadData=useLoaderData()
   
    return (
        <div className="grid md:grid-cols-2 mt-16 mb-20 mx-5 gap-5 items-center">
            <div className="h-full">
            <img className="w-full h-full rounded-2xl items-center" src={loadData.collegeImage} alt="" />
            </div>


            <div>
                <h2 className="text-5xl text-center uppercase mb-10 text-orange-500">{loadData.collegeName}</h2>
                <h3 className="text-2xl font-semibold text-center my-5 uppercase ">Admission Date</h3>
               <div className="flex gap-10 text-xl uppercase justify-center my-5 rounded-xl p-2 bg-sky-700 text-white">
               <h3>start: {loadData.admissionDates.start_date}</h3>
                <h3>ends: {loadData.admissionDates.end_date}</h3>
               </div>

                <h3 className="text-2xl font-semibold text-center my-5 uppercase ">Events</h3>
                <div className="grid md:grid-cols-2 uppercase justify-center gap-5 my-5 rounded-xl p-2 bg-sky-700 text-white">
                <h3>events-name:{loadData.events.name}</h3>
                <h3>Location: {loadData.events.location}</h3>
                <h3>Date: {loadData.events.date}</h3>
                </div>

                <h3 className="text-2xl font-semibold text-center my-5 uppercase ">Research-History</h3>
               <div className="grid md:grid-cols-2 uppercase justify-center my-5 gap-3 rounded-xl p-2 bg-sky-700 text-white">
               <h3>Title: {loadData.researchHistory.title}</h3>
                <h3>Authors: {loadData.researchHistory.authors}</h3>
                <h3>Journal: {loadData.researchHistory.journal}</h3>
                <h3>Publication_Date: {loadData.researchHistory.publication_date}</h3>
               </div>

                <h3 className="text-2xl font-semibold text-center my-5 uppercase ">sports</h3>
               <div className="grid md:grid-cols-3 uppercase justify-center my-5 gap-3 rounded-xl p-3 bg-sky-700 text-white">
               <h3>sports-name:{loadData.sports.name}</h3>
                <h3>league_titles:{loadData.sports.league_titles}</h3>
                <h3>national_cups:{loadData.sports.national_cups}</h3>
               </div>

            </div>
            
        </div>
    );
};

export default PerCardInfo;