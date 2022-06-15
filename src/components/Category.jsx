import React, { useState } from 'react'
import {Link } from '@chakra-ui/react'
  import navcss from "./navcss.module.css";



const Category = () => {





// const [fix, setFix] = useState(false);

// function setFixed() {
//   if (window.scrollY >= 50) {
//     setFix(true);
//   } else {
//     setFix(false);
//   }
// }

// window.addEventListener("scroll", setFixed);

  return (
    <div>
        
        <nav className="navbar  navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse wrapper"
            id="navbarSupportedContent"
          >
            {/* first box start from here */}

            <div className={navcss.firstdiv}>
              <form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      SHOP
                    </Link>
                  </li>
                 </ul >


                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Learn">
                      LEARN
                    </Link>
                  </li>
                  </ul>
                  {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SHOP
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item"to="/">Action</Link></li>
            <li><Link className="dropdown-item"to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item"to="/">Something else here</Link></li>
          </ul>
        </li>



        <li className="nav-item dropdown">
          <Link  to="/Learn" className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false" >
            LEARN
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item"to="/Learn">Action</Link></li>
            <li><Link className="dropdown-item"to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item"to="/">Something else here</Link></li>
          </ul>
        </li>



        





        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"to="/Grow" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GROW
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item"to="/">Action</Link></li>
            <li><Link className="dropdown-item"to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item"to="/">Something else here</Link></li>
          </ul>
        </li> */}





        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Grow">
                      GROW
                    </Link>
                  </li>
                </ul>
              </form>
            </div>

            </div>
        </div>
      </nav>
 
</div>
  )
}

export default Category