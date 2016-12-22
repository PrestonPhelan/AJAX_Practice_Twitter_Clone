const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');

$( () => {
  $('.follow-toggle').each( (index, element) => {
    const button = new FollowToggle($(element));
  });

  $('.users-search').each( (index, element) => {
    const nav = new UsersSearch($(element));
  });

  $('.tweet-compose').each( (index, element) => {
    new TweetCompose($(element));
  });
});
