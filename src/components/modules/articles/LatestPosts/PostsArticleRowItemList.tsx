import React from 'react';
import MyComponent from '../../../MyComponent';

type PostsArticleRowItemListProps = {
  posts: Posts[];
};

const PostsArticleRowItemList: React.FC<PostsArticleRowItemListProps> = ({
  posts,
}) => {
  return posts.map((post) => (
    <MyComponent.PostsArticleRowItem key={post.id} {...post} />
  ));
};

export default PostsArticleRowItemList;
