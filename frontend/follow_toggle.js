const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el, options) {
    // this.$el = $el;
    // this.userId = this.$el.data("user-id");
    // this.followState = this.$el.data("initial-follow-state");
    this.$el = $el;
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = (this.$el.data("initial-follow-state") ||
                        options.followState);

    this.render();
    this.handleClick();
  }

  render() {
    this.$el.prop("disabled", false);
    if (this.followState === "unfollowed") {
      this.$el.text("Follow");
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow");
    } else {
      this.$el.prop("disabled", true);
    }
  }

  handleClick() {
    this.$el.on('click', e => {
      e.preventDefault();

      const state = this.followState === "unfollowed" ? "followed" : "unfollowed";
      const callback = () => {
        this.followState = state;
        this.render();
      };

      if (this.followState === "unfollowed") {
        this.followState = 'following';
        this.render();
        APIUtil.followUser(this.userId).then(callback);
      } else {
        this.followState = 'unfollowing';
        this.render();
        APIUtil.unfollowUser(this.userId).then(callback);
      }
    });
  }



}

module.exports = FollowToggle;
