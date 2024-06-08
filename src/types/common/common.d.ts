interface Posts {
  id: string | number;
  title: string;
  slug: string;
  publishDate: Date;
  categories: Array[];
  status: string;
  comment_status: string;
  sourceImageUrl: string;
  excerpt: string;
  content: string;
  views: number;
  timestamp: Date;
}

interface Parent {
  id: string | number;
  name: string;
  slug: string;
  description: string;
  description: '';
  timestamp: string;
}

interface Categories {
  id: string | number;
  name: string;
  slug: string;
  description: string;
  timestamp: Date | string | null;
  parentId: string;
}
interface Partners {
  id: string | number;
  name: string;
  sourceImageUrl: string;
  type: string;
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
