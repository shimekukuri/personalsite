import React from "react";
import "./Container.css";
import clsx from "clsx";

export default function Container(props) {
  const { children, classes, ...rest } = props;
  const classForStyles = clsx("flex-center", [classes].includes("first-container") ? "first-container" : "container");

  //console.log(classForStyles);

  return (
    <>
      <div
        className={classForStyles}
      >
        <div className="inner-container">{children}</div>
      </div>
    </>
  );
}
