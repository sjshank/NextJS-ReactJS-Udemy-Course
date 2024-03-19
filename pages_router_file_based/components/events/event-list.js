import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItem key={event.id} {...event} />;
      })}
    </ul>
  );
}
