import React from "react";
import { Link } from "react-router-dom";
import decoration from '../../../assets/decoration.svg';
import icon1 from '../../../assets/icon1.svg';
import icon2 from '../../../assets/icon2.svg';
import icon3 from '../../../assets/icon3.svg';
import icon4 from '../../../assets/icon4.svg';

const HomeFourSteps = () => {
    return (
        <section className="steps" id="steps">
            <div className="steps-top">
                <h2 className="steps-top-h2">Wystarczą 4 proste kroki</h2>
                <img src={decoration} alt="Decoration"></img>
            </div>
            <div className="steps-middle">
                <div className="steps-middle-all">
                    <div className="steps-middle-all-first">
                        <img src={icon1} alt="T-shirt" ></img>
                        <h3 className="steps-middle-all-first-h3">Wybierz rzeczy</h3>
                        <p className="steps-middle-all-second-p">ubrania, zabawki, <br />sprzęt i inne</p>
                    </div>
                    <div className="steps-middle-all-second">
                        <img src={icon2} alt="Bag"></img>
                        <h3 className="steps-middle-all-second-h3">Spakuj je</h3>
                        <p className="steps-middle-all-second-p">skorzystaj z <br /> worków na śmieci</p>
                    </div>
                    <div className="steps-middle-all-third">
                        <img src={icon3} alt="Loop"></img>
                        <h3 className="steps-middle-all-third-h3">Zdecyduj komu <br />chcesz pomóc</h3>
                        <p className="steps-middle-all-third-p">wybierz zaufane <br />miejsce</p>
                    </div>
                    <div className="steps-middle-all-fourth">
                        <img src={icon4} alt="Circle"></img>
                        <h3 className="steps-middle-all-fourth-h3">Zamów kuriera</h3>
                        <p className="steps-middle-all-fourth-p">kurier przyjedzie<br /> w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div >
                <Link to="/logowanie">
                <button>
                    ODDAJ <br /> RZECZY</button>  </Link>
                    </div>
            
        </section>


    )
}

export default HomeFourSteps;