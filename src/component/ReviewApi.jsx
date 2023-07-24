import { toast } from "react-hot-toast";

const ReviewApi = () => {

  const handleReview=(e)=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const message=form.message.value;
    const allReview={name,email,message};
    console.log(allReview);
    fetch('https://college-server-zubaerjewel.vercel.app/addReview',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(allReview)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        toast.success('Thanks For Your Review')
        form.reset()
    }

    })
  }
  return (
    <div className="my-10 mx-10">
      <h2 className="uppercase text-center text-3xl mt-14 mb-10">Please Give Us Some review</h2>
      <div className="bg-purple-300 px-10 py-20 rounded-xl h-full mx-auto shadow-2xl md:w-1/2 mb-16">

     <form onSubmit={handleReview}>
     <div className="form-control w-full">
      <label className="label">
        <span className="label-text">What is your name?</span>
      
      </label>
      <input type="text" placeholder="Type here" name="name" 
      className="input input-bordered w-full max-w-xs" required />
    </div>

      <div className="form-control w-full ">
      <label className="label">
        <span className="label-text">What is your Email?</span>
      
      </label>
      <input type="email" placeholder="Type here" name="email" className="input input-bordered w-full max-w-xs" required/>
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Message</span>
      </label>
      <textarea className="textarea textarea-bordered h-24"name="message" placeholder="Your Text"required></textarea>
    
    </div>

    <button type="submit" className="btn btn-accent mt-5">Submit</button>
            
     </form>


      </div>
      
    </div>
  );
};

export default ReviewApi;