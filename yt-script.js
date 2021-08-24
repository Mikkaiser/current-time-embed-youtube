// 2. This code loads the IFrame Player API code asynchronously.

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: '5-4GVAoDrdE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();

  // The duration of video. In Seconds
  videoDuration = parseInt(player.getDuration());

  // Applying the interval by one and one second
  interval = setInterval(getCurrentVideoTime, 1000);
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }
}

// Current time of video method
function getCurrentVideoTime() {
  if (player && player.getCurrentTime) {
    videoTime = parseInt(player.getCurrentTime());

  }
  
  if (videoTime < videoDuration) {
    targetEvent(videoTime);
  }
  
  if (videoTime == videoDuration) {
    clearInterval(interval);
  }
}

function stopVideo() {
  player.stopVideo();
}

function targetEvent(second) {
  console.log(second);
  if(second < 9) {
    p1 = document.querySelector(".p-1");
    p1.classList.add("emphasys");
  }
  else if(second >= 9 && second <= 17) {
    p1.classList.remove("emphasys");

    p2 = document.querySelector(".p-2");
    p2.classList.add("emphasys");
  }
  else if(second >= 17 && second <= 26) {
    p2.classList.remove("emphasys");

    p3 = document.querySelector(".p-3");
    p3.classList.add("emphasys");
  }
  else if(second >= 26 && second <= 33) {
    p3.classList.remove("emphasys");

    p4 = document.querySelector(".p-4");
    p4.classList.add("emphasys");
  }
  else if(second >= 33 && second <= 41) {
    p4.classList.remove("emphasys");

    p5 = document.querySelector(".p-5");
    p5.classList.add("emphasys");
  }
  else if(second >= 41 && second <= 53) {
    p5.classList.remove("emphasys");

    p6 = document.querySelector(".p-6");
    p6.classList.add("emphasys");
  }
  else if(second >= 53 && second <= 60) {
    p6.classList.remove("emphasys");

    p7 = document.querySelector(".p-7");
    p7.classList.add("emphasys");
  }
  else if(second >= 60 && second <= 68) {
    p7.classList.remove("emphasys");

    p8 = document.querySelector(".p-8");
    p8.classList.add("emphasys");
  }
  else if(second >= 68 && second <= 74) {
    p8.classList.remove("emphasys");

    p9 = document.querySelector(".p-9");
    p9.classList.add("emphasys");
  }
  else if(second >= 74 && second <= 81) {
    p9.classList.remove("emphasys");

    p10 = document.querySelector(".p-10");
    p10.classList.add("emphasys");
  }
  else if(second >= 81 && second <= 89) {
    p10.classList.remove("emphasys");

    p11 = document.querySelector(".p-11");
    p11.classList.add("emphasys");
  }
  else if(second >= 89 && second <= 97) {
    p11.classList.remove("emphasys");

    p12 = document.querySelector(".p-12");
    p12.classList.add("emphasys");
  }
}


