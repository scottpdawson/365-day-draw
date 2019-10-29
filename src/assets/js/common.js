function getTweet() {
	var url = "463440424141459456";
    if (url == "") {
      $(".controls").addClass("error");
    } else {
      $("#tweet_div").show();
      $.ajax({
        url: "https://api.twitter.com/1/statuses/oembed.json?url=https://twitter.com/Interior/status/" + url,
        dataType: "jsonp",
        success: function(data) {
          $('#tweet_details').html(data.html);
        }
      });
    }
} 