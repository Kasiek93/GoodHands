import React from "react";
import useArray from "./useArray";
import styles from "../../../scss/elements/HomeHelpsFundations";

const HomeHelpsFundations = () => {
    const { fundationsArray } = useArray();
  
    return (
      <div className={styles.fundations}>
        <p className={styles.fundations__text}>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br></br>{" "}
          którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br></br>{" "}
          komu pomagają i czego potrzebują.
        </p>
        {fundationsArray.map(({ title, items, description }) => {
          return (
            <div className={styles.array}>
              <div className={styles.array__content}>
                <div className={styles.array__box}>
                  <p className={styles.array__title}>{title}</p>
                   <p className={styles.array__description}>{description}</p>
                </div>
               
                <p className={styles.array__items}>{items}</p>
              </div>
              <div className={styles.array__line}></div>
              <div className={styles.array__content}>
                <div className={styles.array__box}>
                  <p className={styles.arrray__title}>{title}</p>
                  <p className={styles.array__items}>{items}</p>
                </div>
                <p className={styles.array__description}>{description}</p>
              </div>
              <div className={styles.array__line}></div>
              <div className={styles.array__content}>
                <div className={styles.array__box}>
                  <p className={styles.array__title}>{title}</p>
                  <p className={styles.array__items}>{items}</p>
                </div>
                <p className={styles.array__description}>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default HomeHelpsFundations;