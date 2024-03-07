import { nanoid } from 'nanoid';
import generateCreateSlug from '../common/generateCreateSlug';

const parentCategories: Parent[] = [
  {
    id: '63b1',
    name: 'nasional',
    slug: 'nasional',
    description: '',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: 'c3fc',
    name: 'internasional',
    slug: 'internasional',
    description: '',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: 'acac',
    name: 'tema',
    slug: 'tema',
    description: '',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
];

const categories: Categories[] = [
  {
    id: '3789',
    name: 'Teknologi',
    slug: 'teknologi',
    description: 'Artikel kategori smart city membahasa seputar teknologi',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: 'c883',
    name: 'Kesehatan',
    slug: 'kesehatan',
    description: 'Artikel kategori smart city membahas seputar kesehatan',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '4ea9',
    name: 'Smart city',
    slug: 'smart-city',
    description: 'Artikel kategori smart city membahas seputar smart city',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '0c6d',
    name: 'Asia',
    slug: 'asia',
    description: 'Artikel internasional kategori smart city di wilayah asia',
    parentId: 'c3fc',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: 'b582',
    name: 'Pemerintahan',
    slug: 'pemerintahan',
    description: 'Artikel kategori smart city membahas seputar pemerintahan',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '9f92',
    name: 'Smart Nation 2022',
    slug: 'smartnation-2022',
    description:
      'Artikel kategori smart city membahas seputar Smart Nation 2022',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '8a9a',
    name: 'Artikel',
    slug: 'artikel',
    description: 'Artikel kategori smart city membahas seputar Artikel',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '3471',
    name: 'Berita',
    slug: 'berita',
    description: 'Artikel kategori smart city membahas seputar Berita',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: 'e6bf',
    name: 'Citiasia Inc',
    slug: 'citiasia-inc',
    description: 'Artikel kategori smart city membahas seputar Citiasia Inc',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '6233',
    name: 'Jawa',
    slug: 'jawa',
    description:
      'Artikel nasional kategori smart city membahas berita daerah Jawa',
    parentId: '63b1',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '3e4f',
    name: 'Sumatera',
    slug: 'sumatera',
    description:
      'Artikel nasional kategori smart city membahas berita daerah Sumatera',
    parentId: '63b1',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '2532',
    name: 'Kalimantan',
    slug: 'kalimantan',
    description:
      'Artikel nasional kategori smart city membahas berita daerah Kalimantan',
    parentId: '63b1',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '811c',
    name: 'Sulawesi',
    slug: 'sulawesi',
    description:
      'Artikel nasional kategori smart city membahas berita daerah Sulawesi',
    parentId: '63b1',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: 'e0e6',
    name: 'Papua',
    slug: 'papua',
    description:
      'Artikel nasional kategori smart city membahas berita daerah Papua',
    parentId: '63b1',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
  {
    id: '4fe0',
    name: 'Wawasan',
    slug: 'wawasan',
    description:
      'Artikel kategori smart city membahas seputar Wawasan dan referensi',
    parentId: 'acac',
    timestamp: '2024-02-29T06:21:53.390Z',
  },
];

export { categories, parentCategories };
