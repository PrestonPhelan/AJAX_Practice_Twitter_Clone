const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor($el) {
   this.$el = $el;
   this.$input = $(this.$el.find('input'));
   this.$ul = $(this.$el.find('ul'));

   this.handleInput();
 }

  handleInput() {
    this.$input.on('input', e => {
      e.preventDefault();

      APIUtil.searchUsers(this.$input.val(), this.renderResults.bind(this));
    });
  }

  renderResults(result) {
    this.$ul.empty();
    result.forEach((el) => {
      const $li = $(`<li><a href='./${el.id}'>${el.username}</a></li>`);
      const $button = $(`<button></button>`);
      const followState = el.followed ? "followed" : "unfollowed";

      new FollowToggle($button, {userId: el.id, followState: followState});
      $li.append($button);
      this.$ul.append($li);
    });
  }
}

module.exports = UsersSearch;
