import type { Meta, StoryObj } from "@storybook/react";

import { Author } from "./index";
import imageFile from "../../images/author.jpg";

const meta: Meta<typeof Author> = {
  component: Author,
  title: "Author",
};
type Story = StoryObj<typeof meta>;

export default meta;

const author = {
  id: 0,
  name: "Floyd",
  lastName: "Miles",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
  photo: imageFile,
  networks: {
    linkedIn: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
  },
};

export const Base: Story = {
  args: {
    author,
    role: "designer",
  },
};
