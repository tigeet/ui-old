import React, { useMemo } from "react";
import { FocusType, Rounded, Theme } from "@/types";

import "./list.scss";
import { ListItemData } from "../listItem/listItem";
import ListItem from "../listItem/listItem";
import { cls } from "@koido/cls";
type ListDirection = "vertical" | "horizontal";

type ListProps = {
  items: Array<ListItemData>;
  theme: Theme;
  className?: string;
  direction: ListDirection;
  rounded?: Rounded;
  separated?: boolean;
  focusType?: FocusType;
};

const List = ({
  theme,
  className,
  items,
  direction,
  rounded = "none",
  separated,
  focusType,
}: ListProps) => {
  const lastIndex = items.length - 1;
  const displayIcons = useMemo<boolean>(
    () =>
      items.reduce(
        (showIcon, item) => item.Icon !== undefined || showIcon,
        false
      ),
    [items]
  );
  return (
    <div
      className={cls(
        "list",
        `list-${direction}`,
        `list-rounded-${rounded}`,
        className
      )}
    >
      {items.map(({ value, Icon }: ListItemData, i: number) => (
        <ListItem
          focusType={focusType}
          key={`list-item-${value}`}
          theme={theme}
          value={value}
          Icon={Icon}
          displayIcon={displayIcons}
          rounded={itemRounded(rounded, i, 0, lastIndex)}
        />
      ))}
    </div>
  );
};

export default List;

const itemRounded = (
  listRounded: Rounded,
  i: number,
  from = 0,
  to: number
): Rounded => {
  if (!listRounded) return "none";

  if (listRounded === "top") return i === from ? "top" : "none";

  if (listRounded === "bottom") return i === to ? "bottom" : "none";

  if (listRounded === "all") {
    if (i === from && i === to) return "all";
    if (i === from) return "top";
    if (i === to) return "bottom";
  }

  return "none";
};
