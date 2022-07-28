import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const ProtectedRoutes = () => {
    let auth = JSON.parse(localStorage.getItem('name'))
    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes