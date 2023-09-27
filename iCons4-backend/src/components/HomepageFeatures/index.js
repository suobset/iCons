import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Point 1',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem Ipsum Dolor sit amet the quick brown fox jumps over the lazy dog icons stands for integrated concentration in STEM. 
      </>
    ),
  },
  {
    title: 'Point 2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem Ipsum Dolor sit amet the quick brown fox jumps over the lazy dog icons stands for integrated concentration in STEM.
      </>
    ),
  },
  {
    title: 'Point 3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem Ipsum Dolor sit amet the quick brown fox jumps over the lazy dog icons stands for integrated concentration in STEM.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
