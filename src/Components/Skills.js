import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { Title, ElementPadding } from "../GlobalStyledComponents";
import Skill from "./Skill";
import axios from "axios";
import Chart from "react-apexcharts";
import { useState } from "react";
import styled from "styled-components/macro";

const SkillTitle = styled.div`
  font-size: 1.25em;
  margin-bottom: 10px;
  font-weight: 400;
  text-align: center;
  margin-top: 75px;
`;

const ChartSpacing = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const Skills = (props) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    getBadges();
  }, []);

  const getBadges = async () => {
    try {
      const { data } = await axios.get(
        "https://teamtreehouse.com/stephaniepops.json"
      );
      const courses = Object.entries(data.points).filter(
        (topic) => topic[1] > 0
      );

      setChart({
        series: courses.map((topic) => topic[1]),

        options: {
          theme: {
            mode: "light",
            palette: "palette5",
            monochrome: {
              enabled: false,
              color: "#255aee",
              shadeTo: "light",
              shadeIntensity: 0.65,
            },
          },
          chart: {
            width: 100,
            type: "pie",
          },
          labels: courses.map((topic) => topic[0]),
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
        {/* <SkillTitle> Team Treehouse Tutorial Points</SkillTitle> */}
        {/* <ChartSpacing>
          {chart && (
            <Chart
              options={chart.options}
              series={chart.series}
              type="pie"
              width={500}
            />
          )}
        </ChartSpacing> */}
      </Element>
    </ElementPadding>
  );
};

export default Skills;
