import { cls } from "@koido/cls";
import React from "react";
import { Dark, Light } from "@/colors";
import "./tag.scss";
import { Icon } from "react-feather";
import { Theme } from "@/types";

const mapStyleToColor = (theme: Theme, type: TagType): string => {
  if (type === "filled") {
    return theme == "light" ? Light.colorPrimary : Dark.colorPrimary;
  }

  if (type === "outlined") {
    return theme == "light" ? Light.colorAccent : Dark.colorAccent;
  }
  return "";
};

type TagShape = "rectangle" | "rounded";
type TagType = "outlined" | "filled";

type TagProps = {
  className?: string;
  type?: TagType;
  theme: Theme;
  value: string;
  shape?: TagShape;
  onClick?: (value: string) => void;
  onIconClick?: () => void;
  // icon?: (theme: Theme, type: TagType) => React.ReactNode;
  Icon?: Icon;
};

const Tag = ({
  className,
  value,
  shape = "rounded",
  type = "filled",
  theme,
  Icon,
  onIconClick,
}: TagProps) => {
  const displayIcon = Icon !== undefined;
  return (
    <div
      className={cls("tag", "spaced", className, `tag-${type}`, `tag-${shape}`)}
      data-theme={theme}
    >
      <p className="tag__value">{value}</p>
      {displayIcon && (
        <div className="tag__icon centered" onClick={() => onIconClick?.()}>
          <Icon size={16} color={mapStyleToColor(theme, type)} />
        </div>
      )}
    </div>
  );
};
export default Tag;
export type { TagProps };
