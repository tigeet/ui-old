import React, { useCallback, useEffect, useRef, useState } from "react";
import "./select.scss";
import { cls } from "@koido/cls";
import type { Mode, Option } from "./types/types";
import useSelectedOptions, { ActionType } from "./hooks/useSelectedOptions";
import { ChevronDown, ChevronUp, X } from "react-feather";
import useClickOutside from "./hooks/useClickOutside";
import Tag from "../tag/tag";
import { Theme } from "@/types";

type SelectProps = {
  mode: Mode;
  theme: Theme;
  label: string;
  options: Array<Option>;
  isSearchable: boolean;
  isClearable: boolean;
};

type State = "visible" | "hidden";
const Select = (props: SelectProps) => {
  const [selectedOptions, dispatchSelectedOptions] = useSelectedOptions(
    props.mode
  );
  const [selectState, toggleSelectState] = useState<State>("hidden");
  // const [search, setSearch] = useState<string>("");
  const isClearDisabled = selectedOptions.length === 0;
  const headerRef = useRef<HTMLDivElement | null>(null);
  const handleToggleSelect = useCallback(() => {
    console.log("toggle");
    toggleSelectState((state) => (state === "hidden" ? "visible" : "hidden"));
  }, []);
  useEffect(() => {
    if (selectState === "visible") headerRef.current?.focus();
    else headerRef.current?.blur();
  }, [selectState]);
  const closeOptions = () => toggleSelectState("hidden");
  // useClickOutside({ onClick: closeOptions });
  const openOptions = () => toggleSelectState("visible");
  const handleSelectOption = (option: Option) => {
    if (selectedOptions.some((opt) => opt.id === option.id))
      dispatchSelectedOptions({ type: ActionType.REMOVE, payload: option });
    else {
      dispatchSelectedOptions({ type: ActionType.ADD, payload: option });
    }
  };
  const handleReset = () => {
    if (isClearDisabled) return;
    // closeOptions();
    dispatchSelectedOptions({ type: ActionType.CLEAR });
  };
  const displayLabel = selectedOptions.length === 0;
  return (
    <div className="select">
      <section
        className="select__header"
        ref={headerRef}
        tabIndex={0}
        onClick={handleToggleSelect}
      >
        {displayLabel ? (
          <p className="select__label">{props.label}</p>
        ) : props.mode === "single" ? (
          selectedOptions.at(0)?.label
        ) : (
          <section className="select__selected-options">
            {selectedOptions.map((option) => (
              <Tag
                value={option.label}
                type="filled"
                shape="rectangle"
                key={`selected-${option.id}`}
                theme={props.theme}
              />
            ))}
          </section>
        )}

        <section className="select__controls">
          {props.isClearable && (
            <div
              className={cls(
                "select__reset select__control",
                isClearDisabled && "select__reset-disabled"
              )}
              onClick={(e) => {
                e.stopPropagation();
                handleReset();
              }}
            >
              <X size={24} />
            </div>
          )}
          <div className="select__select-btn select__control">
            {selectState === "hidden" ? (
              <ChevronDown size={24} />
            ) : selectState === "visible" ? (
              <ChevronUp size={24} />
            ) : (
              <></>
            )}
          </div>
        </section>
      </section>
      <div className="select__options-wrapper">
        <section
          className={cls("select__options", `select__options-${selectState}`)}
        >
          {props.options.map((option: Option) => (
            <div
              key={`options-${option.id}`}
              className={cls(
                "select__option",
                selectedOptions.find((opt) => opt.id === option.id) &&
                  "select__option-selected"
              )}
              onClick={() => handleSelectOption(option)}
            >
              <p className="select__option-label">{option.label}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Select;
