import './style.scss'
import air from "../../assets/images/Air2.png";
import whatsapp from "../../assets/images/whatsapp.png";
import gg from "../../assets/images/gg.png";
import mail from "../../assets/images/mail.png";
import vk from "../../assets/images/Vk.png";
import ins from "../../assets/images/instagram..png";
import fac from "../../assets/images/Facebook.png";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-wrapper">
            <Link to={"/"}>
                <img src={air} alt="air"/>
                </Link>
            <div className="links">
                <Link to="/">Главная</Link>
                <Link to="/excursions">Экскурсии</Link>
                <Link to="/">Личный кабинет</Link>
            </div>
            <div className="number">
                <img src={whatsapp} alt="whatsapp" />+7 964 944 18 74 `<br />
                <img src={gg} alt="tt" />+7 918 919 98 28 <br />
                <img src={gg} alt="tt" />Телеграм-бот PeroTravel <br />
            </div>
            <div className="images">
                <div className="email">
                    <img src={mail} alt="" /> <span>office@perotravel.ru</span>
                </div>      
                <Link ><img src={vk} alt="Vk" /></Link>
                <Link><img src={ins} alt="Instagram" /></Link>
                <Link><img src={fac} alt="Facebook" /></Link>
            </div>
        </div>
    );
}

export default Footer;