import React from 'react';
import PostsArticleColumnItem from './PostsArticleColumnItem';

// type PostsArticleColumnItemListProps = { posts: Object[] };

const PostsArticleColumnItemList = ({ posts }) => {
  return posts?.map((post) => (
    <PostsArticleColumnItem key={post.id} {...post} />
  ));
};

export default PostsArticleColumnItemList;
