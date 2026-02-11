/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebookIcon(props: FacebookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 208 208"}
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
          "M104 200c53.019 0 96-42.981 96-96 0-53.02-42.981-96-96-96C50.98 8 8 50.98 8 104c0 53.019 42.98 96 96 96z"
        }
        stroke={"currentColor"}
        strokeWidth={"16"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M144 64h-16a24.002 24.002 0 00-24 24v112.001m-32-80h64"}
        stroke={"currentColor"}
        strokeWidth={"16"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FacebookIcon;
/* prettier-ignore-end */
