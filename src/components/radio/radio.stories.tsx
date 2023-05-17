import { Meta, StoryObj } from "@storybook/react";
import Radio from "./radio";
import { withSelect } from "@/storybookUtils/withSelect";

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs", "@docs"],
  argTypes: {
    theme: withSelect(["light", "dark"]),
    size: withSelect(["large", "medium", "small"]),
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: { theme: "dark", size: "medium" },
};

export { Primary };
