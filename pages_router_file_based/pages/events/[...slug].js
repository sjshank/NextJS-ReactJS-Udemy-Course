import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/utils/eventsUtil";

function FilteredEventsPage(props) {
  const { hasError, events } = props;
  if (hasError) {
    return (
      <p style={{ textAlign: "center" }}>
        Invalid query. Please revisit & choose the correct filter.
      </p>
    );
  }

  if (events.length === 0) {
    return <p style={{ textAlign: "center" }}>No events found</p>;
  }

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const slug = params.slug;
  const year = Number(slug[0]);
  const month = Number(slug[1]);

  if (Number.isNaN(year) || Number.isNaN(month)) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const _events = await getFilteredEvents({ year, month });

  return {
    props: {
      events: _events,
    },
  };
};

export default FilteredEventsPage;
