/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarIcon(props: StarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M239.166 97.411a16.373 16.373 0 00-14.531-11.367l-59.391-4.156-22.031-55.477a16.327 16.327 0 00-15.219-10.414h-.016a16.325 16.325 0 00-15.187 10.414l-22.36 55.797-59.062 3.836a16.37 16.37 0 00-14.531 11.367 16.682 16.682 0 005.156 18.063l45.438 38.406-13.516 53.164a18.374 18.374 0 007.016 19.516 17.828 17.828 0 0020.062.625l46.875-29.696c.063-.047.125-.078.266 0l50.437 31.953a16.14 16.14 0 0018.203-.562 16.648 16.648 0 006.36-17.68l-14.36-58.078 45.235-37.648a16.684 16.684 0 005.156-18.063z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
