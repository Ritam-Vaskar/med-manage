import React from 'react';
import styles from './styles/Header.module.scss';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      {/* --------- Header Left --------- */}
      <div className={styles.leftSection}>
        <p className={styles.title}>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className={styles.description}>
          <img className={styles.profileImage} src={assets.group_profiles} alt="Profiles" />
          <p className="text">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className={styles.ctaButton}
        >
          Book appointment
          <img className={styles.arrowIcon} src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className={styles.rightSection}>
        <img className={styles.headerImage} src={assets.header_img} alt="Header" />
      </div>
    </div>
  );
};

export default Header;
