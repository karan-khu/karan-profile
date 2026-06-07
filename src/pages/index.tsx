import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Karan Khumthong — Software Developer"
      description="Software Developer and Full-Stack Engineer based in Bangkok, Thailand."
    >
      <main>
        <section className={styles.heroSection}>
          <div className={clsx("container", styles.heroContainer)}>
            {/* Avatar with gradient ring */}
            <div className={styles.heroAvatarRing}>
              <img
                src={useBaseUrl("/img/profile.jpg")}
                alt="Karan Khumthong"
                className={styles.heroAvatar}
              />
            </div>

            {/* Eyebrow */}
            <p className={styles.heroEyebrow}>
              Software Developer · Bangkok, Thailand
            </p>

            {/* Name */}
            <Heading as="h1" className={styles.heroName}>
              Karan Khumthong
            </Heading>
            <p className={styles.heroNameTh}>การัณย์ ขุมทอง</p>

            {/* Bio */}
            <p className={styles.heroBio}>
              Building web and mobile solutions at Dplus Intertrade (Zettasoft).{" "}
              Passionate about clean code, developer experience, and sharing
              knowledge.
            </p>

            {/* CTAs */}
            <div className={styles.heroButtons}>
              <Link
                className={clsx(
                  "button button--primary button--lg",
                  styles.btnPrimary,
                )}
                to="/about/intro"
              >
                About Me
              </Link>
              <Link
                className={clsx("button button--lg", styles.btnGhost)}
                to="/resume"
              >
                Resume
              </Link>
              <Link
                className={clsx("button button--lg", styles.btnGhost)}
                to="/blog"
              >
                Activity Log
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
