import React from "react";

import "./icon.scss";
import { Color } from "@/colors";
import { cls } from "@koido/cls";

type FocusType = "backdrop" | "none";

type IconProps = {
  className?: string;
  size: number;
  focusType?: FocusType;
  focusColor?: Color;
  focused?: boolean;
  backdropRadius?: number;
  onClick?: () => void;
  Content?: React.FunctionComponent;
};

const Icon = ({
  className,
  size,
  focusType = "none",
  focusColor = "transparent",
  backdropRadius,
  focused,
  Content,
}: IconProps) => {
  const hasContent = Content !== undefined;
  return (
    <div
      className={cls(
        "icon",
        "centered",
        focused && "icon-focused",
        `icon-focus-${focusType}`,
        className
      )}
      data-size={size}
      {...(focusColor && { "data-focus-color": focusColor })}
      {...(backdropRadius && { "data-backdrop-radius": backdropRadius })}
      // data-focus-color={focusColor}
    >
      {hasContent && <Content />}
    </div>
  );
};

export default Icon;
