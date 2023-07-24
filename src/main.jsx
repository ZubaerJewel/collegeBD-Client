import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Colleges from './Pages/Colleges/Colleges';
import Admission from './Pages/Admissions/Admission';
import MyColleges from './Pages/MyColleges/MyColleges';
import AuthProvider from './provider/AuthProvider';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import ErrorPage from './component/ErrorPage';
import PerCardInfo from './component/PerCardInfo';
import ReviewApi from './component/ReviewApi';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/colleges',
        element:<Colleges></Colleges>
      },
      {
        path:'/admission',
        element:<Admission></Admission>
      },
      {
        path:'/myCollege',
        element:<MyColleges></MyColleges>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignIn></SignIn>
      },
      {
        path:'/card/:id',
        element:<PerCardInfo></PerCardInfo>,
        loader:({params})=>fetch(`http://localhost:5000/threeCard/${params.id}`)
      },
      {
        path:'/review',
        element:<ReviewApi></ReviewApi>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)