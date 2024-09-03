import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";

function About() {
  return (
    <section id='about'>
        <div className='wrapper'>
            <h3>About</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.</p>
            
            
            <h4>Programming Language</h4>
            <div className='skills'>
            <FaHtml5 /><FaPhp /><FaLaravel /><RiReactjsFill /><SiMysql /><FaCss3Alt /><DiJavascript /><FaPython />

            </div>
        </div>
        
        </section>
  )
}

export default About