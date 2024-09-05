import  '../styles/DetailPortofolio.css'
import {portofolioList} from '../data/DataPortofolio'
import { useParams } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function DetailPortofolio() {
  const {id} = useParams();
  const data = portofolioList.find((item)=> item.id === id)
  return (
    <>
    <Navbar />
    <section>
      <div className='wrapper'>
        <img src={data.image} />
      </div>
    </section>
    <Footer />
    </>
  )
}

export default DetailPortofolio