import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaGraduationCap } from 'react-icons/fa';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showNavItems, setShowNavItems] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('LOG OUT Successfully');
      })
      .catch(error => console.log(error));
  };

  const navItem = (
    <>
      <div className="flex items-center justify-start mr-10">
        <li className="text-purple-400 uppercase"> <Link to='/'>Home</Link> </li>           
            <li className="text-purple-400 uppercase"> <Link to='/colleges'>Colleges</Link> </li> 
            <li className="text-purple-400 uppercase "> <Link to='/admission'>Admission</Link> </li>

            <li className="text-purple-400 uppercase font-semibold"> <Link to='/myCollege'>My College</Link> </li>

      </div>
        <div className=" mb-2 mt-2 mr-5">
        {user?
           <li onClick={handleLogout} className=" btn  bg-purple-500 hover:rounded-xl">
             Log Out</li>:<li className="btn bg-purple-500"> 
             <Link to='/login'>Login</Link> </li>
            }</div>
   
   <div className=" mb-2 mt-2">
   { user && 
                <div className="tooltip  mt-1 tooltip-bottom" data-tip={user.displayName}>
                <div className="avatar">
                    <div className="w-12 rounded-full ml-4">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                </div>
                }
        </div>
        
          
    </>
  );

  const handleNavItemClick = () => {
    // Close the nav items dropdown when clicked
    setShowNavItems(false);
  };

  return (
    <>
      <div className="navbar h-5 bg-purple-900 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setShowNavItems(!showNavItems)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg onClick={() => handleNavItemClick} xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            {showNavItems && (
              <ul tabIndex={0} 
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-purple-800  items-center">
                {navItem}
              </ul>
            )}
          </div>
          <span className="text-4xl text-purple-400 ml-8"> <FaGraduationCap></FaGraduationCap></span>
          <Link to='/'>
            <span className="btn btn-ghost  md: items-center text-purple-400">College<span className="text-purple-200">BD</span></span>
          </Link>
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
