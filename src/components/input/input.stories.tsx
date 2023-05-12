import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Input from "./input";
import { ChevronDown, MoreHorizontal, Search, X } from "react-feather";

const meta = {
  title: "Input",
  component: Input,
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    focusType: {
      options: ["none", "underline", "outline"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const DevStateful = (args) => {
  const [value, setValue] = useState<string>("");
  const [focused, setFocused] = useState(false);
  return (
    <Input
      value={value}
      onValueChange={setValue}
      placeholder="Input"
      focused={focused}
      toggleFocused={() => setFocused((state) => !state)}
      preIcon={(theme) => (
        <Search
          size={16}
          color={theme == "light" ? "rgb(125, 129, 136)" : "rgb(154, 160, 166)"}
        />
      )}
      postIcon={(theme) => (
        <X
          size={16}
          color={theme == "light" ? "rgb(125, 129, 136)" : "rgb(154, 160, 166)"}
        />
      )}
      {...args}
    />
  );
};

const Dev = {
  args: {
    disabled: false,
    focusType: "outline",
    theme: "light",
  },
  render: (args) => <DevStateful {...args} />,
} satisfies Story;
export { Dev };
