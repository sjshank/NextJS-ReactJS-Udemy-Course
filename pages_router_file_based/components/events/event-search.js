import { useRef } from "react";
import classes from "./event-search.module.css";
import { useRouter } from "next/router";

export default function EventSearch() {
  const router = useRouter();
  const yearRef = useRef();
  const monthRef = useRef();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/${yearRef.current.value}/${monthRef.current.value}`);
  };
  return (
    <form className={classes.form} onSubmit={handleSearchSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <button type="submit">Search Event</button>
    </form>
  );
}
