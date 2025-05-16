import { flexRow, flexEqualColumns, flexResponsiveColumns, flexRowCol } from "./FlexRow.module.scss";

export default function FlexRow({ children, customClass = "", equalColumns = true, responsiveColumns = true }) {
  const classes = [
    flexRow,
    equalColumns ? flexEqualColumns : "",
    responsiveColumns ? flexResponsiveColumns : "",
    customClass ? customClass : "",
  ].join(" ");
  return <div className={classes}>{children}</div>;
}

export function Column({ children, customClass = "" }) {
  return <div className={`${flexRowCol} ${customClass ? customClass : ""}`}>{children}</div>;
}
