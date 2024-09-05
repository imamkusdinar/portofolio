import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { SiMikrotik } from "react-icons/si";
import { SiArduino } from "react-icons/si";


function About() {
  return (
    <section id='about'>
        <div className='wrapper'>
            <h3>About</h3>
            <p>Saya adalah seorang programmer berpengalaman dengan keahlian pemrograman PHP, Python, JavaScript, Java, Laravel, ReactJS, MySQL. 
            Saya ahli dalam membangun aplikasi web dan mobile yang efisien serta solusi perangkat lunak yang scalable.
            Saya berpengalaman dengan berbagai teknologi. 
            Terampil dalam analisis masalah, pengembangan kode yang bersih,
            dan bekerja dalam tim untuk mencapai tujuan proyek. 
            Saya selalu bersemangat untuk setiap tantangan baru dan inovasi teknologi.</p>      
            <h4>Programming Language</h4>
            <div className='skills'>
            <FaHtml5 /><FaPhp /><FaLaravel /><RiReactjsFill /><SiMysql /><FaCss3Alt /><DiJavascript /><FaPython /><SiArduino />

            </div>
            
            <h4>Networking Skills</h4>
            <div className='skills'>
            <SiCisco /> <SiMikrotik />


            </div>
        </div>
      
        </section>
  )
}

export default About