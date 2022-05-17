// city //
$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function(location) {
    $('#country').html(location.country_name);
    $('#state').html(location.state);
    $('#city').html(location.city);
    $('#latitude').html(location.latitude);
    $('#longitude').html(location.longitude);
    $('#ip').html(location.IPv4);
  }
});
// countdown //
var upgradeTime = 200;
var seconds = upgradeTime;
function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }
  document.getElementById('countdown').innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Ongoing";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('timer()', 1000);
// email
$(function () {
  count = 0;
  wordsArray = ["ji*gx**6@gmail.com", "as**ut*ya@yahoo.com", "*ht*oona**@hotmail.com", "78*ua*yfan**o@yahoo.com", "aa*ua*yfan**o@aol.com"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(300, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(300);
    });
  }, 3000);
});
// time
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm = "am";
if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();
var x = document.getElementById("time");
x.innerHTML = day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;