/* eslint-disable @typescript-eslint/no-explicit-any */

import ArticleColumnItem from './ArticleColumnItem';

// type PostsArticleColumnItemListProps = { posts: Object[] };

const ArticleColumnItemList = ({ posts }: any) =>
  posts?.map((post: any) => <ArticleColumnItem key={post.id} {...post} />);

export default ArticleColumnItemList;
