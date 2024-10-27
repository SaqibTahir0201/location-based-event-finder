// Users.jsx
import React from 'react';
import Table from '@/components/admin/Table';

const Users = () => {
  const headers = ["User  ID", "User  Image", "User  Name", "Email", "Location", "Event"];
  
  const rows = [
    {
      user_id: 1,
      user_image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      user_name: "John Doe",
      email: "john@example.com",
      location: "New York",
      event: "Music Concert",
    },
    {
      user_id: 2,
      user_image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
      user_name: "Jane Smith",
      email: "jane@example.com",
      location: "Los Angeles",
      event: "Art Exhibition",
    },
    {
      user_id: 3,
      user_image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      user_name: "Alice Johnson",
      email: "alice@example.com",
      location: "Chicago",
      event: "Tech Conference",
    },
    {
      user_id: 4,
      user_image: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600",
      user_name: "Bob Brown",
      email: "bob@example.com",
      location: "San Francisco",
      event: "Food Festival",
    },
    {
      user_id: 5,
      user_image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      user_name: "Emily Davis",
      email: "emily@example.com",
      location: "Miami",
      event: "Fashion Show",
    },
  ];
  return (
    <div>
      <h1>User List</h1>
      <Table headers={headers} rows={rows} />
    </div>
  );
};

export default Users;