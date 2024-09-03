
import portoFolio1 from "../assets/portfolio1.png"
import portoFolio2 from "../assets/portfolio2.png"
import portoFolio3 from "../assets/portfolio3.png"
import portoFolio4 from "../assets/portfolio4.png"
import portoFolio5 from "../assets/portfolio5.png"
import portoFolio6 from "../assets/portfolio6.png"

function Portofolio() {
  return (
    <section id="portofolio">
        <div className="wrapper">
            <h3>Portofolio</h3>
            <div className="grid">
                <div className="item">
                    <a href="#"><img src={portoFolio1} /></a>
                    <a href="#"><img src={portoFolio2} /></a>
                    <a href="#"><img src={portoFolio3} /></a>
                    <a href="#"><img src={portoFolio4} /></a>
                    <a href="#"><img src={portoFolio5} /></a>
                    <a href="#"><img src={portoFolio6} /></a>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Portofolio