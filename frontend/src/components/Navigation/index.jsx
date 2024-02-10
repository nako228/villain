import './style.scss'
import img1 from "../../assets/images/img1.png"
import { Link, Outlet } from "react-router-dom"
import Footer from '../Footer';



function Navigation() {
    return (
        <div>
        <div className="outlet">
            <Outlet />
        </div>
        <nav className='nav-first'>
            <div className="nav-left">
                <h1>
                    <Link to={"/"}>
                        <img src={img1} alt="AirBallon" />
                    </Link>
                </h1>
            </div>
            <div className="nav-right">
                <Link to="/">Главная</Link>
                <Link to="/excursions">Экскурсии</Link>
                <Link to="/kabinet">Личный кабинет</Link>
            </div>
        </nav>
   <div>
     <Footer/>
   </div>
        
    </div>
      );
}

export default Navigation;