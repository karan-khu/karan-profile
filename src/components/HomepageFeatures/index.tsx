import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  to: string;
  cta: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About me',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    to: '/about/intro',
    cta: 'Read profile',
    description: (
      <>
        Engineer ที่สนใจ developer experience, automation และการเรียนรู้
        แบบไม่หยุดนิ่ง. คลิกอ่านโปรไฟล์ฉบับเต็มได้เลย
      </>
    ),
  },
  {
    title: 'Experience',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    to: '/about/experience',
    cta: 'See work history',
    description: (
      <>
        ประวัติการทำงาน, ตำแหน่ง, โปรเจคเด่น และเทคโนโลยีที่เคยใช้ตั้งแต่
        ปัจจุบันย้อนกลับไป จัดเรียงไว้ในที่เดียว
      </>
    ),
  },
  {
    title: 'Activity log',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    to: '/blog',
    cta: 'Open blog',
    description: (
      <>
        บันทึกกิจกรรม — meeting share tech, รับเชิญไปสอน, เข้าอบรม
        เขียนเป็น Markdown โพสต์ใหม่ ๆ จะขึ้นที่นี่อัตโนมัติ
      </>
    ),
  },
];

function Feature({title, Svg, description, to, cta}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={to}>
          {cta}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
