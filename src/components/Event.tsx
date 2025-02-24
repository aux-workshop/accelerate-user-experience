import { useState } from "react";
import { Users, Edit, CheckCircle, MapPin, Calendar } from "react-feather";

const events = [{ id: 1, name: "2025 Accelerate UX" }];

const agenda = [
  {
    day: "Day 1",
    details:
      "Kick off with introductions, overview of the workshop’s goals, and participants' mini-presentations (background, lessons, and challenges).",
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
  {
    day: "Day 2",
    details:
      "Brainstorming groups or open sessions, white paper input, and component sketches.",
    icon: <Edit className="w-6 h-6 text-blue-600" />,
  },
  {
    day: "Day 3",
    details:
      "Wrap-up with next steps, goal-setting, and optional tours or excursions.",
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
  },
];

export default function Event() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  return (
    <div className="flex flex-col h-screen">
      {/* Top section */}
      <section className="h-[70vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Events</h1>
        <p className="text-lg text-white max-w-2xl">
          This is an archive of our past and current event information.
        </p>
      </section>

      <div className="flex flex-1">
        {/* Sidebar navigation */}
        <aside className="w-1/4 bg-gray-100 p-6 border-r">
          <h2 className="text-xl font-semibold mb-4">Events</h2>
          <ul>
            {events.map((event) => (
              <li
                key={event.id}
                className={`p-2 cursor-pointer ${
                  selectedEvent.id === event.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                {event.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="w-3/4 p-6">
          <h1 className="text-3xl font-bold mb-4">{selectedEvent.name}</h1>

          {/* Event details section */}
          <section className="mb-8 flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="ml-2 text-gray-600">Hosted at SLAC</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="ml-2 text-gray-600">February 26-28, 2025</span>
            </div>
          </section>

          {/* Agenda section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agenda</h2>
            <p className="text-gray-600 mb-4">
              Explore a full-day schedule packed with keynote talks, interactive
              sessions, and networking opportunities.
            </p>
            <div className="flex flex-col space-y-4">
              {agenda.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mr-3">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.day}</h3>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Discussion notes section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Discussion Notes</h2>
            <p className="text-gray-600">
              Notes from the event discussions will be displayed here.
            </p>
          </section>

          {/* Pictures section */}
          <section>
            <h2 className="text-2xl font-semibold">Event Photos</h2>
            <p className="text-gray-600">
              Photos from the event will be displayed here.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
