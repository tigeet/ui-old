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
const Visible = {
  args: {
    value: "qwerty1234",
    visible: true,
    theme: "light",
    toggleVisible: () => {
      null;
    },
  },
} satisfies Story;

const Hidden = {
  args: {
    value: "password1234",
    visible: false,
    theme: "light",
    toggleVisible: () => {
      null;
    },
  },
} satisfies Story;

const WithVisibilitySwitch = {
  args: {
    value: "qwerty1234",
    visible: true,
    theme: "light",
    toggleVisible: () => {
      null;
    },
  },
} satisfies Story;

const WithoutVisibilitySwitch = {
  args: {
    value: "qwerty1234",
    visible: true,
    theme: "light",
  },
} satisfies Story;

const Light = {
  args: {
    value: "password1234",
    visible: true,
    theme: "light",
    toggleVisible: () => {
      null;
    },
  },
} satisfies Story;

const Dark = {
  args: {
    value: "password1234",
    visible: true,
    theme: "dark",
    toggleVisible: () => {
      null;
    },
  },
} satisfies Story;

const Focused = {
  args: {
    value: "password1234",
    visible: true,
    focused: true,
    theme: "light",
    toggleVisible: () => {
      null;
    },
  },
} satisfies Story;

const Unfocused = {
  args: {
    value: "password1234",
    visible: true,
    focused: false,
    theme: "light",
    toggleVisible: () => {
      null;
    },
  },
} satisfies Story;

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
  } satisfies Partial<Args> as Args,
  render: (args) => <Stateful {...args} />,
} satisfies Story;

export {
  Visible,
  Hidden,
  WithVisibilitySwitch,
  WithoutVisibilitySwitch,
  Light,
  Dark,
  Focused,
  Unfocused,
  Dev,
};
