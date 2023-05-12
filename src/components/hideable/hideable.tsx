import React, { useEffect, useRef } from "react";
import "./hideable.scss";
import { Eye, EyeOff } from "react-feather";

type Theme = "dark" | "light";
interface HideableProps {
  theme?: Theme;
  value: string;
  visible: boolean;
  focused?: boolean;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  toggleVisible?: () => void;
  toggleFocused?: () => void;
}

const Hideable = ({
  theme = "dark",
  value,
  visible,
  focused = false,
  placeholder = "",
  onValueChange,
  toggleVisible,
  toggleFocused,
}: HideableProps) => {
  const handleBlur = (e: React.FocusEvent) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    focused && toggleFocused?.();
  };
  const handleFocus = (e) => {
    !focused && toggleFocused?.();
  };
  const displayVisibilitySwitch = toggleVisible !== undefined;
  return (
    <div tabIndex={0} className="hideable" data-theme={theme}>
      <div className="hideable__input-wrapper">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={visible ? "text" : "password"}
          className="hideable__input cursor-pointer"
          value={value}
          placeholder={placeholder}
          readOnly={!focused}
          onChange={(e) => onValueChange?.(e.target.value)}
        />
        <div
          className={[
            "hideable__underline",
            `hideable__underline-${focused ? "visible" : "hidden"}`,
          ].join(" ")}
        />
      </div>
      {displayVisibilitySwitch && (
        <div
          className="hideable__visibility-switch centered"
          onClick={toggleVisible}
        >
          {visible ? (
            <Eye
              size={16}
              color={
                theme == "light" ? "rgb(125, 129, 136)" : "rgb(154, 160, 166)"
              }
            />
          ) : (
            <EyeOff
              size={16}
              color={
                theme == "light" ? "rgb(125, 129, 136)" : "rgb(154, 160, 166)"
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Hideable;
