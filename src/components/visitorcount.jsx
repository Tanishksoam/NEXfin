// VisitorCounter.js

import React, { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  useEffect(() => {
    animateValue("value", 0, visitorCount + 128, 2000);
  }, []);

  return (
    <h2 id="value" className="text-3xl text-[#9BE36D] font-bold font-bodyFont">
      {visitorCount + 50} +
    </h2>
  );
};

export default VisitorCounter;
