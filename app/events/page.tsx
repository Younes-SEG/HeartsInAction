"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "upcoming" | "past";
  fundsRaised?: number;
}

// Sample events data - replace with real data later
const sampleEvents: Event[] = [
  {
    id: 1,
    title: "Spring Bake Sale",
    date: "2026-03-15",
    location: "University Centre",
    description: "Join us for our annual spring bake sale! All proceeds go to local food banks.",
    type: "upcoming",
  },
  {
    id: 2,
    title: "Charity Run 2025",
    date: "2025-10-20",
    location: "Rideau Canal",
    description: "5K charity run along the Rideau Canal. Registration open now!",
    type: "past",
    fundsRaised: 2500,
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [events] = useState<Event[]>(sampleEvents);

  const upcomingEvents = events.filter((e) => e.type === "upcoming");
  const pastEvents = events.filter((e) => e.type === "past");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "upcoming"
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-600 hover:text-primary-600"
          }`}
        >
          Upcoming Events
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "past"
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-600 hover:text-primary-600"
          }`}
        >
          Past Events
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {activeTab === "upcoming" ? (
          upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <ScrollAnimation key={event.id} delay={index * 100}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-primary-600 mb-2 md:mb-0">
                    {event.title}
                  </h2>
                  <div className="flex flex-col md:items-end">
                    <span className="text-gray-600 font-medium">{formatDate(event.date)}</span>
                    <span className="text-gray-500 text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-700">{event.description}</p>
                </div>
              </ScrollAnimation>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No upcoming events scheduled yet.</p>
              <p className="mt-2">Check back soon for updates!</p>
            </div>
          )
        ) : (
          pastEvents.length > 0 ? (
            pastEvents.map((event, index) => (
              <ScrollAnimation key={event.id} delay={index * 100}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-primary-600 mb-2 md:mb-0">
                      {event.title}
                    </h2>
                    <div className="flex flex-col md:items-end">
                      <span className="text-gray-600 font-medium">{formatDate(event.date)}</span>
                      <span className="text-gray-500 text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  {event.fundsRaised && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-lg font-semibold text-green-600">
                        Raised: ${event.fundsRaised.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No past events to display yet.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
