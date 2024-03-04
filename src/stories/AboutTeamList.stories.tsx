import type { Meta, StoryObj } from '@storybook/react';
import AboutTeamItemList from '../components/modules/about/AboutTeamItemList';
import AboutTeamItem from '../components/modules/about/AboutTeamItem';

const meta: Meta = {
  component: AboutTeamItemList,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutTeamItemList>;

export default meta;

type Story = StoryObj<typeof meta>;

//👇 The ListTemplate construct will be spread to the existing stories.
export const ListTemplate: Story = {
  render: ({ items, ...args }) => {
    return items.map((item) => <AboutTeamItem key={item.id} {...item} />);
  },
};

export const Empty = {
  ...ListTemplate,
  args: {
    items: [],
  },
};

export const OneItem = {
  ...ListTemplate,
  args: {
    items: [],
  },
};
