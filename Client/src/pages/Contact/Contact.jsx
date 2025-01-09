import React from 'react';
import { assets } from '../../assets/assets';
import styles from './styles/Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Header Section */}
      <div className={styles.contactHeader}>
        <p>
          CONTACT <span className={styles.highlight}>US</span>
        </p>
      </div>

      {/* Contact Content Section */}
      <div className={styles.contactContent}>
        <img className={styles.contactImage} src={assets.contact_image} alt="Contact Us" />
        <div className={styles.contactDetails}>
          <p className={styles.sectionTitle}>OUR OFFICE</p>
          <p className={styles.sectionText}>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className={styles.sectionText}>
            Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com
          </p>
          <p className={styles.sectionTitle}>CAREERS AT PRESCRIPTO</p>
          <p className={styles.sectionText}>
            Learn more about our teams and job openings.
          </p>
          <button className={styles.exploreJobsButton}>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
