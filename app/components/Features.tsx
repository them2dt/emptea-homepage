import styles from '../styles/Page.module.css';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      title: 'Direct communication',
      description: 'No middleman. We work closely with our clients to ensure an amazing product you\'ll be happy to pay for.',
      image: '/support.png',
      alt: 'Direct Communication with support headset'
    },
    {
      title: 'Fast iteration.',
      description: 'You\'ll get your own team of engineers, so no time will be wasted with waiting.',
      image: '/panther.png',
      alt: 'Fast iteration represented by a panther'
    },
    {
      title: 'Locked in.',
      description: 'Your team will focus only on your project to get a tunnel vision, ensuring 100% attention for your needs.',
      image: '/road.png',
      alt: 'Locked in focus represented by a car on a straight road'
    },
  ];

  return (
    <section className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <div className={styles.featureText}>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
          <div className={styles.featureImageContainer}>
            <Image src={feature.image} alt={feature.alt} width={500} height={400} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
