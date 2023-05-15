import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ListItem from "./listItem";
import { Activity } from "react-feather";

const meta = {
  title: "List Item",
  component: ListItem,
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    focusType: {
      options: ["fill", "outline", "none"],
      control: { type: "select" },
    },
    rounded: {
      options: ["top", "bottom", "all", "none"],
      control: { type: "select" },
    },
    Icon: {
      control: false,
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    value: "Hello world",
    theme: "light",
    focusType: "fill",
    rounded: "none",
    Icon: Activity,
  },
};

export { Primary };
