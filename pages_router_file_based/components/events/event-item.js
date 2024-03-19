import Image from "next/image";
import Link from "next/link";
import classes from "./event-item.module.css";

export default function EventItem({ title, location, date, image, id }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const address = location.replace(", ", "\n");
  return (
    <li className={classes.item}>
      <Image
        src={image}
        alt={title}
        width={340}
        height={160}
        style={{ borderRadius: "6px" }}
        priority
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
