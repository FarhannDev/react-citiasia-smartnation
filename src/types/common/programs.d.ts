interface Programs {
  id: string | number;
  slug: string;
  name: string;
  description: string;
  sourceImageUrl: string;
  timestamp: Date;
}

interface ProgramsPlaylist {
  id: string | number;
  programId: string;
  programs: Programs[];
  timestamp: Date;
}
