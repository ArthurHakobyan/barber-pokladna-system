import React from "react";

const Table = ({ tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="px-2">Jméno</th>
          <th className="px-2">Služba</th>
          <th className="px-2">Cena</th>
          <th className="px-2">Platba</th>
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
