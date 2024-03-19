import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* load this image on priority */}
          <Image src={logoImg} alt="Food plate" priority />
          Next Foodies
        </Link>

        <NavLink />
      </header>
    </>
  );
}
