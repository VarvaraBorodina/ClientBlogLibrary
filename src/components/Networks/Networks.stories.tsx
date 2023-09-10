import type { Meta, StoryObj } from "@storybook/react";

import { Networks } from "./index";

const meta: Meta<typeof Networks> = {
  component: Networks,
  title: "Networks",
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    linkedIn: "https://github.com/VarvaraBorodina",
    twitter: "https://github.com/VarvaraBorodina",
    facebook: "https://github.com/VarvaraBorodina",
    instagram: "https://github.com/VarvaraBorodina",
  },
};
