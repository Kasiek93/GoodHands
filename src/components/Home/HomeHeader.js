import React from 'react';
import HomeHeroImage from '../../assets/HomeHeroImage.jpg';
import Decoration from '../../assets/Decoration.svg';
import Buttons from '../Buttons/Buttons';
import HomeAboutUs from './HomeAboutUs/HomeAboutUs';




const HomeHeader = () => {
    return (
        <section className="home" id="home">
            <div className="home-img">
                <img src={HomeHeroImage} alt="people" className="home-img-img"></img>
                <div className="text">
                    <h2 className="text-titleT">Zacznij pomagać!</h2>
                    <h2 className="text-titleT">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={Decoration} alt='Decoration' className="text-decoration"></img>
                    <Buttons />
                </div>
            </div>
            <HomeAboutUs />

        </section >
    )
}

export default HomeHeader;