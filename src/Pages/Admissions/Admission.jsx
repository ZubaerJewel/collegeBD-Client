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
        
        fetch('https://college-server-zubaerjewel.vercel.app/addPost',{
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
              <div className='py-10 text-purple-900'>
             
                    <div className='flex justify-center items-center'data-aos="zoom-in"
           data-aos-duration="2000">
                       <span className='text-5xl text-purple-900'> <FaGraduationCap></FaGraduationCap></span>
                    <h2 className="text-3xl text-center my-5 font-semibold ml-2 uppercase"data-aos="zoom-in"
           data-aos-duration="2000">Admission</h2>
                  </div>
                  <p className="mb-5 text-center md:px-28"data-aos="zoom-in"
           data-aos-duration="2000">Admissions crucial for future education. Opportunities, courses, faculty, resources assessed. Timely preparation and documentation vital. Choose wisely. Plan ahead.</p>
                    <form onSubmit={handleSubmit} className="mx-10"data-aos="zoom-in"
           data-aos-duration="3000">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-purple-900">Candidate Name</span>
                </label>
                <input type="text"  name="name" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-purple-900">Subject</span>
                </label>
                <input type="text"  name="subject" className="input input-bordered text-black" required />

            </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-purple-900">Candidate Email</span>
                </label>
                <input type="text" name="email"  className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-purple-900">Candidate Phone Number</span>
                                  
                </label>
                
                <input type="number" name="number"  className="input input-bordered text-black" required />
                
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text text-purple-900">Address</span>
                </label>
            <input type="text" name="address"className="input input-bordered text-black" required />

            </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text text-purple-900">Date of Birth</span>
                </label>
            <input type="date" name="date"  className="input input-bordered text-black" required />

            </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-purple-900">Image Field</span>
                </label>
            <input type="file" name="file"  className="file-input file-input-bordered w-full max-w-xs text-black" required />

            </div>
            
                </div>
            <div className="form-control mt-6">
                
            < input type="submit" className="btn bg-purple-500  mt-4" value="Submit" />
            </div>
                    </form>
            <div className="card-body">
            
            </div>
            </div>
            
        </div>
    );
};

export default Admission;