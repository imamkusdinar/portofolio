
import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";





function Header() {
  return (
   <header>

   <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Imam Kusdinar</h3>
        <p>Test1 | Test2 | Test3</p>
        <div className='socialMedia'>
            <a href='#'><FaInstagram /></a>
            <a href='#'><FaFacebook /></a>
            <a href='#'><FaTwitter /></a>
            <a href='#'><FaInstagram /></a>
            <a href='#'><FaWhatsapp /></a>
        </div>

    </div>
    </header>
  )
}

export default Header