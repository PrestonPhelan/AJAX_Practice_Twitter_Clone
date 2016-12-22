class TweetCompose {
  constructor($el) {
    this.$el = $el;
    this.charsLeft = 140;

    this.addTweet();
    this.characterCount();
  }

  addTweet() {
    this.$el.on("submit", e => {
      e.preventDefault();

      const formData = $(event.currentTarget).serializeJSON();

      $(this.$el.find(':input')).prop('disabled', true);

      $.ajax({
        url: "/tweets",
        method: "POST",
        data: formData,
        dataType: 'json',
        success: this.handleSuccess.bind(this)
      });
    });
  }

  clearInput() {
    $(this.$el.find(':input').not('.submit-button')).val("");
  }

  handleSuccess(res) {
    const $ul = $('#feed');

    const $li = $(`<li>${res.content} -- <a href='./${res.user_id}'>${res.user.username}</a> -- ${res.updated_at}</li>`);

    $ul.prepend($li);
    this.clearInput();
    $(this.$el.find(':input')).prop('disabled', false);
  }

  characterCount() {
    $('.tweet-content').on('input', () => {
      const chars = $('.tweet-content').val().length;

      this.charsLeft = 140 - chars;
      // console.log(this.charsLeft);
      // console.log($('strong'));
      $('strong').text(`${this.charsLeft}`);
    });
  }
}


module.exports = TweetCompose;
