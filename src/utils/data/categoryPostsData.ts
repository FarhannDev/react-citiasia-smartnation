import { nanoid } from 'nanoid';
import generateCreateSlug from '../common/generateCreateSlug';

const categories: Categories[] = [
  {
    id: nanoid(16),
    name: 'Teknologi',
    slug: generateCreateSlug('teknologi'),
    description: 'Artikel kategori smart city membahasa seputar teknologi',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Kesehatan',
    slug: generateCreateSlug('kesehatan'),
    description: 'Artikel kategori smart city membahas seputar kesehatan',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Smart City',
    slug: generateCreateSlug('smart-city'),
    description: 'Artikel kategori smart city membahas seputar smart city',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Asia',
    slug: generateCreateSlug('asia'),
    description: 'Artikel internasional kategori smart city di wilayah asia',
    parentId: 'c3fc',
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Pemerintahan',
    slug: generateCreateSlug('pemerintahan'),
    description: 'Artikel kategori smart city membahas seputar pemerintahan',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Smart Nation 2022',
    slug: generateCreateSlug('smartnation-2022'),
    description:
      'Artikel kategori smart city membahas seputar Smart Nation 2022',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Artikel',
    slug: generateCreateSlug('artikel'),
    description: 'Artikel kategori smart city membahas seputar Artikel',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Berita',
    slug: generateCreateSlug('berita'),
    description: 'Artikel kategori smart city membahas seputar Berita',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Citiasia Inc',
    slug: generateCreateSlug('Citiasia Inc'),
    description: 'Artikel kategori smart city membahas seputar Citiasia Inc',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Jawa',
    slug: generateCreateSlug('Jawa'),
    description:
      'Artikel nasional kategori smart city membahas berita daerah Jawa',
    parentId: '63b1',
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Sumatera',
    slug: generateCreateSlug('sumatera'),
    description:
      'Artikel nasional kategori smart city membahas berita daerah Sumatera',
    parentId: '63b1',
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Kalimantan',
    slug: generateCreateSlug('kalimantan'),
    description:
      'Artikel nasional kategori smart city membahas berita daerah Kalimantan',
    parentId: '63b1',
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Sulawesi',
    slug: generateCreateSlug('sulawesi'),
    description:
      'Artikel nasional kategori smart city membahas berita daerah Sulawesi',
    parentId: '63b1',
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Papua',
    slug: generateCreateSlug('papua'),
    description:
      'Artikel nasional kategori smart city membahas berita daerah Papua',
    parentId: '63b1',
    timestamp: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Wawasan',
    slug: generateCreateSlug('wawasan'),
    description:
      'Artikel kategori smart city membahas seputar Wawasan dan referensi',
    parentId: null,
    timestamp: new Date().toISOString(),
  },
];

export { categories };
