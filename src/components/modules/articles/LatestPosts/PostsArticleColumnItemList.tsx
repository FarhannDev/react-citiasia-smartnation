import React from 'react';
import PostsArticleColumnItem from './PostsArticleColumnItem';

type PostsArticleColumnItemListProps = { posts: Posts[] };

const PostsArticleColumnItemList: React.FC<PostsArticleColumnItemListProps> = ({
  posts,
}) => posts.map((post) => <PostsArticleColumnItem key={post.id} {...post} />);

export default PostsArticleColumnItemList;
