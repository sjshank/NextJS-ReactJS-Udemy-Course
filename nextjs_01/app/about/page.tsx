import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css";

const About = () => {
  // throw new Error("");
  return (
    <div>
    <div className={styles.aboutText}>About</div>
    <br/>
    <br/>
    <div><Link href="/">Back to Home</Link></div>
    </div>
  )
}

export default About