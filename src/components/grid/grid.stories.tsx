import { Meta, StoryObj } from "@storybook/react";
import Grid from "./grid";

const meta = {
  title: "Grid",
  component: Grid,
  tags: ["autodocs", "@docs"],
  args: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {},
};

export { Primary };
