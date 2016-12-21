const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$( () => {
  $('.follow-toggle').each( (index, element) => {
    const button = new FollowToggle($(element));
  });

  $('.users-search').each( (index, element) => {
    const nav = new UsersSearch($(element));
  });
});
