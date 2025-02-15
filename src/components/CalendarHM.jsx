import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Heatmap = () => {
  const today = new Date();

  // Example data: Array of objects with dates and intensity values
  const data = [
    { date: "2024-02-10", count: 1 },
    { date: "2024-02-11", count: 3 },
    { date: "2024-02-12", count: 5 },
    // More data here...
  ];

  return (
    <CalendarHeatmap
      startDate={new Date(today.getFullYear(), today.getMonth(), 1)}
      endDate={today}
      values={data}
      classForValue={(value) => {
        if (!value) return "color-empty";
        return `color-scale-${value.count}`;
      }}
      tooltipDataAttrs={(value) => ({
        "data-tip": `${value.date} has ${value.count} events`,
      })}
    />
  );
};

export default Heatmap;
