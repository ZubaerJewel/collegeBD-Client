import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSingIn}=useContext(AuthContext);
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||'/'

    const handleGoogle=()=>{
        googleSingIn()
        .then(result=>{
            const loggedInUser=result.user
            console.log(loggedInUser)
            toast.success(`Welcome ${loggedInUser?.displayName} You successfully Continue with Google`)
            navigate(from,{replace:true})

        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="md:ml-12 my-5">
               <button onClick={handleGoogle} className="flex items-center"> <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1687147600~exp=1687148200~hmac=31e6481f71ade2a866e9123a4a73e829ca96b4e8b13915340d4e0e99b5bbb20b" alt="" /><span className="font-semibold text-lg font[poppins] ml-5">Continue with Google</span></button>
            </div>
            
        </div>
    );
};

export default SocialLogin;