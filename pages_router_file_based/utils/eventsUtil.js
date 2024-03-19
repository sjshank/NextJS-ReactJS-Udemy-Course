export const getAllEvents = async () => {
  const resp = await fetch("http://localhost:8000/events");
  const data = await resp.json();
  return data;
};

export const getFeaturedEvents = async () => {
  const resp = await fetch("http://localhost:8000/events");
  const data = await resp.json();
  const events = await data.filter((event) => event.isFeatured);
  return events;
};

export const getEventById = async (id) => {
  const resp = await fetch("http://localhost:8000/events/" + id);
  const data = await resp.json();
  return data;
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const AllEvents = await getAllEvents();

  let filteredEvents = AllEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
