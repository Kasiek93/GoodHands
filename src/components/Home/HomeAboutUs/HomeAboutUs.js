import React from 'react';
import Decoration from '../../../assets/Decoration.svg';
import People from '../../../assets/People.jpg';
import Signature from '../../../assets/Signature.svg';



const HomeAboutUs = () => {
    return(
    <section className="about-us" id="about">
            <div className="about-us-us">
                <h3 className="about-us-us-h3">O nas</h3>
                <img src={Decoration} alt="Decoration"></img>
                <p className="about-us-us-p">Nori grape silver beet broccoli kombu beet <br />greens fava bean potato
                    quandong celery. <br />Bunya nuts black-eyed pea prairie turnip leek
                    <br />lentil turnip greens parsnip.</p>
                <div className="about-us-signature">
                    <img src={Signature} alt="signature" className="about-us-signature-img"></img>
                </div>
            </div>
            <div className="about-us-photo">
                <img src={People} alt="People" className="about-us-photo-img"></img>
            </div>


        </section>
    )
}

export default HomeAboutUs;
