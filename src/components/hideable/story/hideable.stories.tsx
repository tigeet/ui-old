import { Meta, StoryObj } from "@storybook/react";
import Hideable from "../hideable";
import React, { useRef, useState } from "react";

const meta = {
  title: "Hideable",
  component: Hideable,
  argTypes: {
    focusType: {
      options: ["none", "underline", "outline"],
      control: { type: "select" },
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Hideable>;
export default meta;
type Story = StoryObj<typeof meta>;
type Args = Story["args"];

const Stateful = (args: Partial<Args>) => {
  const [value, setValue] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [editable, setEditable] = useState<boolean>(false);
  const toggleVisible = () => setVisible((state) => !state);
  const toggleEditable = () => setEditable((state) => !state);
  return (
    <Hideable
      value={value}
      visible={visible}
      focused={editable}
      onValueChange={setValue}
      toggleVisible={toggleVisible}
      toggleFocused={toggleEditable}
      {...args}
    />
  );
};

const Dev = {
  args: {
    theme: "light",
    placeholder: "Password",
    focusType: "underline",
  } satisfies Partial<Args> as Args,
  render: (args) => <Stateful {...args} />,
} satisfies Story;

export { Dev };
