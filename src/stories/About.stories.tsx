import type { Meta, StoryObj } from '@storybook/react';
import AboutTeamItem from '../components/modules/about/AboutTeamItem';

const meta: Meta = {
  component: AboutTeamItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutTeamItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSourceImage: Story = {
  storyName: 'About',
  args: {
    name: 'Dr. Ir. Cahyana Ahmadjayadi',
    jobs: 'Co-Founder & Chairman',
    introduction:
      'Dr. Cahyana pernah menjadi pejabat eselon satu di 3 kementrian( Kementrian Otda, Kemendagri, Kominfo), pernah menjadi direktur dan komisaris di beberapa BUMN dan perusahaan swasta (PT. Pos, Bank Mandiri, Lintas Artha), dan seorang figur terkemuka di bidang TIK. Dr. Cahyana merupakan lulusan Insitut Teknologi Bandung yang mengambil Doktor di bidang Cyber Security.',
    sourceImageUrl: '/images/smartnation/teams/cs_teams_82e7.png',
  },
};
