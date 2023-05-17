import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Expandable from "./expandable";
import { Figma, Facebook, Globe } from "react-feather";
import ExpandableItem from "../ExpandableItem/ExpandableItem";
import { withSelect } from "@/storybookUtils/withSelect";

const meta = {
  title: "Expandable",
  component: Expandable,
  argTypes: {
    theme: withSelect(["light", "dark"]),
  },
} satisfies Meta<typeof Expandable>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    theme: "light",
    items: [
      { key: "Figma", value: "1" },
      { key: "Facebook", value: "2" },
      { key: "Apple", value: "3" },
    ],
  },
};

export { Primary };
