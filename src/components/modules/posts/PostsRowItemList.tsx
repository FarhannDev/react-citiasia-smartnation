import React from 'react';
import PostsRowItem from './PostsRowItem';

type PostsRowItemListProps = {
  posts: Posts[];
  ctaLabel: string | undefined;
};

const PostsRowItemList: React.FC<PostsRowItemListProps> = ({
  posts,
  ctaLabel,
}) => {
  return (
    <div className="d-flex flex-column py-4">
      {posts?.map((post) => (
        <PostsRowItem key={post.id} {...post} catLabel={ctaLabel} />
      ))}
    </div>
  );
};

export default PostsRowItemList;
