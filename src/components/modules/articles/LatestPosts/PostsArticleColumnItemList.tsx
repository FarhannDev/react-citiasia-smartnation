import React from 'react';
import MyComponent from '../../../MyComponent';

type PostsArticleColumnItemListProps = { posts: Posts[] };

const PostsArticleColumnItemList: React.FC<PostsArticleColumnItemListProps> = ({
  posts,
}) =>
  posts.map((post) => (
    <MyComponent.PostsArticleColumnItem key={post.id} {...post} />
  ));

export default PostsArticleColumnItemList;
