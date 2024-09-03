
import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function Header() {
  return (
   <header>

   <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Imam Kusdinar</h3>
        <p>Programmer | Networking | Data Analyst | Content Creator </p>
        <div className='socialMedia'>
            <a href='#'><FaInstagram /></a>
            <a href='#'><FaFacebook /></a>
            <a href='#'><FaTwitter /></a>
            <a href='#'><FaYoutube /></a>
            <a href='#'><FaWhatsapp /></a>
        </div>

    </div>
    </header>
  )
}

export default Header