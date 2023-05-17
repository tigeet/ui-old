import { Meta, StoryObj } from "@storybook/react";
import TabSwitch, { TabSwitchType } from "./tabSwitch";

const meta = {
  title: "Tab Switcher",
  component: TabSwitch,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  }, // ???
} satisfies Meta<typeof TabSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;
const Primary: Story = {
  args: {
    options: ["option 1", "option 2", "opt3"],
    type: "horizontal" satisfies TabSwitchType,
    width: "min-content",
    theme: "dark",
    onOptionSwitch: (option) => console.log(option),
  },
};

export { Primary };
