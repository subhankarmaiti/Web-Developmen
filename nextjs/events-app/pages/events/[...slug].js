import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
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
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your value</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEvents;
