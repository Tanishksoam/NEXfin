// VisitorCounter.js

import React, { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/visitor-count");
        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.visitorCount);
        } else {
          console.error("Failed to fetch visitor count");
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <h2 className="text-3xl text-[#9BE36D] font-bold font-bodyFont">
      {visitorCount}
    </h2>
  );
};

export default VisitorCounter;
