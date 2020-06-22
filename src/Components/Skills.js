import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { Title, ElementPadding } from "../GlobalStyledComponents";
import Skill from "./Skill";
import axios from "axios";
import Chart from "react-apexcharts";
import { useState } from "react";

const Skills = (props) => {
  const [chart, setChart] = useState(null);

  const [courseNames, setCourseNames] = useState(null);
  const [coursePoints, setCoursePoints] = useState(null);

  useEffect(() => {
    getBadges();
  }, []);

  const getBadges = async () => {
    try {
      const { data } = await axios.get(
        "https://teamtreehouse.com/stephaniepops.json"
      );

      let courseNames = [];
      let coursePoints = [];

      for (let [key, value] of Object.entries(data.points)) {
        if (value > 0) {
          courseNames.push(key);
          coursePoints.push(value);
        }
      }

      setCourseNames(courseNames);
      setCoursePoints(coursePoints);
      setChart({
        series: [
          {
            name: "Series 1",
            data: coursePoints,
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "radar",
          },
          title: {
            text: "Team Treehouse Tutorial Points",
          },
          xaxis: {
            categories: courseNames,
          },
        },
      });
    } catch (error) {}
  };

  return (
    <ElementPadding>
      <Element name="skills">
        <Title>Skills</Title>
        {props.skills.map((skill, index) => (
          <Skill {...skill} key={index} />
        ))}
        <Skill />
        {chart && (
          <Chart
            options={chart.options}
            series={chart.series}
            type="radar"
            height={350}
          />
        )}
      </Element>
    </ElementPadding>
  );
};

export default Skills;
