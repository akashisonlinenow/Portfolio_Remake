import React from "react";
import styles from "./styles/Home.module.scss";
import TimeData from "@data/timelineData";
import TimelineComponent from "./components/timeline";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <TimelineComponent data={TimeData} />
    </div>
  );
};

export default Timeline;
