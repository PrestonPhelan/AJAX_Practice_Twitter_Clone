const FollowToggle = require('./follow_toggle.js');

$( () => {
  $('.follow-toggle').each( (index, element) => {
    const button = new FollowToggle($(element));
    
  });
});
