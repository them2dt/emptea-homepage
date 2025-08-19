import styles from '../styles/Page.module.css';
import { Headset, Lightning, Target } from '@phosphor-icons/react';

const Features = () => {
  const features = [
    {
      title: 'Direct communication',
      description: 'No middleman. We work closely with our clients to ensure an amazing product you\'ll be happy to pay for.',
      icon: <Headset size={80} color="#ff5000" weight="duotone" />
    },
    {
      title: 'Fast iteration.',
      description: 'You\'ll get your own team of engineers, so no time will be wasted with waiting.',
      icon: <Lightning size={80} color="#ff5000" weight="duotone" />
    },
    {
      title: 'Locked in.',
      description: 'Your team will focus only on your project to get a tunnel vision, ensuring 100% attention for your needs.',
      icon: <Target size={80} color="#ff5000" weight="duotone" />
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
            {feature.icon}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
