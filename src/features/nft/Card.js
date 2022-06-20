import styles from "./Card.module.css";
import equ from "../../images/image-equilibrium.jpg";
import icon from "../../images/icon-ethereum.svg";
import clock from "../../images/icon-clock.svg";
import avatar from "../../images/image-avatar.png";
import eye from "../../images/icon-view.svg";

const Card = () => {
  return (
    <div className={styles.card}>
      {/* <img className={styles.equ} src={equ} alt="" /> */}
      <div className={styles.cardImage}>
            <div class={styles.overlay}>
                <img className={styles.eye} src={eye} alt="" />
            </div>
      </div>
      <h1 className={styles.h1}>Equilibrium #3429</h1>
      <p>Our Equilibrium Collection promotes balance and calm.</p>
      <div className={styles.priceWrapper}>
        <div className={styles.ethPrice}>
          <img src={icon} alt="" />
          <span className={styles.eth}>0.041 ETH</span>
        </div>
        <div className={styles.clockContainer}>
          <img className={styles.clock} src={clock} alt="" />
          <span>3 days left</span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={avatar} alt="" />
        <span>
          Creation of <span className={styles.jules}>Jules Wyvern</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
