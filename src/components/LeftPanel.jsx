import React from "react";

const LeftPanel = ({ data }) => {
  return (
    <div className="p-4 bg-gray-100   border-r w-1/3">
      <h2 className="text-lg font-bold text-center">Findings</h2>
      <table className="w-full border-collapse border border-gray-400 mt-2">
        <thead>
          <tr className="bg-green-200">
            <th className="border p-2">RBC</th>
            <th className="border p-2">Count</th>
            <th className="border p-2">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.rbc.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.type}</td>
              <td className="border p-2">{item.count}</td>
              <td className="border p-2">{item.percentage}%</td>
            </tr>
          ))}
        </tbody>

        <thead>
          <tr className="bg-green-200">
            <th className="border p-2">WBC</th>
            <th className="border p-2">Count</th>
            <th className="border p-2">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.wbc.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.type}</td>
              <td className="border p-2">{item.count}</td>
              <td className="border p-2">{item.percentage}%</td>
            </tr>
          ))}
        </tbody>

        <thead>
          <tr className="bg-green-200">
            <th className="border p-2">Platelets</th>
            <th className="border p-2">Count</th>
            <th className="border p-2">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Platelets</td>
            <td className="border p-2">{data.platelets.count}</td>
            <td className="border p-2">{data.platelets.percentage}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeftPanel;
