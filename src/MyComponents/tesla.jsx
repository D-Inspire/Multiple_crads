import tesla from "../pics/car_one.jpg" 
import met from "../pics/Munro-Alice.jpg"
const Tesla = ()=>{
    return (
        <div className="box">
          <img src={tesla} alt="car" />
          <div className="miniBox">
            <h3 tesla=''>TECHNOLOGY</h3>
            <p>Why is the tesla Cybertruck <br />
              designed the way it is?</p>
            <span>An explanation into the truck's polarising <br />
              design</span>
            <figure>
              <img src={met} alt="" width={200} />
              <div className='figBox'>
                <p className="heading">Munro Alice</p>
                <span>2h ago</span>
              </div>
            </figure>
          </div>
        </div>
    )
}
export default Tesla;