import EventContent from "@/components/events/event-content";
import EventLogistics from "@/components/events/event-logistics";
import EventSummary from "@/components/events/event-summary";
import { getEventById, getFeaturedEvents } from "@/utils/eventsUtil";
import { Fragment } from "react";
import Head from "next/head";
import Comments from "@/components/input/comments";

function EventDetailPage(props) {
  const { event } = props;
  if (!event) {
    return <p>Loading event...</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments />
    </Fragment>
  );
}

export const getStaticProps = async (context) => {
  const _eventId = context.params.eventId;
  const eventDetail = await getEventById(_eventId);
  return {
    props: {
      event: eventDetail,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
};

export default EventDetailPage;
