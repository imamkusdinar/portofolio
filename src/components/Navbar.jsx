import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
    const[statusTampil, setStatusTampil] = useState('')
    function tampilMenu(){
        if (statusTampil == '' ){
            setStatusTampil('tampil')
        } else {
        setStatusTampil('')
        }
    }
    return (
      <nav>
          <div className="wrapper">
              <div className="logo">
                  <a href="#">My Portofolio</a>
              </div>
              <button onClick={tampilMenu}><FaBars /></button>
              <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                  <ul><li><a href="#portofolio">Portofolio</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  </ul>
              </div>
          </div>
          </nav>
    )
  }
  
  export default Navbar