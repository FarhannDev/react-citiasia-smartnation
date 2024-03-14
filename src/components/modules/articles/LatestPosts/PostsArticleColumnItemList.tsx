import React from 'react';
import MyComponent from '../../../MyComponent';

type PostsArticleColumnItemListProps = { posts: Posts[] };

const PostsArticleColumnItemList: React.FC<PostsArticleColumnItemListProps> = ({
  posts,
}) => (
  <React.Suspense>
    {posts.map((post) => (
      <MyComponent.PostsArticleColumnItem key={post.id} {...post} />
    ))}
  </React.Suspense>
);

export default PostsArticleColumnItemList;
