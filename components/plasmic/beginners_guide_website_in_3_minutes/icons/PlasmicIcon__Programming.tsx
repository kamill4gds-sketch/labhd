/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProgrammingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProgrammingIcon(props: ProgrammingIconProps) {
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
        d={"M64 88l-48 40 48 40m128-80l48 40-48 40M160 40L96 216"}
        stroke={"currentColor"}
        strokeWidth={"16"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ProgrammingIcon;
/* prettier-ignore-end */
