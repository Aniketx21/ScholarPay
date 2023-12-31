import React from 'react'
import { Navigate, useLocation} from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const token = localStorage.getItem("token");
    const location = useLocation();
    
  return token ? children : <Navigate state={location.pathname} replace={true} to={"/login"}/> 
}
