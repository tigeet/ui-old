import { Meta, StoryObj } from "@storybook/react";
import Table from "./table";

const meta = {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: {
    title: "My table",
    columns: ["№", "Name", "Age"],
    values: [
      [1, "Leo", 19],
      [2, "No name", 54],
    ],
  },
};

export { Primary };
