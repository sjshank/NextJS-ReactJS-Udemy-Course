"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./nav-link.module.css";

export default function NavLink() {
  const pathname = usePathname();

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={pathname.startsWith("/meals") ? classes.active : null}
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={pathname === "/community" ? classes.active : null}
          >
            Community
          </Link>
        </li>
      </ul>
    </nav>
  );
}
