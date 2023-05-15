import React from "react";
import { cls } from "@koido/cls";
import "./input.scss";
import { Icon } from "react-feather";
import { Dark, Light } from "@/colors";
import { Theme } from "@/types";
const mapThemeToColor = (theme: Theme): string => {
  return theme === "light" ? Light.colorSecondary : Dark.colorSecondary;
};
type FocusType = "underline" | "none" | "outline";
type InputProps = {
  className?: string;
  value: string;
  focusType?: FocusType;
  onValueChange?: (value: string) => void;
  // focusable?: boolean;
  disabled?: boolean;
  focused?: boolean;
  toggleFocused?: () => void;
  type?: string;
  placeholder?: string;
  theme?: Theme;
  onSubmit?: (value: string) => void;
  PreIcon?: Icon;
  PostIcon?: Icon;
};
const Input = ({
  className,
  value,
  focusType = "none",
  theme = "light",
  onValueChange,
  disabled = false,
  focused = false,
  toggleFocused,
  type = "text",
  placeholder = "",
  onSubmit,
  PreIcon,
  PostIcon,
}: InputProps) => {
  const handleBlur = (e: React.FocusEvent) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    focused && toggleFocused?.();
  };
  const handleFocus = () => {
    !disabled && !focused && toggleFocused?.();
  };
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onValueChange?.(e.target.value ?? "");
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) =>
    onSubmit?.(e.target.value ?? "");
  const hasPreIcon = PreIcon !== undefined;
  const hasPostIcon = PostIcon !== undefined;
  const displayIcon = hasPreIcon || hasPostIcon;
  return (
    <div
      className={cls("input", className, {
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
            {<PreIcon size={16} color={mapThemeToColor(theme)} />}
          </div>
        )}
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={type}
          className="input__input"
          value={value}
          placeholder={placeholder}
          readOnly={disabled || !focused}
          onChange={handleValueChange}
          onSubmit={handleSubmit}
        />
        {hasPostIcon && (
          <div className="input__icon input__icon-post">
            {<PostIcon size={16} color={mapThemeToColor(theme)} />}
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
