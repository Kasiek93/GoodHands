import React from "react";
import useArray from "./useArray";
import styles from "../../../scss/elements/HomeHelpsLocal";

const HomeHelpsLocal = () => {
    const { localArray } = useArray();

    return (
        <div className={styles.local}>
            <p className={styles.local__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            <br></br> do eiusmod tempor incididunt ut labore et dolore magna <br></br> aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation. </p>

    {localArray.map(({ title, items, description }) => {
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
                <p className={styles.array__title}>{title}</p>
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
export default HomeHelpsLocal