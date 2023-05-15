import { InputType } from "@storybook/types";

const withSelect = <T>(options: T[], defaultValue?: T): InputType => {
  const inputType: InputType = { options, control: { type: "select" } };
  return defaultValue ? { ...inputType, defaultValue } : inputType;
};

export { withSelect };
