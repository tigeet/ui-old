import React, { useEffect, useRef } from "react";
import { cls } from "@koido/cls/dist/src/cls";
import "./input.scss";
import { Search } from "react-feather";

type Theme = "light" | "dark";
type FocusType = "underline" | "none" | "outline";
interface InputProps {
  value: string;
  focusType?: FocusType;
  onValueChange?: (value: string) => void;
  focusable?: boolean;
  disabled?: boolean;
  focused?: boolean;
  toggleFocused?: () => void;
  type?: string;
  placeholder?: string;
  theme?: Theme;
  onSubmit?: (value: string) => void;
  preIcon?: (theme: Theme) => React.ReactNode;
  postIcon?: (theme: Theme) => React.ReactNode;
}
const Input = ({
  value,
  focusType = "none",
  theme = "light",
  onValueChange,
  focusable = true,
  disabled = false,
  focused = false,
  toggleFocused,
  type = "text",
  placeholder = "",
  onSubmit,
  preIcon,
  postIcon,
}: InputProps) => {
  const handleBlur = (e: React.FocusEvent) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    focused && toggleFocused?.();
  };
  const handleFocus = () => {
    !focused && toggleFocused?.();
  };
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onValueChange?.(e.target.value ?? "");
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) =>
    onSubmit?.(e.target.value ?? "");
  const hasPreIcon = Boolean(preIcon);
  const hasPostIcon = Boolean(postIcon);
  const displayIcon = hasPreIcon || hasPostIcon;
  return (
    <div
      // className="input"
      className={cls("input", {
        "input-focused": focused,
        "focus-outline": focusType === "outline",
        "focus-none": focusType === "none",
      })}
      tabIndex={0}
      data-theme={theme}
    >
      <section
        className={cls(
          "input__input-row",
          "spaced",
          "input__input-row-with-icons"
        )}
      >
        {hasPreIcon && (
          <div className="input__icon input__icon-pre">
            {preIcon && preIcon(theme)}
          </div>
        )}
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={type}
          className="input__input"
          value={value}
          placeholder={placeholder}
          readOnly={!focused}
          onChange={handleValueChange}
          onSubmit={handleSubmit}
        />
        {hasPostIcon && (
          <div className="input__icon input__icon-post">
            {postIcon && postIcon(theme)}
          </div>
        )}
      </section>
      {focusType === "underline" && (
        <div
          className={[
            "input__underline",
            `input__underline-${focused ? "visible" : "hidden"}`,
          ].join(" ")}
        />
      )}
    </div>
  );
};

export default Input;
export type { InputProps };
