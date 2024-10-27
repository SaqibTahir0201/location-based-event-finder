import React from "react";
import Table from "@/components/admin/Table";
const Categories = () => {
  const headers = ["Title", "Description", "Thumbnail"];

  const rows = [
    {
      title: "Football",
      description: "An exciting football match featuring top teams.",
      thumbnail:
        "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Art Exhibition",
      description: "A showcase of local artists and their works.",
      thumbnail:
        "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Concert",
      description: "A live concert featuring popular bands.",
      thumbnail:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1>Categories</h1>

        <button>
          Add Category
        </button>
      </div>
      <Table headers={headers} rows={rows} />
    </div>
  );
};

export default Categories;
