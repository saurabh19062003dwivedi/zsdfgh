import React, { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";


const ImageViewer = () => {
  const viewerInstance = useRef(null); // Store OpenSeadragon instance

  useEffect(() => {
    if (viewerInstance.current) return; // Prevent multiple initializations

    viewerInstance.current = OpenSeadragon({
      id: "openseadragon",
      tileSources: "https://openseadragon.github.io/example-images/duomo/duomo.dzi",
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      showNavigator: true,
    });

    return () => {
      if (viewerInstance.current) {
        viewerInstance.current.destroy(); // Cleanup memory
        viewerInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-bold">Findings</h2>
      <p className="text-sm text-gray-600">Details about the selected area will be shown here.</p>
      <h3 className="text-md font-semibold mt-2">Zoomed-out View</h3>
      <div
        id="openseadragon"
        style={{ height: "600px", width: "100%",   border: "1px solid black" }}
      ></div>
    </div>
  );
};

export default ImageViewer;
