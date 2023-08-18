import React from 'react'
import { qualifications } from "../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Qualification = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <VerticalTimeline>
        {qualifications &&
          qualifications.map((n) => (
            <VerticalTimelineElement
              key={n.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(21, 24, 31)",
                color: "#888",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(21, 24, 31)",
              }}
              date={n.date}
              iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#f0f0f0"
                  viewBox="0 0 256 256"
                >
                  <path d="M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"></path>
                </svg>
              }
            >
              <h3 className="vertical-timeline-element-title">{n.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {n.institute}
              </h4>
              <p>{n.description}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </section>
  );
}

export default Qualification
