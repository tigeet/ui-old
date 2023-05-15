import { Meta, StoryObj } from "@storybook/react";
import Radio from "./radio";

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs", "@docs"],
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: { theme: "dark" },
};

export { Primary };
