import React from 'react';
import { assets } from '../../assets/assets';
import styles from './styles/About.module.scss';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* About Us Section */}
      <div className={styles.aboutHeader}>
        <p>
          ABOUT <span className={styles.highlight}>US</span>
        </p>
      </div>

      <div className={styles.aboutContent}>
        <img className={styles.aboutImage} src={assets.about_image} alt="About Us" />
        <div className={styles.aboutText}>
          <p>
            Welcome to Medmanage, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Medmanage, we understand the challenges
            individuals face when it comes to scheduling doctor appointments and managing
            their health records.
          </p>
          <p>
            Medmaage is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest advancements
            to improve user experience and deliver superior service. Whether you're booking
            your first appointment or managing ongoing care, Medmanage is here to support
            you every step of the way.
          </p>
          <b className={styles.visionTitle}>Our Vision</b>
          <p>
            Our vision at Medmanage is to create a seamless healthcare experience for every
            user. We aim to bridge the gap between patients and healthcare providers, making
            it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.chooseUsHeader}>
        <p>
          WHY <span className={styles.highlight}>CHOOSE US</span>
        </p>
      </div>

      <div className={styles.featuresContainer}>
        <div className={styles.featureCard}>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className={styles.featureCard}>
          <b>CONVENIENCE:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className={styles.featureCard}>
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
