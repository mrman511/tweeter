/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(() => {
  //the container to appent the tweets to
  const $tweetContainer = $('#tweet-container');
  
  const createTweetElement = (newTweet) => {
    const $tweets = $(`<article>`).addClass('tweets');
    //set up tweet body to display info about the tweet
    const $tweetBody = $('<div>').addClass('tweet-body', 'tweet-text-area');
    const $tweeterID = $('<div>').addClass('tweeter-id');
    //append img name and handle to tweeter id
    const $img = $('<img>').attr('src', newTweet.user.avatars);
    const $name = $('<h4>').text(newTweet.user.name);
    const $handle = $('<h4>').addClass('handle').text(newTweet.user.handle);

    //set $img and $name in a seperate div with a class of id-left 
    const $idLeft = $('<div>').addClass('id-left');
    $idLeft.append($img, $name);

    $tweeterID.append($idLeft, $handle);
  
    //final setup of tweets body
    $tweetBody.append($tweeterID, $('<p>').text(newTweet.content.text));
  
    //set up tweet foot
    const $tweetFoot = $('<div>').addClass('tweet-foot');

    const $icons = `
    <div>
       <i class="icon fa-solid fa-flag"></i>
       <i class="icon fa-solid fa-retweet"></i>
       <i class="icon fa-solid fa-heart"></i>
     </div>
    `

    $tweetFoot.append($('<p>').text(timeago.format(newTweet.created_at)));
    $tweetFoot.append($icons);
    $tweets.append($tweetBody, $tweetFoot);

    return $tweets;
  
  };

  const renderTweets = (arrayOfObj) => {
    $tweetContainer.empty();
    for (let i = arrayOfObj.length; i > 0; i--){
      $tweetContainer.append(createTweetElement(arrayOfObj[i - 1]));
    }

  };
  

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
    }).then((tweets) => {
      $tweetContainer.empty();
      renderTweets(tweets)
    })
    
  }
  
  loadTweets();

  //function for new tweet event
  $('#new-tweet').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize()
    const input = data.split('=')[1]
    
    if (input === null || input === '' || input.length > 140){
      if (input === null || input === ''){
        $('#tweet-text').attr('placeholder', 'Your TweeT is not long enough!');
      } else {
        
        $('#tweet-text').val('');
        $('#tweet-text').attr('placeholder', 'Your TweeT is too not long!');
      }
    } else {
      $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data,
      success: () => {
        console.log('POST success')
        $('#tweet-text').attr('placeholder', '')
        $('#tweet-text').val('');
        loadTweets()
      }
      })
    };
  });
  
});
