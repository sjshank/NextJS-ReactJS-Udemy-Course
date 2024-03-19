import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="profile"
          priority
          width={150}
          height={150}
        />
      </div>
      <h1>Hi, I am Saurabh Shankariya</h1>
      <p>I love to explore Frontend & Blockchain technologies.</p>
    </section>
  );
};

export default Hero;
