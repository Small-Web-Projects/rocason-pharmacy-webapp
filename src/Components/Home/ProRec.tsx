import "./prorec.css";
import { Link } from 'react-router-dom';
import pharmacist from "../../assets/home/pharmacistHm.png";
import fidson from "../../assets/home/fidson.png";
import juhel from "../../assets/home/juhel.png";
import emzor from "../../assets/home/emzor.png";
import gsk from "../../assets/home/gsk.png";
import dgf from "../../assets/home/dgf.png";

const ProRec = () => {
  return (
    <>
      <div className="prorec-container">
        <h1 className="title-prorec">
          Product <br />
          Recommendation
        </h1>
        {/* <div className="product-rec">
          <div className="female-prorec">
            <h1>Female Health</h1>
            <div className="img-and-btn">
              <button className="pro-rec-button">View</button>
            </div>
          </div>
          <div className="female-prorec male-prorec">
            <h1>Male Health</h1>
            <div className="img-and-btn">
              <button className="pro-rec-button">View</button>
            </div>
          </div>
          <div className="female-prorec sexual-prorec">
            <h1>Sexual Health</h1>
            <div className="img-and-btn">
              <button className="pro-rec-button">View</button>
            </div>
          </div>
        </div> */}
      </div>
      <div className="start-chat">
        <h2>Speak to a Pharmacist</h2>
        <p>
          Ask your Pharmacist, not the internet. Consult with our Pharmacist,
          available online everyday
        </p>
      </div>
      <div className="start-chat-btn">
        <Link to="/whatsapp">
          <button className="overview-btn">Start Chat</button>
        </Link>
      </div>
      <div className="pharm-div">
        <img src={pharmacist} alt="" />
      </div>
      <div className="brands">
        <h1>Over 1000+ brands</h1>
        <div className="the-brands">
          <img src={fidson} alt="" />
          <img src={juhel} alt="" />
          <img src={emzor} alt="" />
          <img src={gsk} alt="" />
          <img src={dgf} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProRec;
