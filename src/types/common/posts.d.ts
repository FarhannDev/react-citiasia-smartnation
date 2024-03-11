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
