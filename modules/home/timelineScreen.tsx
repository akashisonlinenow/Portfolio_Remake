import React from "react";
import TimeData from "@data/timelineData";
import TimelineComponent from "./components/timeline";
import styles from "./styles/Home.module.scss";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <TimelineComponent data={TimeData} />
    </div>
  );
};

export default Timeline;
