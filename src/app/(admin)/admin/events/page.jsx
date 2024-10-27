// Events.jsx
import React from "react";
import Table from "@/components/admin/Table";

const Events = () => {
  const headers = ["Title", "Description", "Location", "Thumbnail", "Date"];

  const rows = [
    {
      title: "Football",
      description: "An exciting football match featuring top teams.",
      location: "New York",
      thumbnail:
        "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Art Exhibition",
      description: "A showcase of local artists and their works.",
      location: "Los Angeles",
      thumbnail:
        "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: new Date("2025-01-02").toLocaleDateString(),
    },
    // Add more event objects as needed
  ];

  return (
    <div>
      <h1>Event List</h1>
      <Table headers={headers} rows={rows} />
    </div>
  );
};

export default Events;
