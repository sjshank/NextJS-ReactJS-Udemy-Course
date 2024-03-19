import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/utils/eventsUtil";
import Head from "next/head";

function AllEventsPage({ events }) {
  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="List of all the featured & non-featured events."
        />
      </Head>
      <EventSearch />
      <EventList items={events} />
    </div>
  );
}

export const getStaticProps = async () => {
  const _events = await getAllEvents();

  return {
    props: {
      events: _events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
