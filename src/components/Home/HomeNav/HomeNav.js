import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const options = {
    duration: 500,
    spy: true,
    offset: 150,
    smooth: true,
    activeClass: "active",
    className: "nav-bar-b"
}


const HomeNav = () => {
    return (
        <div className="registration">
            <nav className="registration-main">
                <Link to="/logowanie" className="registration-main-first">Zaloguj</Link>
                <Link to="/rejestracja" className="registration-main-second">Załóż konto</Link>
            </nav>

            <ul className="nav-bar">
                <Link to="/" className="nav-bar-b">Start</Link>
                <Scroll
               
                    to="start"
                    {...options}
                    >O co chodzi?</Scroll>
                    
                <Scroll

                    to="about"
                    {...options}
>O nas</Scroll>
                <Scroll
                    activeClass="active"
                    to="fundation"
                    spy={true}
                    offset={0}
                    duration={500}
                    className="nav-bar-b">Fundacja i organizacje</Scroll>
                <Scroll
                    activeClass="active"
                    to="contact"
                    spy={true}
                    offset={500}
                    duration={500}
                    className="nav-bar-b">Kontakt</Scroll>
            </ul>
        </div>
    )
}
export default HomeNav;
