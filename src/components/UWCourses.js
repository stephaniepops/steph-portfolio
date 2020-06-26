import React, { useEffect } from "react";
import { Title, ElementPadding } from "../GlobalStyledComponents";
import Chart from "react-apexcharts";
import { useState } from "react";
import { UWCourseList } from "../data/UserInfo";

const UWCourses = (props) => {
  const chart = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: UWCourseList.map((course) => course.language),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Chart
      options={chart.options}
      series={chart.series}
      type="pie"
      width={380}
    />
  );
};
export default UWCourses;
