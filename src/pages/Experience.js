import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import BookIcon from "@mui/icons-material/Book";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Krishnaveni Talent School, Sircilla</h3>
          <p>Secondary School Education, </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<BookIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Narayana Junior College, Hyderabad
          </h3>

          <p>Intermediate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<LibraryBooksIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            D.N.R College Of Engineering & Technology, Bhimavaram
          </h3>

          <p>B. Tech Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cloudseed Technologies, Kakinada
          </h3>

          <p>Software Engineer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
