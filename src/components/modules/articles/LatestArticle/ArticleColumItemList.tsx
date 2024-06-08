import React from 'react';
import MyComponent from '../../../MyComponent';

type ArticleColumnItemListProps = { posts: Posts[] };

const ArticleColumnItemList: React.FC<ArticleColumnItemListProps> = ({
  posts,
}) =>
  posts?.map((post) => (
    <MyComponent.ArticleColumnItem key={post.id} {...post} />
  ));

export default ArticleColumnItemList;
