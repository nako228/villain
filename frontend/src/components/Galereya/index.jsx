import './style.scss'
import galery1 from "../../assets/images/Galery1.png";
import galery2 from "../../assets/images/Galery2.png";
import galery3 from "../../assets/images/Galery3.png";
import galery4 from "../../assets/images/Galery4.png";
import galery5 from "../../assets/images/Galery5.png";
import galery6 from "../../assets/images/Galery6.png";
import galery7 from "../../assets/images/Galery7.png";
import galery8 from "../../assets/images/Galery8.png";

function Galereya() {
    return ( 
        <div className="galery-wrapper">
        <div className="top">
            <span>Галерея</span>
        </div>
        <div className="galery-content">

            <div className="left">
                <img src={galery1} alt="galery1" />
                <div>
                    <img src={galery5} alt="galery5" />
                    <div>
                        <img src={galery6} alt="galery6" />
                        <img src={galery7} alt="galery7" />
                    </div>
                </div>
            </div>
            <img src={galery2} alt="galery2" id="mid" />
            <div className="right">
                <div>
                    <img src={galery3} alt="galery3" />
                    <img src={galery4} alt="galery4" />
                </div>
                <img src={galery8} alt="galery8" />
            </div>
        </div>
    </div>
            );
        }

export default Galereya;