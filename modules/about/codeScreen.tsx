import React, { useEffect, useState } from "react";
import Heading from "@components/heading/heading";
import GitHubCalendar from "react-github-calendar";
import styles from "./styles/Calendar.module.scss";
import { useDataContext } from "@context/dataLayer";
import HoverPortal, { CalendarDataType } from "./components/hoverPortal";

const Calendar = () => {
  const [Select, setSelect] = useState<CalendarDataType | null>(null);
  const currentWidth = useDataContext();

  const isMobile = currentWidth < 1024;
  return (
    <>
      <Heading title="Days I Code" style="small" />
      <div className={styles.container}>
        <a
          href={`https://github.com/${process.env.gitUser}`}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubCalendar
            blockSize={22}
            blockMargin={8}
            blockRadius={6}
            transformData={(e) => {
              return isMobile ? e.slice(196) : e;
            }}
            username={process.env.gitUser as string}
            eventHandlers={{
              onMouseEnter: (event) => (data) => {
                !isMobile ? setSelect(data) : null;
              },
              onMouseLeave: (event) => (data) => {
                !isMobile ? setSelect(null) : null;
              },
            }}
            theme={{
              level0: "hsl(223, 14%, 15%)",
              level1: "hsl(223, 14%, 35%)",
              level2: "hsl(223, 14%, 50%)",
              level3: "hsl(223, 14%, 65%)",
              level4: "hsl(223, 14%, 85%)",
            }}
            labels={
              isMobile
                ? { totalCount: "{{count}} contributions in last 6 Months" }
                : undefined
            }
          />
        </a>
        <HoverPortal Select={Select} />
      </div>
    </>
  );
};

export default Calendar;

//TODO: Checkout https://github-contributions-api.jogruber.de/v4/kingbael09
