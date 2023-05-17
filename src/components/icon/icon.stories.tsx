import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Icon from "./icon";
import { X } from "react-feather";
import icon1 from "@assets/2af7b703ceb162244f5c1fb83b722db4.jpg";
import icon2 from "@assets/4b53be184a0a7f2f80fcf63d0b58a365.jpg";
import icon3 from "@assets/eye.svg";
import { withSelect } from "@/storybookUtils/withSelect";
const meta = {
  title: "Icon",
  component: Icon,
  argTypes: {
    size: withSelect(["small", "medium", "large"]),
    shape: withSelect(["square", "circle", "rounded"]),
    Content: withSelect([icon1, icon2, icon3]),
    theme: withSelect(["light", "dark"]),
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    size: "medium",
    Content: icon1,
    // Content: icon1,
  },
};

export { Primary };
