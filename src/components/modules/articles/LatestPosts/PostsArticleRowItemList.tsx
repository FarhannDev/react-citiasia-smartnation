import React from 'react';
import PostsArticleRowItem from './PostsArticleRowItem';

type PostsArticleRowItemListProps = {
  posts: Posts[];
};

const PostsArticleRowItemList: React.FC<PostsArticleRowItemListProps> = ({
  posts,
}) => {
  return posts.map((post) => <PostsArticleRowItem key={post.id} {...post} />);
};

export default PostsArticleRowItemList;
