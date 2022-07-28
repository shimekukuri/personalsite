import React from "react";
import "./Container.css";
import clsx from "clsx";

export default function Container(props) {
  const { children, classes, innerClasses, ...rest } = props;
  const classForStyles = clsx("flex-center", [classes].includes("first-container") ? "first-container" : "container");
  const innerContainerStyles = clsx("inner-container","border-radi", innerClasses ?? "")
 

  return (
    <>
      <div
        className={classForStyles}
      >
        <div className={innerContainerStyles}>{children}</div>
      </div>
    </>
  );
}
