/* eslint-disable @typescript-eslint/no-explicit-any */
import PostsArticleColumnItem from './PostsArticleColumnItem';

// type PostsArticleColumnItemListProps = { posts: Object[] };

const PostsArticleColumnItemList = ({ posts }: any) =>
  posts?.map((post: any) => <PostsArticleColumnItem key={post.id} {...post} />);

export default PostsArticleColumnItemList;
