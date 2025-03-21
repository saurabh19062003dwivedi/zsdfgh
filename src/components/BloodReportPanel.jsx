import React, { useState } from "react";
import { _motion } from "framer-motion";
// import { motion as _motion } from "framer-motion";

import ImageViewer from "./ImageViewer"; // Ensure correct path


const BloodReportPanel = () => {
  const [isOverlay, setIsOverlay] = useState(false);

  const rbcData = [
    { name: "Angled Cells", count: 222, percentage: "67%" },
    { name: "Borderline Ovalocytes", count: 50, percentage: "20%" },
    { name: "Burr Cells", count: 87, percentage: "34%" },
    { name: "Fragmented Cells", count: 2, percentage: "0.12%" },
  ];

  const wbcData = [
    { name: "Basophil", count: 222, percentage: "67%" },
    { name: "Eosinophil", count: 50, percentage: "20%" },
    { name: "Lymphocyte", count: 87, percentage: "34%" },
    { name: "Monocyte", count: 2, percentage: "0.12%" },
  ];

  return (
    <div className="relative flex h-screen w-full">
      {/* Background Image */}
      
      <div className="w-full h-full relative">
  <ImageViewer />
</div>

     

      {/* Left Panel */}
      <_motion.div
        // initial={{ x: -300 }}
        animate={{ x: isOverlay ? 0 : -300 }}
        transition={{ duration: 0.5 }}
        
        className="absolute top-0 left-0 h-full bg-white shadow-lg w-80 p-4 border-2 position:absolute border-black"
      >
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => setIsOverlay(!isOverlay)}
        >
          {isOverlay ? "←" : "→"}
        </button>
        

        <h2 className="text-center font-bold bg-gray-200 p-2">Blood Report</h2>

        {/* RBC Table */}
        <table className="w-full border-collapse mt-2">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="border p-1">RBC</th>
              <th className="border p-1">Count (Percentage)</th>
            </tr>
          </thead>
          <tbody>
            {rbcData.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-1">{item.name}</td>
                <td className="border p-1">{item.count} ({item.percentage})</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* WBC Table */}
        <table className="w-full border-collapse mt-2">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="border p-1">WBC</th>
              <th className="border p-1">Count (Percentage)</th>
            </tr>
          </thead>
          <tbody>
            {wbcData.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-1">{item.name}</td>
                <td className="border p-1">{item.count} ({item.percentage})</td>
              </tr>
            ))}
          </tbody>
        </table>
      </_motion.div>
    </div>
  );
};

export default BloodReportPanel;

