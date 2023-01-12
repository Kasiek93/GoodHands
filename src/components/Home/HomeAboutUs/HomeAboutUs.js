import React from 'react';
import decoration from '../../../assets/decoration.svg';
import people from '../../../assets/people.jpg';
import signature from '../../../assets/signature.svg';



const HomeAboutUs = () => {
    return(
    <section className="about-us" id="about">
            <div className="about-us-us">
                <h3 className="about-us-us-h3">O nas</h3>
                <img src={decoration} alt="Decoration"></img>
                <p className="about-us-us-p">Nori grape silver beet broccoli kombu beet <br />greens fava bean potato
                    quandong celery. <br />Bunya nuts black-eyed pea prairie turnip leek
                    <br />lentil turnip greens parsnip.</p>
                <div className="about-us-signature">
                    <img src={signature} alt="signature" className="about-us-signature-img"></img>
                </div>
            </div>
            <div className="about-us-photo">
                <img src={people} alt="People" className="about-us-photo-img"></img>
            </div>


        </section>
    )
}

export default HomeAboutUs;
