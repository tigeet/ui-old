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
    PreIcon: {
      control: false,
    },
    PostIcon: {
      control: false,
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
      PreIcon={Search}
      PostIcon={X}
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
