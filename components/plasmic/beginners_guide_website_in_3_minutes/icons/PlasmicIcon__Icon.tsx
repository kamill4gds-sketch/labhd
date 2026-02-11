/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M208 40h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8V48a8 8 0 00-8-8zM80 40H48a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8V48a8 8 0 00-8-8zm128 128h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm-128 0H48a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm-16 0V88m104 104H88M192 88v80M88 64h80"
        }
        stroke={"currentColor"}
        strokeWidth={"16"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
