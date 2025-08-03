"use client";

import { useEffect } from "react";

interface Event {
  type: "click" | "impression" | "page_view";
  data: object;
}

type LogProps = {
  events: Event[];
} & React.HTMLProps<HTMLDivElement>;

export function Log({ events, style, children, ...props }: LogProps) {
  // derived
  const clickEvents = events.filter((event) => event.type === "click");
  const pageViewEvents = events.filter((event) => event.type === "page_view");

  // effects
  useEffect(() => {
    pageViewEvents.forEach((event) => {
      console.log("Page view event", event.data);
    });
  }, [pageViewEvents]);

  // actions
  function handleClick() {
    clickEvents.forEach((event) => {
      console.log("Click event", event.data);
    });
  }

  return (
    <div onClick={handleClick} style={style} {...props}>
      {children}
    </div>
  );
}
