/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import loadable from '@loadable/component';

const ArticleColumnItem = loadable(() => import('./ArticleColumnItem'));

type ArticleColumnItemListProps = { posts: Posts[] };

const ArticleColumnItemList: React.FC<ArticleColumnItemListProps> = ({
  posts,
}) => posts?.map((post) => <ArticleColumnItem key={post.id} {...post} />);

export default ArticleColumnItemList;
