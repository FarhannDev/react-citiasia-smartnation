import loadable from '@loadable/component';

const MyComponent = (() => {
  const HeroBackgroundSwipe = loadable(
    () => import('./common/heroBackground/HeroBackgroundSwiper')
  );

  const PostsArticleRowItem = loadable(
    () =>
      import('../components/modules/articles/LatestPosts/PostsArticleRowItem')
  );
  const PostsArticleRowItemList = loadable(
    () =>
      import(
        '../components/modules/articles/LatestPosts/PostsArticleRowItemList'
      )
  );
  const PostsArticleColumnItem = loadable(
    () =>
      import(
        '../components/modules/articles/LatestPosts/PostsArticleColumnItem'
      )
  );
  const PostsArticleColumnItemList = loadable(
    () =>
      import(
        '../components/modules/articles/LatestPosts/PostsArticleColumnItemList'
      )
  );

  const ArticleColumnItem = loadable(
    () =>
      import('../components/modules/articles/LatestArticle/ArticleColumnItem')
  );
  const ArticleColumnItemList = loadable(
    () =>
      import(
        '../components/modules/articles/LatestArticle/ArticleColumItemList'
      )
  );

  const ArticleFigureColumnItem = loadable(
    () =>
      import(
        '../components/modules/articles/LatestArticle/ArticleFigureColumnItem'
      )
  );

  const ArticleFigureColumnItemList = loadable(
    () =>
      import(
        '../components/modules/articles/LatestArticle/ArticleFigureColumnItemList'
      )
  );

  const ArticleCategoryFigureColumnItem = loadable(
    () =>
      import(
        '../components/modules/articles/categoryArticle/ArticleCategoryFigureColumnItem'
      )
  );
  const ArticleCategoryFigureColumnItemList = loadable(
    () =>
      import(
        '../components/modules/articles/categoryArticle/ArticleCategoryFigureColumnItemList'
      )
  );

  const ArticleCategoryRowItem = loadable(
    () =>
      import(
        '../components/modules/articles/categoryArticle/ArticleCategoryRowItem'
      )
  );
  const ArticleCategoryRowItemList = loadable(
    () =>
      import(
        '../components/modules/articles/categoryArticle/ArticleCategoryRowItemList'
      )
  );

  const PopularPostItem = loadable(
    () => import('../components/modules/articles/RelatePosts/PopularPostItem')
  );
  const PopularPostItemList = loadable(
    () =>
      import('../components/modules/articles/RelatePosts/PopularPostItemList')
  );

  const EventFigureColumnItem = loadable(
    () =>
      import(
        '../components/modules/articles/LatestEvents/EventFigureColumnItem'
      )
  );
  const EventFigureColumnItemList = loadable(
    () =>
      import(
        '../components/modules/articles/LatestEvents/EventFigureColumnItemList'
      )
  );

  const NewsLetterFormInput = loadable(
    () => import('./modules/Newsletter/NewsLetterFormInput')
  );

  const NewsLetterItem = loadable(
    () => import('./modules/Newsletter/NewsLetterItem')
  );

  const AboutProgramItemList = loadable(
    () => import('../components/modules/about/AboutProgramItemList')
  );

  const AboutTeamItemList = loadable(
    () => import('../components/modules/about/AboutTeamItemList')
  );
  const AboutTeamPartnerItemList = loadable(
    () => import('../components/modules/about/AboutTeamPartnerItemList')
  );

  const AboutTeamItem = loadable(
    () => import('../components/modules/about/AboutTeamItem')
  );
  const AboutProgramItem = loadable(
    () => import('../components/modules/about/AboutProgramItem')
  );
  const AboutTeamPartnerItem = loadable(
    () => import('../components/modules/about/AboutTeamPartnerItem')
  );

  const ContactItemInput = loadable(
    () => import('../components/modules/contacts/ContactItemInput')
  );

  const SearchItem = loadable(() => import('./common/search/SearchItem'));
  const SearchEmpty = loadable(() => import('./common/empty/SearchEmpty'));
  const SearchBar = loadable(() => import('./common/searchBar/SearchBar'));
  const SearchBarResult = loadable(
    () => import('./common/searchBar/SearchBarResult')
  );
  const DropdownButtonSelectLanguange = loadable(
    () => import('./common/button/DropdownButtonSelectLanguange')
  );

  const PodcastRowItem = loadable(
    () => import('../components/modules/podcasts/PodcastRowItem')
  );
  const PodcastRowItemList = loadable(
    () => import('../components/modules/podcasts/PodcastRowItemList')
  );
  const PodcastVideoItem = loadable(
    () => import('../components/modules/podcasts/PodcastVideoItem')
  );
  const PodcastPopulerItem = loadable(
    () => import('../components/modules/podcasts/PodcastPopulerItem')
  );
  const PodcastPopulerItemList = loadable(
    () => import('../components/modules/podcasts/PodcastPopulerItemList')
  );

  const ProgramIntroduction = loadable(
    () => import('../components/modules/programs/ProgramIntroduction')
  );
  const ProgramPopulerItem = loadable(
    () => import('../components/modules/programs/ProgramPopulerItem')
  );
  const ProgramPopulerItemList = loadable(
    () => import('../components/modules/programs/ProgramPopulerItemList')
  );
  const ProgramRowItem = loadable(
    () => import('../components/modules/programs/ProgramRowItem')
  );
  const ProgramRowItemList = loadable(
    () => import('../components/modules/programs/ProgramRowItemList')
  );
  const ProgramDetailItemRecomendation = loadable(
    () =>
      import(
        '../components/modules/programs/details/PrograDetailItemRecomendation'
      )
  );
  const ProgramCategoryRowItem = loadable(
    () =>
      import('../components/modules/programs/details/ProgramCategoryRowItem')
  );
  const ProgramDetail = loadable(
    () => import('../components/modules/programs/details/ProgramDetail')
  );
  const ProgramDetailsItem = loadable(
    () => import('../components/modules/programs/details/ProgramDetailItem')
  );

  const ProgramPopulerFigureColumnItem = loadable(
    () =>
      import(
        '../components/modules/programs/details/ProgramPopulerFigureColumnItem'
      )
  );

  const PostsFigureColumnItem = loadable(
    () => import('../components/modules/posts/PostsFigureColumnItem')
  );
  const PostsFigureRowItem = loadable(
    () => import('../components/modules/posts/PostsFigureRowItem')
  );
  const PostsPopulerFigureColumnItem = loadable(
    () => import('../components/modules/posts/PostsPopulerFigureColumnItem')
  );
  const PostsRowItem = loadable(
    () => import('../components/modules/posts/PostsRowItem')
  );
  const PostsRowItemList = loadable(
    () => import('../components/modules/posts/PostsRowItemList')
  );

  const PostDetailsCommentItem = loadable(
    () => import('../components/modules/posts/details/PostDetailsCommentItem')
  );
  const PostDetailsCommentItemInput = loadable(
    () =>
      import('../components/modules/posts/details/PostDetailsCommentItemInput')
  );
  const PostDetailsItem = loadable(
    () => import('../components/modules/posts/details/PostDetailsItem')
  );
  const PostDetailsItemRecomendation = loadable(
    () =>
      import('../components/modules/posts/details/postDetailsItemRecomendation')
  );
  const PostDetailsUsersCommentItem = loadable(
    () =>
      import('../components/modules/posts/details/PostDetailsUsersCommentItem')
  );
  const PostDetailsUsersCommentItemList = loadable(
    () =>
      import(
        '../components/modules/posts/details/PostDetailsUsersCommentItemList'
      )
  );
  const PostsDetails = loadable(
    () => import('../components/modules/posts/details/PostsDetails')
  );

  return {
    HeroBackgroundSwipe,
    PostsArticleRowItem,
    PostsArticleRowItemList,
    PostsArticleColumnItem,
    PostsArticleColumnItemList,
    ArticleColumnItem,
    ArticleColumnItemList,
    ArticleFigureColumnItem,
    ArticleFigureColumnItemList,
    ArticleCategoryFigureColumnItem,
    ArticleCategoryFigureColumnItemList,
    ArticleCategoryRowItem,
    ArticleCategoryRowItemList,
    PopularPostItem,
    PopularPostItemList,
    EventFigureColumnItem,
    EventFigureColumnItemList,
    NewsLetterFormInput,
    NewsLetterItem,
    AboutProgramItemList,
    AboutTeamItemList,
    AboutTeamPartnerItemList,
    AboutTeamItem,
    AboutProgramItem,
    AboutTeamPartnerItem,
    ContactItemInput,
    SearchItem,
    SearchEmpty,
    SearchBar,
    SearchBarResult,
    DropdownButtonSelectLanguange,
    PodcastRowItem,
    PodcastRowItemList,
    PodcastVideoItem,
    PodcastPopulerItem,
    PodcastPopulerItemList,
    ProgramIntroduction,
    ProgramPopulerItem,
    ProgramPopulerItemList,
    ProgramRowItem,
    ProgramRowItemList,
    ProgramDetailItemRecomendation,
    ProgramCategoryRowItem,
    ProgramDetail,
    ProgramDetailsItem,
    ProgramPopulerFigureColumnItem,
    PostsFigureColumnItem,
    PostsFigureRowItem,
    PostsPopulerFigureColumnItem,
    PostsRowItem,
    PostsRowItemList,
    PostDetailsCommentItem,
    PostDetailsCommentItemInput,
    PostDetailsItem,
    PostDetailsItemRecomendation,
    PostDetailsUsersCommentItem,
    PostDetailsUsersCommentItemList,
    PostsDetails,
  };
})();

export default MyComponent;
