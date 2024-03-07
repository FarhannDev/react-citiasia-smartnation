import { nanoid } from 'nanoid';
import generateCreateSlug from '../common/generateCreateSlug';

const programs: Programs[] = [
  {
    id: nanoid(16),
    name: 'ISNA',
    slug: generateCreateSlug('ISNA'),
    description: 'PROGRAM KEGIATAN ISNA',
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    name: 'ISCIF',
    slug: generateCreateSlug('ISCIF'),
    description: 'PROGRAM KEGIATAN ISCIF',
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    name: 'Training',
    slug: generateCreateSlug('Training'),
    description: 'PROGRAM KEGIATAN PELATIHAN',
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
];

const programsPlaylist: ProgramsPlaylist[] = [
  {
    id: 'id-program-playlist',
    programId: 'id-program-isna',
    programs: [],
    timestamp: new Date(),
  },
];

export { programs, programsPlaylist };
