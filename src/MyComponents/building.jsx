import image from '../pics/building_1.webp'
import person from "../pics/person_1.webp"
const Build = ()=>{
    return (
        <div className="box">
          <img src={image} alt="building"/>
          <div className="miniBox">
            <h3 build=''>DESIGN</h3>
            <p>10 Rules of Dashboard Design</p>
            <span>Dashboard Design Outlines</span>
            <figure>
              <img src={person} alt="" width={200} />
              <div className='figBox'>
                <p className="heading">Munro Alice</p>
                <span>2h ago</span>
              </div>
            </figure>
          </div>
        </div>
    )
}
export default Build;