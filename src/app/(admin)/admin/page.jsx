import { PieCharts } from "@/components/admin/PieCharts";
import React from "react";

const Admin = () => {
  return (
    <>
      <div
        className="min-h-screen grid grid-cols-8 gap-6 w-full mx-auto p-4 rounded-md my-12 grid-flow-dense mb-2 bg-pink-200"
        // style={{ backgroundColor: "#f2f2f2" }}
      >
        <div
          className="lg:col-span-3 lg:row-span-4 rounded-md border relative min-h-36 grid-flow-dense md:col-span-8  md:row-span-3   bg-pink-500"
          //   style={{ backgroundColor: "#f2f2f2" }}
        ></div>
        <div className="lg:col-span-2 lg:row-span-2   relative min-h-36 grid-flow-dense md:col-span-4 md:row-span-2">
          <PieCharts />
        </div>
        <div
          className="lg:col-span-3 lg:-span-2 rounded-md border relative min-h-36 grid-flow-dense  md:col-span-4 md:row-span-2   bg-green-500"
          //   style={{ backgroundColor: "#f2f2f2" }}
        ></div>
        <div
          className="lg:col-span-5 lg:row-span-2 rounded-md border relative min-h-36 grid-flow-dense  md:col-span-8 md:row-span-3  bg-yellow-500"
          //   style={{ backgroundColor: "#f2f2f2" }}
        ></div>
      </div>
    </>
  );
};

export default Admin;
