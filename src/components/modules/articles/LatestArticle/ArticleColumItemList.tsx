import React from 'react';
import ArticleColumnItem from './ArticleColumnItem';

// type PostsArticleColumnItemListProps = { posts: Object[] };

const ArticleColumnItemList = ({ posts }) => {
  return posts?.map((post) => <ArticleColumnItem key={post.id} {...post} />);
};

export default ArticleColumnItemList;
