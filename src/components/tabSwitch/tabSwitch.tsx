import React from "react";
import "./tabSwitch.scss";
import useTabSwitch from "./useTabSwitch";
import { Options } from "./types";
import { Prettier } from "../../typeUtils";
import { Theme } from "@/types";

// Layout orientation of the tabSwitch, default to horizontal;
type TabSwitchType = "horizontal" | "vertical";

interface TabSwitchStyles {
  width?: string;
  height?: string;
}
interface TabSwitchAction {
  className?: string;
  theme: Theme;
  type?: TabSwitchType;
  options: Options;
  onOptionSwitch?: (string: TabSwitchAction["options"][number]) => void;
}

type TabSwitchProps = Prettier<TabSwitchStyles & TabSwitchAction>;

const buildStyles = (styles: TabSwitchStyles) => {
  const keys = Object.keys(styles) as (keyof TabSwitchStyles)[];
  const obj: Record<string, string> = {};
  for (const key of keys) {
    if (styles[key] === undefined) continue;
    obj[key] = styles[key] as string;
  }
  return obj;
};
const TabSwitch = ({
  options,
  onOptionSwitch,
  className,
  type = "horizontal",
  width,
  height,
  theme = "light",
}: TabSwitchProps) => {
  const [selected, setSelected] = useTabSwitch({ options });

  const handleSelectOption = (option: string) => {
    onOptionSwitch?.(option);
    setSelected(option);
  };
  return (
    <div
      className={["tab-switch", `tab-switch-${type}`, className].join(" ")}
      style={buildStyles({ width: width, height: height })}
      data-theme={theme}
    >
      {options.map((option: string, i) => (
        <p
          className={[
            "tab-swtich__option",
            `tab-swtich__option-${type}`,
            selected === i ? "tab-swtich__option-selected" : "",
          ].join(" ")}
          key={i}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default TabSwitch;
export type { TabSwitchType };
