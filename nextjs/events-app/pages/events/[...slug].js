import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function FilteredEvents() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const numYear = +filterData[0];
  const numMonth = +filterData[1];
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your value</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  console.log(numYear, numMonth);
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events for the chosen filter</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEvents;
