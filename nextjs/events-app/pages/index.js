import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/event-list";
function Home() {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList items={featureEvents} />
    </div>
  );
}

export default Home;
