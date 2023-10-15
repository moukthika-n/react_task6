import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Lorem
          </h3>
          <p>  ipsum dolor sit amet consectetur, adipisicing elit. Dolore, labore. A quidem deserunt dolorem
                                    aliquid ad maiores asperiores hic ipsum, molestiae aperiam provident officiis</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lorem
          </h3>

          <p className="vertical-timeline-element-subtitle">
          ipsum dolor sit amet consectetur, adipisicing elit. Dolore, labore. A quidem deserunt dolorem
                                    aliquid ad maiores asperiores hic ipsum, molestiae aperiam provident officiis
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;