import { portofolioList } from "../data/DataPortofolio"


function Portofolio() {
  return (
    <section id="portofolio">
        <div className="wrapper">
            <h3>Portofolio</h3>
            <div className="grid">
               {
                portofolioList.map((item)=>{
                  return(
                    <div className="item" key={item.id}>
                      <a href=""><img src={item.image} /></a>
                  </div>
                  )
                })
               }
               
            </div>
        </div>

    </section>
  )
}

export default Portofolio