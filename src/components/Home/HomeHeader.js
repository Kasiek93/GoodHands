import React from 'react';
import homeHeroImage from '../../assets/homeHeroImage.jpg';
import decoration from '../../assets/decoration.svg';
import Buttons from '../Buttons/Buttons';
import HomeAboutUs from './HomeAboutUs/HomeAboutUs';
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps/HomeFourSteps';
import HomeContact from './HomeContact/HomeContact';




const HomeHeader = () => {
    return (
        <section className="home" id="home">
            <div className="home-img">
                <img src={homeHeroImage} alt="people" className="home-img-img"></img>
                <div className="text">
                    <h2 className="text-titleT">Zacznij pomagać!</h2>
                    <h2 className="text-titleT">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration} alt='Decoration' className="text-decoration"></img>
                    <Buttons />
                </div> 
            </div>
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeContact />
            

        </section >
    )
}

export default HomeHeader;