import React, { useState } from "react";
import LeftPanel from "./LeftPanel";

const MainComponent = () => {
  const [highlighted, setHighlighted] = useState(false);

  // Sample Data (Replace with API data if needed)
  const bloodData = {
    rbc: [
      { type: "Angled Cells", count: 222, percentage: 67 },
      { type: "Burr Cells", count: 87, percentage: 34 },
      { type: "Fragmented Cells", count: 2, percentage: 0.12 },
    ],
    wbc: [
      { type: "Basophil", count: 222, percentage: 67 },
      { type: "Eosinophil", count: 50, percentage: 20 },
      { type: "Lymphocyte", count: 87, percentage: 34 },
    ],
    platelets: { count: 222, percentage: 67 },
  };

  return (
    <div className="flex-col">
      {/* Left Panel */}
      <LeftPanel data={bloodData} />

      {/* Main View */}
      {/* <div className="p-6 flex-1"> */}
        {/* <h2 className="text-xl font-bold text-center">WSI Zoomed IN View</h2> */}

        {/* Image Placeholder */}
        {/* <div className="mt-4 border p-4"> */}
          {/* <img
            src="https://via.placeholder.com/500"
            alt="Zoomed View"
            className="w-full"
          /> */}
        {/* </div> */}

        {/* Highlight Button */}
        <button
          className={` p-2 rounded ${
            highlighted ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          }`}
          onClick={() => setHighlighted(!highlighted)}
        >
          {highlighted ? "Unhighlight" : "Highlight Findings"}
        </button>
      </div>
    // </div>
  );
};

export default MainComponent;
