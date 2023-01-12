import React from 'react';
import columnsBackground from '../../../assets/columnsBackground.png';

const HomeThreeColumns = () => {
    return (
        <section className="columns">
            <div className="columns-background">
                <img src={columnsBackground} alt="background" className="columns-background-img"></img>
            </div>
            <div className="columns-everything">
                <div className="columns-everything-first">
                    <h2 className="columns-everything-first-h2">10</h2>
                    <h3 className="columns-everything-first-h3">ODDANYCH WORKÓW</h3>
                    <p className="columns-everyting-first-paragraph">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.</p> 
                </div>
                <div className="columns-everything-second">
                    <h2 className="columns-everything-second-h2">5</h2>
                    <h3 className="columns-everything-second-h3">WSPARTYCH ORGANIZACJI</h3>
                    <p className="columns-everything-second-paragraph">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="columns-everything-third">
                    <h2 className="columns-everything-third-h2">7</h2>
                    <h3 className="columns-everything-third-h3">ZORGANIZOWANY ZBIÓREK</h3>
                    <p className="columns-everything-third-paragraph">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                        elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </section>
    )
}

export default HomeThreeColumns;