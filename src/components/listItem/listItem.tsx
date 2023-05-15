import { cls } from "@koido/cls";
import React from "react";
import { Dark, Light } from "@/colors";
import "./listItem.scss";
import { Icon } from "react-feather";
import { FocusType, Rounded, Theme } from "@/types";
import { implies } from "@/utils/boolean";

const mapStyleToColor = (theme: Theme): string => {
  return theme == "light" ? Light.colorPrimary : Dark.colorPrimary;
};

type ListItemData = {
  value: string;
  Icon?: Icon;
  displayIcon?: boolean;
};
type ListItemProps = {
  className?: string;
  theme: Theme;
  onClick?: (value: string) => void;
  focusType?: FocusType;
  rounded?: Rounded;
} & ListItemData;

const ListItem = ({
  className,
  value,
  theme,
  focusType = "fill",
  onClick,
  Icon,
  rounded = "none",
  displayIcon,
}: ListItemProps) => {
  const hasIcon = Icon !== undefined;
  return (
    <div
      className={cls(
        "list-item",
        "spaced",
        className,
        `list-item-${focusType}`,
        rounded && `list-item-rounded-${rounded}`
      )}
      data-theme={theme}
      onClick={() => onClick?.(value)}
    >
      {displayIcon && (
        <div className="list-item__icon centered">
          {hasIcon && <Icon size={16} color={mapStyleToColor(theme)} />}
        </div>
      )}
      <p className="list-item__value">{value}</p>
    </div>
  );
};

export default ListItem;
export type { ListItemProps, ListItemData };
