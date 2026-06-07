import {useState} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './resume.module.css';

type Lang = 'en' | 'th';

export default function ResumePage(): ReactNode {
  const [lang, setLang] = useState<Lang>('en');

  const resumeUrl = useBaseUrl(
    lang === 'en'
      ? '/resume/Karan_Khumthong_Resume_EN.html'
      : '/resume/Karan_Khumthong_Resume_TH.html',
  );

  return (
    <Layout title="Resume" description="Resume of Karan Khumthong / การัณย์ ขุมทอง">
      <div className={styles.pageWrapper}>
        <div className={styles.toolbar}>
          <Heading as="h1" className={styles.pageTitle}>
            Resume
          </Heading>
          <div className={styles.controls}>
            <div className={styles.langToggle}>
              <button
                className={clsx(styles.langBtn, lang === 'en' && styles.langBtnActive)}
                onClick={() => setLang('en')}>
                English
              </button>
              <button
                className={clsx(styles.langBtn, lang === 'th' && styles.langBtnActive)}
                onClick={() => setLang('th')}>
                ภาษาไทย
              </button>
            </div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary">
              🖨️ Print / Save PDF
            </a>
          </div>
        </div>
        <iframe
          src={resumeUrl}
          className={styles.resumeFrame}
          title={`Resume — ${lang === 'en' ? 'English' : 'Thai'}`}
        />
      </div>
    </Layout>
  );
}
