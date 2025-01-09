import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles/Doctors.module.scss';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className={styles.doctorsContainer}>
      {/* Sidebar */}
      <aside className={styles.filterSidebar}>
        <h2 className={styles.filterTitle}>Filters</h2>
        <ul className={styles.filterList}>
          {[
            'General physician',
            'Gynecologist',
            'Dermatologist',
            'Pediatricians',
            'Neurologist',
            'Gastroenterologist',
          ].map((item) => (
            <li
              key={item}
              className={`${styles.filterItem} ${
                speciality === item ? styles.activeFilter : ''
              }`}
              onClick={() =>
                speciality === item
                  ? navigate('/doctors')
                  : navigate(`/doctors/${item}`)
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.doctorsContent}>
        <p className={styles.browseText}>Browse through the doctors specialist.</p>
        <div className={styles.doctorsGrid}>
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className={`${styles.doctorCard} ${
                item.available ? styles.available : styles.notAvailable
              }`}
              key={index}
            >
              <img
                className={styles.doctorImage}
                src={item.image}
                alt={item.name}
              />
              <div className={styles.doctorInfo}>
                <div
                  className={`${styles.availability} ${
                    item.available ? styles.available : styles.notAvailable
                  }`}
                >
                  <span className={styles.statusIndicator}></span>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>
                <p className={styles.doctorName}>{item.name}</p>
                <p className={styles.doctorSpeciality}>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Doctors;
