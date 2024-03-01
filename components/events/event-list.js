import EventItem from "./event-item";
import classes from './event-list.module.css'

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          date={item.date}
          id={item.id}
          image={item.image}
          location={item.image}
          title={item.title}
        />
      ))}
    </ul>
  );
}
