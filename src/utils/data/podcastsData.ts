import { nanoid } from 'nanoid';

const podcasts: Podcasts[] = [
  {
    id: 'id-podcast-pertama',
    title: '1 Menit Bincang Pintar Bersama Smart Nation',
    description: '',
    sourceImageUrl: '',
    sourceAudioUrl: '',
    sourceVidioUrl: '',
    timestamp: new Date(),
  },
  {
    id: 'id-podcast-kedua',
    title: 'Judul podcast kedua',
    description: '',
    sourceImageUrl: '',
    sourceAudioUrl: '',
    sourceVidioUrl: '',
    timestamp: new Date(),
  },
  {
    id: 'id-podcast-ketiga',
    title: 'Judul podcast ketiga',
    description: '',
    sourceImageUrl: '',
    sourceAudioUrl: '',
    sourceVidioUrl: '',
    timestamp: new Date(),
  },
];

const playlist: Playlist[] = [
  {
    id: 'id-podcast-playlist',
    podcastId: 'id-podcast-pertama',
    Podcasts: [
      {
        id: nanoid(16),
        title: 'Judul playlist pertama',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
      {
        id: nanoid(16),
        title: 'Judul playlist kedua',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
      {
        id: nanoid(16),
        title: 'Judul playlist ketiga',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
    ],
    timestamp: new Date(),
  },
  {
    id: 'id-podcast-playlist',
    podcastId: 'id-podcast-kedua',
    Podcasts: [
      {
        id: nanoid(16),
        title: 'Judul playlist pertama',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
      {
        id: nanoid(16),
        title: 'Judul playlist kedua',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
      {
        id: nanoid(16),
        title: 'Judul playlist ketiga',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
    ],
    timestamp: new Date(),
  },
  {
    id: 'id-podcast-playlist',
    podcastId: 'id-podcast-ketiga',
    Podcasts: [
      {
        id: nanoid(16),
        title: 'Judul playlist pertama',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
      {
        id: nanoid(16),
        title: 'Judul playlist kedua',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
      {
        id: nanoid(16),
        title: 'Judul playlist ketiga',
        description: '',
        sourceImageUrl: '',
        sourceAudioUrl: '',
        sourceVidioUrl: '',
        timestamp: new Date(),
      },
    ],
    timestamp: new Date(),
  },
];

export { podcasts, playlist };
