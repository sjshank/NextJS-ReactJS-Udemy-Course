import EventList from "@/components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { getFeaturedEvents } from "@/utils/eventsUtil";

const FeaturedEventsPage = (props) => {
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredevents = await getFeaturedEvents();
  return {
    props: {
      events: featuredevents,
    },
    revalidate: 60,
  };
};

export default FeaturedEventsPage;
