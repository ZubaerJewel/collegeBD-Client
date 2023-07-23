import { toast } from 'react-hot-toast';
import { FaGraduationCap } from 'react-icons/fa';

const Admission = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const subject=form.subject.value;
        const email=form.email.value
        const number=form.number.value;
        const address=form.address.value;
        const date=form.date.value;
        const file=form.file.value;

        const allInfo={name,subject,email,number,address,date,file}
        
        fetch('http://localhost:5000/addPost',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Your Applications Submitted Done')
                form.reset()
            }
        })

        console.log(allInfo)

    }
    return (
        
        <div className="">
              <div className='bg-sky-700 p-5 text-white'>
             
                    <div className='flex justify-center items-center'>
                       <span className='text-5xl text-orange-500'> <FaGraduationCap></FaGraduationCap></span>
                    <h2 className="text-4xl text-center my-5 font-semibold ml-2">Admission</h2>

                    </div>
                    <form onSubmit={handleSubmit} className="mx-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Candidate Name</span>
                </label>
                <input type="text"  name="name" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Subject</span>
                </label>
                <input type="text"  name="subject" className="input input-bordered text-black" required />

            </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Candidate Email</span>
                </label>
                <input type="text" name="email"  className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Candidate Phone Number</span>
                                  
                </label>
                
                <input type="number" name="number"  className="input input-bordered text-black" required />
                
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Address</span>
                </label>
            <input type="text" name="address"className="input input-bordered text-black" required />

            </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Date of Birth</span>
                </label>
            <input type="date" name="date"  className="input input-bordered text-black" required />

            </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-white">Image Field</span>
                </label>
            <input type="file" name="file"  className="" required />

            </div>
            
                </div>
            <div className="form-control mt-6">
                
            < input type="submit" className="btn btn-neutral btn-block mt-4" value="Submit" />
            </div>
                    </form>
            <div className="card-body">
            
            </div>
            </div>
            
        </div>
    );
};

export default Admission;