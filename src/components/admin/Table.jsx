// Table.jsx
import React from "react";

const Table = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border-b border-gray-300 p-2 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="border-b border-gray-300 p-2">
                  {header.toLowerCase() === "thumbnail" ? (
                    <img
                      src={row.thumbnail}
                      alt={row.title}
                      className="w-24 h-16 object-cover"
                    />
                  ) : header.toLowerCase().includes("image") ? (
                    <img
                      src={row[header.toLowerCase().replace(/\s+/g, "_")]}
                      alt={row[header.toLowerCase().replace(/\s+/g, "_")]}
                      className="w-12 h-16 object-cover rounded-sm"
                    />
                  ) : (
                    row[header.toLowerCase().replace(/\s+/g, "_")]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
