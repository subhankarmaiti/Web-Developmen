import EventContent from "../../components/event-detail/event-content";
import EventLogistic from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";

function EventDetail() {
  const router = useRouter();
  const { eventid } = router.query;
  const event = getEventById(eventid);
  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetail;
