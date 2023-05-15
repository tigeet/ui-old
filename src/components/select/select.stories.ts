import { Meta, StoryObj } from "@storybook/react";
import Select from "./select";

const meta = {
  title: "Select",
  component: Select,
  argTypes: {
    mode: {
      options: ["single", "multi"],
      control: { type: "select" },
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;
const Primary: Story = {
  args: {
    mode: "single",
    label: "Single select",
    theme: "light",
    isClearable: true,
    isSearchable: false,
    options: [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
      { id: "3", label: "Option 3" },
    ],
  },
};

export default meta;
export { Primary };
