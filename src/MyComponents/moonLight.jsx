import moon from "../pics/moon_lantern_1.avif"
import nathanel from "../pics/Nathanel-Englander.jpg"
const MoonLight = ()=>{
    return (
        <div className="box">
          <img src={moon} alt="moon lantern" />
          <div className="miniBox">
            <h3 moon=''>POPULAR</h3>
            <p>How to Keep Going When You Don't <br />
              Know What's Next</p>
            <span>The future can be scary, but there are ways <br />
              to deal with that fear</span>
            <figure>
              <img src={nathanel} alt="nath" width={200} />
              <div className='figBox'>
                <p className="heading">Nathanel Englander</p>
                <span>yesterday</span>
              </div>
            </figure>
          </div>
        </div>
    )
}
export default MoonLight;