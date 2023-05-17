import React from "react";

import "./icon.scss";
import { Color } from "@/colors";
import { cls } from "@koido/cls";
import { Size, Theme } from "@/types";

type FocusType = "backdrop" | "none";
type Shape = "square" | "circle" | "rounded";
type IconProps = {
  className?: string;
  shape?: Shape;
  size?: Size;
  focusType?: FocusType;
  focusColor?: Color;
  theme?: Theme;
  focused?: boolean;
  backdropRadius?: number;
  onClick?: () => void;
  Content?: React.FunctionComponent;
};

const Icon = ({
  className,
  shape = "rounded",
  size = "medium",
  focusType = "none",
  theme = "light",
  focusColor = "transparent",
  backdropRadius,
  focused = false,
  Content,
}: IconProps) => {
  const hasContent = Content !== undefined;
  return (
    <div
      className={cls(
        "icon",
        className,
        "centered",
        `icon-${size}`,
        `icon-${shape}`,
        focused && "icon-focused",
        `icon-focus-${focusType}`
      )}
      data-theme={theme}
      {...(focusColor && { "data-focus-color": focusColor })}
      {...(backdropRadius && { "data-backdrop-radius": backdropRadius })}
      // data-focus-color={focusColor}
    >
      {hasContent && <Content />}
    </div>
  );
};

export default Icon;
