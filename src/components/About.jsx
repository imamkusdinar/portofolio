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
            <p>Saya adalah seorang programmer berpengalaman dengan latar belakang yang kuat dalam pengembangan perangkat lunak dan pemecahan masalah teknis,</p>
            <p>saya memiliki keterampilan yang luas dalam berbagai bahasa pemrograman dan teknologi. Saya telah berkontribusi pada berbagai proyek, mulai dari aplikasi web dan mobile hingga sistem berbasis cloud dan perangkat lunak desktop.</p>
            <p>Dengan keahlian dalam Python, JavaScript, Java, C++, saya mampu merancang dan mengimplementasikan solusi yang efisien dan scalable. Pengalaman saya dalam React, Django, Node.js, AWS memungkinkan saya untuk membangun aplikasi yang responsif 
            dan dapat diandalkan.</p>
            <p>Saya sangat terampil dalam analisis kebutuhan pengguna, perancangan arsitektur sistem, dan pengujian perangkat lunak. Selain itu, saya memiliki keterampilan dalam bekerja dalam tim lintas disiplin dan berkomunikasi dengan jelas</p>
            <p>dengan berbagai pemangku kepentingan untuk memastikan proyek memenuhi tujuan dan tenggat waktu.</p>
            Keahlian saya meliputi:
            <p>Pengembangan Web: Membuat dan mengelola aplikasi web menggunakan HTML, CSS, JavaScript, dan framework terkait.
            Pengembangan Aplikasi Mobile: Mengembangkan aplikasi mobile untuk platform Android dengan Visual Studio Code dan Android Studio.
            Database Management: Mengelola dan mengoptimalkan database menggunakan  MySQL, FireBase .
            DevOps: Mengimplementasikan praktik DevOps untuk otomatisasi dan pengelolaan infrastruktur menggunakan Docker, Kubernetes.
            <p>Pemecahan Masalah: Mengidentifikasi dan menyelesaikan bug serta masalah performa untuk memastikan aplikasi berjalan dengan lancar.
            Saya selalu mencari tantangan baru dan kesempatan untuk mengembangkan keterampilan saya lebih lanjut. Dengan semangat untuk teknologi dan inovasi,</p>
            <p>saya berkomitmen untuk memberikan solusi yang memenuhi dan melampaui ekspektasi klien dan pengguna.</p> </p>        
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