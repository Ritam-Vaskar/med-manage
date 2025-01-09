import React from 'react';
import styles from './styles/Banner.module.scss';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.bannerContainer}>
      {/* ------- Left Side ------- */}
      <div className={styles.leftContent}>
        <div className={styles.title}>
          <p>Book Appointment</p>
          <p className="subtitle">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate('/login');
            scrollTo(0, 0);
          }}
          className={styles.button}
        >
          Create account
        </button>
      </div>

      {/* ------- Right Side ------- */}
      <div className={styles.rightContent}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={assets.appointment_img}
            alt="Appointment"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
