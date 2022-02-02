/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(() => {
  // const newTweet = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png",
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // }

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  //the container to appent the tweets to
  const $tweetContainer = $('#tweet-container');
  
  const createTweetElement = (newTweet) => {
    
//     const tweetElement = `<article class = "tweets">
//   <div class="tweet-body tweet-text-area">
//     <div class = 'tweeter-id'>
//       <img src ="${newTweet.user.avatars}>
//       <h4 class = 'name'>${newTweet.user.name}</h4>
//       <h4 class="handle">${newTweet.user.handle}</h4>
//     </div>
//     <p>${newTweet.content.text}</p>
//   </div>

//   <div class="tweet-foot">
//     <p>${timeago.format(newTweet.created_at)}</p>
//     <div>
//       <i class="icon fa-solid fa-flag"></i>
//       <i class="icon fa-solid fa-retweet"></i>
//       <i class="icon fa-solid fa-heart"></i>
//     </div>
//   <div>
// </article>`
// console.log(newTweet)
// return tweetElement;



    const $tweets = $(`<article>`).addClass('tweets');
    //set up tweet body to display info about the tweet
    const $tweetBody = $('<div>').addClass('tweet-body', 'tweet-text-area');
    const $tweeterID = $('<div>').addClass('tweeter-id');
    //append img name and handle to tweeter id
    const $img = $('<img>').attr('src', newTweet.user.avatars);
    const $name = $('<h4>').text(newTweet.user.name);
    const $handle = $('<h4>').addClass('handle').text(newTweet.user.handle);
    $tweeterID.append($img, $name, $handle);
  
    //final setup of tweets body
    $tweetBody.append($tweeterID, $('<p>').text(newTweet.content.text));
  
    //set up tweet foot
    const $tweetFoot = $('<div>').addClass('tweet-foot');

    const $flag = $('<i>').addClass('icon', 'fa-solid', 'fa-flag');
    const $retweet = $('<i>').addClass('icon', 'fa-solid', 'fa-retweet');
    const $like = $('<i>').addClass('icon', 'fa-solid', 'fa-heart');

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

    for (obj of arrayOfObj) {
      $tweetContainer.append(createTweetElement(obj));
    }

  };
  
  renderTweets(data);
});
