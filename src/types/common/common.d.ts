interface Posts {
  id: string | number;
  title: string;
  slug: string;
  publishDate: string;
  category: string[];
  status: string;
  comment_status: string;
  sourceImageUrl: string;
  excerpt: string;
  content: string;
  views: number;
  timestamp: string | null;
}

interface Categories {
  id: string | number;
  name: string;
  slug: string;
  description: string;
  parentId: string | null;
  timestamp: Date | string | null;
}

interface Partners {
  id: string | number;
  name: string;
  sourceImageUrl: string;
  timestamp: Date | string | null;
}

interface Teams {
  id: string | null;
  name: string;
  jobs: string;
  introduction: string;
  sourceImageUrl: string;
  timestamp: Date | string | null;
}

interface Subscribe {
  id: string;
  email: string;
  timestamp: Date | string | null;
}
