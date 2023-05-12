import React, { useEffect, useRef } from "react";
import "./hideable.scss";
import { Eye, EyeOff } from "react-feather";
import Input, { InputProps } from "../input/input";

type OwnProps = {
  toggleVisible?: () => void;
  visible: boolean;
};

type HideableProps = OwnProps & InputProps;
const Hideable = ({
  theme = "dark",
  value,
  visible,
  focused = false,
  placeholder = "",
  onValueChange,
  toggleVisible,
  toggleFocused,
  className,
  focusType = "none",
  disabled = false,
  type = "text",
  onSubmit,
}: HideableProps) => {
  const displayVisibilitySwitch = toggleVisible !== undefined;
  return (
    <div tabIndex={0} className="hideable" data-theme={theme}>
      <Input
        theme={theme}
        className="hideable__input cursor-pointer"
        onValueChange={onValueChange}
        focused={focused}
        toggleFocused={toggleFocused}
        type={visible ? "text" : "password"}
        value={value}
        focusType={focusType}
        placeholder={placeholder}
      />

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
