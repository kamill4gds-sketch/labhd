/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrushIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrushIcon(props: BrushIconProps) {
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
        d={"M20 216h72a52 52 0 10-52-52c0 36-20 52-20 52z"}
        stroke={"currentColor"}
        strokeWidth={"16"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M112.407 116.159c19.194-25.868 68.027-85.13 112.564-85.13 0 44.537-59.261 93.369-85.129 112.563m-6.881-52.946a84.409 84.409 0 0132.393 32.393"
        }
        stroke={"currentColor"}
        strokeWidth={"16"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrushIcon;
/* prettier-ignore-end */
