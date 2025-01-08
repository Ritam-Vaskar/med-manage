import React from 'react';
import { specialityData } from '../../assets/assets';
import { Link } from 'react-router-dom';
import styles from './styles/SpecialityMenu.module.scss';

const SpecialityMenu = () => {
  return (
    <div id="speciality" className={styles.specialityMenuContainer}>
      <h1 className={styles.title}>Find by Speciality</h1>
      <p className={styles.description}>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className={styles.menu}>
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className={styles.menuItem}
            key={index}
          >
            <img className={styles.image} src={item.image} alt={item.speciality} />
            <p className={styles.label}>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
