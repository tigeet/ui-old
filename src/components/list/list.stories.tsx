import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import List from "./list";
import { Figma, Facebook, Globe } from "react-feather";
import ListItem from "../listItem/listItem";
import { withSelect } from "@/storybookUtils/withSelect";

const meta = {
  title: "List",
  component: List,
  argTypes: {
    theme: withSelect(["light", "dark"]),
    direction: withSelect(["horizontal", "vertical"]),
    focusType: withSelect(["fill", "outline", "none"]),
    rounded: withSelect(["top", "bottom", "all", "none"]),
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    theme: "light",
    direction: "vertical",
    rounded: "none",
    focusType: "fill",
    items: [
      { value: "Figma", Icon: Figma },
      { value: "Facebook", Icon: Facebook },
      { value: "Delivery", Icon: Globe },
    ],
  },
};

export { Primary };
