import React from "react";
import { useState } from "react";
import "./tabSwitch.scss";

// Layout orientation of the tabSwitch, default to horizontal;
type TabSwitchType = "horizontal" | "vertical";

interface TabSwitchStyles {
  width?: string;
  height?: string;
}
interface TabSwitchAction {
  className?: string;
  type?: TabSwitchType;
  options: [string, string];
  onOptionSwitch?: (string: TabSwitchAction["options"][number]) => void;
}

type TabSwitchProps = TabSwitchStyles & TabSwitchAction;
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
}: TabSwitchProps) => {
  const [selected, setSelected] = useState<number>(0);

  const handleSelectOption = (i: number) => {
    onOptionSwitch?.(options[i]);
    setSelected(i);
    console.log(":))");
  };
  return (
    <div
      className={["tab-switch", `tab-switch-${type}`, className].join(" ")}
      style={buildStyles({ width: width, height: height })}
    >
      {options.map((option, i) => (
        <>
          <p
            className={[
              "tab-swtich__option",
              `tab-swtich__option-${type}`,
              selected === i ? "tab-swtich__option-selected" : "",
            ].join(" ")}
            key={i}
            onClick={() => handleSelectOption(i)}
          >
            {option}
          </p>
          {/* {i < options.length - 1 && (
            <div className={`tab-swtich__separator-${type}`} />
          )} */}
        </>
      ))}
    </div>
  );
};

export default TabSwitch;
export type { TabSwitchType };
