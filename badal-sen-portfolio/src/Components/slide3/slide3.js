import "./slide3.css"
import english_vidyapith from "../images/english-vidyapith.png";

export const Slide3 = () => {
  
  return(
    <div className="slide3">
      <div className="text-div">
        <h1>Follow us on Youtube</h1>
        <p>For daily youtube live Classes</p>
        <button>Subscribe</button>
      </div>
      <div className="img-div">
        <div className="overlay"></div>
        <img src={english_vidyapith} alt="english-vidyapith" />
      </div>
    </div>
  )
}