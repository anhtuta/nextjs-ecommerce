// import React from "react";
// import "./FlexRow.scss";

export default function FlexRow({ children, customClass = "", equalColumns = true, responsiveColumns = true }) {
  const clazz =
    "flex-row" +
    (equalColumns ? " equal-columns" : "") +
    (responsiveColumns ? " responsive-columns" : "") +
    (customClass ? ` ${customClass}` : "");
  return <div className={clazz}>{children}</div>;
}

export function Column({ children, customClass = "" }) {
  return <div className={`flex-row-col ${customClass ? customClass : ""}`}>{children}</div>;
}
