import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Icon from "./icon";
import { X } from "react-feather";

const meta = {
  title: "Icon",
  component: Icon,
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    size: 16,
    Content: X,
  },
};

export { Primary };
