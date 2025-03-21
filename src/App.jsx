import React from "react";
import ImageViewer from "./components/ImageViewer";
 
 
 
import MainComponent from "./components/MainComponent";


const App = () => {
  return (
    <div className="flex h-screen">
       
      <MainComponent></MainComponent>
    
     
      <div className="flex-1 relative">
        
        <ImageViewer  />

      </div>
       
        
    </div>
    
  );
};

export default App;
