/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import ArticleColumnItem from './ArticleColumnItem';

type ArticleColumnItemListProps = { posts: Posts[] };

const ArticleColumnItemList: React.FC<ArticleColumnItemListProps> = ({
  posts,
}) => posts?.map((post) => <ArticleColumnItem key={post.id} {...post} />);

export default ArticleColumnItemList;
