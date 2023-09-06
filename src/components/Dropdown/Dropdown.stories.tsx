import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./index";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "Dropdown",
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    title: "dropdown",
    options: ["option1", "option2"],
    changeOption: () => {},
  },
};
