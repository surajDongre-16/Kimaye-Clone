// import React, { useContext } from 'react'
// import { LocContext } from '../ContextApi/LocationAuth'
// import { Navigate, useLocation } from 'react-router-dom'

// const LocRequiredAuth = ({children}) => {
//     const {isTry}=useContext(LocContext)
//     const {pathname} =useLocation()
//     // console.log(location)
   

//     if(isTry){
//         return children
//     }
//     else{
//         return <Navigate to="/Location"  state={{from:pathname}} replace/>
//     }
// }

// export default LocRequiredAuth