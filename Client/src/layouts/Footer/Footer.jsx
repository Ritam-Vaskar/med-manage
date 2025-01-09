import React from 'react';
import { assets } from '../../assets/assets';
import styles from './styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <img className={styles.logo} src={assets.logo} alt="Logo" />
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        <div className={styles.companySection}>
          <p className={styles.title}>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <p className={styles.title}>GET IN TOUCH</p>
          <ul>
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <hr />
        <p>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
