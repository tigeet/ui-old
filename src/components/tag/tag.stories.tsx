import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Tag from "./tag";
import { X } from "react-feather";

const meta = {
  title: "Tag",
  component: Tag,
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    shape: {
      options: ["rectangle", "rounded"],
      control: { type: "select" },
      defaultValue: "rectangle",
    },
    type: {
      options: ["outlined", "filled"],
      control: { type: "select" },
      defaultValue: "outlined",
    },
    Icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    value: "Hello world",
    theme: "light",
    shape: "rectangle",
    type: "outlined",
    Icon: X,
  },
};

export { Primary };
