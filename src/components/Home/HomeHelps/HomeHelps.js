import React, { useState } from "react";
import HomeHelpsOrganizations from './HomeHelpsOrganizations';
import HomeHelpsFundations from './HomeHelpsFundations';
import HomeHelpsLocal from './HomeHelpsLocal';
import { FUNDATIONS, LOCAL, ORGANIZATIONS } from './useArray';
import decoration from '../../../assets/decoration.svg';
import styles from'../../../scss/elements/HomeHelps';

const HomeHelps = () => {
    const [Tab, setTab] = useState(FUNDATIONS);
    return (
      <div id="Helps" className={styles.helps}>
        <div className={styles.helps__header}>
          <h2>Komu pomagamy?</h2>
          <div className={styles.helps__header__decoration_icon}>
            {" "}
            <img src={decoration} />
          </div>
        </div>
        <div className={styles.helps__menu}>
          <button
            type="button"
            className={styles.helps__btn}
            onClick={() => setTab(FUNDATIONS)}
          >
            Fundacjom
          </button>
          <button
            type="button"
            className={styles.helps__btn}
            onClick={() => setTab(ORGANIZATIONS)}
          >
            Organizacjom <br></br> pozarządowym
          </button>
          <button
            type="buttom"
            className={styles.helps__btn}
            onClick={() => setTab(LOCAL)}
          >
            Lokalnym <br></br> zbiórkom
          </button>
        </div>
        {Tab === FUNDATIONS && (
          <div>
            <HomeHelpsFundations />
          </div>
        )}
        {Tab === ORGANIZATIONS && (
          <div>
            <HomeHelpsOrganizations />
          </div>
        )}
        {Tab === LOCAL && (
          <div>
            <HomeHelpsLocal />
          </div>
        )}
      </div>
    );
  };
  
  export default HomeHelps;


