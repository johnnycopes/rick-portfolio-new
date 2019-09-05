import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { FaRegEnvelope, FaLinkedin, FaInstagram, FaTwitterSquare } from "react-icons/fa"

import styles from "../styles/components/Header.module.scss"
import Name from "./Name"
import InternalLink from "./InternalLink"
import ExternalLink from "./ExternalLink"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <nav className={styles.left}>
        <InternalLink className={cx(styles.item, styles.name)}
          link="/"
          >
          <Name />
        </InternalLink>
        <span className={cx(styles.item, styles.divider)}>
          |
        </span>
        <ExternalLink className={cx(styles.item, styles.icon)}
          link="mailto:risegal4@gmail.com"
          >
          <FaRegEnvelope />
        </ExternalLink>
        <ExternalLink className={cx(styles.item, styles.icon)}
          link="https://www.linkedin.com/in/rsegal"
          >
          <FaLinkedin />
        </ExternalLink>
        <ExternalLink className={cx(styles.item, styles.icon)}
          link="https://www.instagram.com/riiyaack/"
          >
          <FaInstagram />
        </ExternalLink>
        <ExternalLink className={cx(styles.item, styles.icon)}
          link="https://twitter.com/seinfeld2000?lang=en"
          >
          <FaTwitterSquare />
        </ExternalLink>
      </nav>
      <nav className={styles.right}>
        <InternalLink className={styles.item}
          link="/work"
          >
          work
       </InternalLink>
        <InternalLink className={styles.item}
          link="/about"
          >
          about
        </InternalLink>
        <InternalLink className={cx(styles.item, styles.misc)}
          link="/misc"
          >
          <img className={styles.bird}
            src="assets/img/seagull.png"
            alt="misc"
          />
        </InternalLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
