import "./slide2.css";
import badal from "../images/badal-1-transparent.png";

export const Slide2 = () => {
  return (
    <div className="slide2">
      <div className="img-div">
        <img src={badal} alt="badal" />
      </div>
      <div className="text-div">
        <p>Test Papers practice for Madhyamik Exam</p>
        <p>Test Papers practice for H.S. Exam</p>
      </div>
    </div>
  );
};