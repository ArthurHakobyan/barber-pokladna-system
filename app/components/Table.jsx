import React from "react";

const Table = ({ tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Service</th>
          <th>Price</th>
          <th>Payment</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td className="border border-gray-700 px-4 py-2">{item.name}</td>
            <td className="border border-gray-700 px-4 py-2">{item.service}</td>
            <td className="border border-gray-700 px-4 py-2">{item.price}</td>
            <td className="border border-gray-700 px-4 py-2">{item.payment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
