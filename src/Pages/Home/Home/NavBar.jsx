import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaGraduationCap } from 'react-icons/fa';

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      toast.success('LOG OUT Successfully')

    })
    .catch(error=>console.log(error))
  }
    const navItem=
    <>
      <div className="flex items-center justify-center ">
        <li className="text-black "> <Link to='/'>Home</Link> </li>           
            <li className="text-black"> <Link to='/colleges'>Colleges</Link> </li> 
            <li className="text-black "> <Link to='/admission'>Admission</Link> </li>

            <li className="text-black font-semibold"> <Link to='/myCollege'>My College</Link> </li>

            </div>
        <div className="justify-end ">
        {user?
           <li onClick={handleLogout} className="ml-30 btn bg-purple-500 hover:rounded-xl">
             Log Out</li>:<li className="ml-3 btn bg-purple-500"> 
             <Link to='/login'>Login</Link> </li>
            }
   
    
   { user && 
                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <div className="avatar">
                    <div className="w-12 rounded-full ml-4">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                </div>
                }
        </div>
        
          
    </>
    return (
        <>
            <div className="navbar bg-purple-900 shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black-300 rounded-box w-52 items-center ">
      {navItem}
        </ul>
    </div>
   <span className="text-4xl text-purple-400 ml-8"> <FaGraduationCap></FaGraduationCap></span>
    <Link to='/'> <span className="btn btn-ghost  md: items-center text-purple-400">College<span className="text-purple-200">BD</span></span></Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
 
</div>
            
        </>
    );
};

export default NavBar;