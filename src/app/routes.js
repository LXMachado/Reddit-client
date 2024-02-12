// const ROUTES = {
//   newQuizRoute: () => "/quizzes/new",
//   quizRoute: (id) => `/quizzes/${id}`,
//   quizzesRoute: () => "/quizzes",
//   newTopicRoute: () => "/topics/new",
//   topicRoute: (id) => `/topics/${id}`,
//   topicsRoute: () => "/topics",
// };

const ROUTES = {
  subredditRoute: (subreddit) => `/r/${subreddit}`,
  testRoute: () => "/test",
};

export default ROUTES;
