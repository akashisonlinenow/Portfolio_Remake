export interface CalendarDataType {
  date: string;
  count: number;
  level: number;
}
export interface AboutPortalProps {
  Select: CalendarDataType | null;
}

export type PositionType = { x: number; y: number };
