import styles from "./styles/Calendar.module.scss";
import Heading from "@components/heading";
import Component from "@layout/componentTransition";
import HoverPortal from "./components/hoverPortal";
import GitHubCalendar from "react-github-calendar";
import { useState } from "react";
import { useDataContext } from "@context/dataLayer";
import type { CalendarDataType } from "types/aboutPageType";

const Calendar = () => {
  const [Select, setSelect] = useState<CalendarDataType | null>(null);
  const isMobile = useDataContext().device !== "lg";

  return (
    <>
      <Heading title="Days I Code" type="small" />
      <Component className={styles.container}>
        <a
          href={`https://github.com/${
            process.env.NEXT_PUBLIC_GITHUB_USERNAME || "KingBael09"
          }`}
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
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME || "KingBael09"}
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
              isMobile ? { totalCount: "{{count}} contributions" } : undefined
            }
          />
        </a>
        <HoverPortal Select={Select} />
      </Component>
    </>
  );
};

export default Calendar;

// ? Checkout https://github-contributions-api.jogruber.de/v4/kingbael09
