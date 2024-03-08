// Interface untuk merepresentasikan kategori program
interface ProgramCategory {
  id: string | number;
  slug: string;
  name: string;
  description: string | null;
  sourceImageUrl: string | null;
  timestamp: Date;
}
// Interface untuk merepresentasikan subkategori program
interface ProgramSubCategory {
  id: string | number;
  programCategoryId: string | number;
  slug: string;
  name: string;
  description: string | null;
  sourceImageUrl: string | null;
  timestamp: Date;
}
// Interface untuk merepresentasikan program
interface Program {
  id: string | number;
  slug: string;
  title: string;
  publishDate: Date;
  sourceImageUrl: string;
  status: string;
  excerpt: string;
  categories: Array[];
  content: string;
  views: number;
  timestamp: Date;
}
