import type { Meta, StoryObj } from "@storybook/react";

import { Category } from "./index";
import { ICONS } from "../../constants/icons";

const { FACEBOOK } = ICONS;

const meta: Meta<typeof Category> = {
  component: Category,
  title: "Category",
};
type Story = StoryObj<typeof meta>;

export default meta;

const category = {
  id: 4,
  name: "Business",
  icon: "BUSINESS",
  description: "Business description",
};

export const Base: Story = {
  args: {
    category,
    full: false,
    icon: FACEBOOK,
  },
};

export const FullCategory: Story = {
  args: {
    category,
    full: true,
    icon: FACEBOOK,
  },
};
