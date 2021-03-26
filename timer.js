
/**
 * Adds time to a date. Modelled after MySQL DATE_ADD function.
 * Example: dateAdd(new Date(), 'minutes', 30)  //returns 30 minutes from now.
 * 
 * @param date  Date to start with
 * @param interval  One of: year, quarter, month, week, day, hour, minute, second
 * @param units  Number of units of the given interval to add.
 */
 function dateAdd(date, interval, units) {
    if(!(date instanceof Date))
      return undefined;
    var ret = new Date(date); //don't change original date
    var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
    switch(String(interval).toLowerCase()) {
      case 'year'   :  ret.setFullYear(ret.getFullYear() + units); checkRollover();  break;
      case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
      case 'month'  :  ret.setMonth(ret.getMonth() + units); checkRollover();  break;
      case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
      case 'day'    :  ret.setDate(ret.getDate() + units);  break;
      case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
      case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
      case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
      default       :  ret = undefined;  break;
    }
    return ret;
}

// Set the date we're counting down to
var countDownDate = new Date()
countDownDate = dateAdd(countDownDate, 'minute', 0)
console.log(countDownDate)
var totalDonated = 0
console.log(typeof totalDonated)
startTimer = false
console.log(countDownDate)
function timeAdd() {
  var x = document.getElementById("myText").value;
  console.log(x)
  y = parseInt(x, 10)
  totalDonated = y + totalDonated
  console.log(totalDonated)
  console.log(typeof totalDonated)
  countDownDate = dateAdd(countDownDate, 'minute', x)
  console.log(countDownDate)
}
function unPause() {
  rightnow = new Date()
  console.log(rightnow)
  countDownDate = dateAdd(rightnow, 'minute', 1)
  if (totalDonated > 1440) {

  }
  countDownDate = dateAdd(rightnow, 'minute', totalDonated)
  startTimer = true
  console.log(countDownDate)
}
// Set the date we're counting down to
// Update the count down every 1 second
var x = setInterval(function() {
  console.log(totalDonated)

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  if (distance > 86400000){
    var distance = 86400000
  };
  console.log(distance);

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (days == 1){
    var hours = 24
  };


  // Display the result in the element with id="demo"
  if (startTimer === true) {
  document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
  console.log( hours + ":" + minutes + ":" + seconds)
  }
  if (startTimer === false) {
    var totalDonatedInSeconds = totalDonated * 60
    var hours2 = Math.floor((totalDonatedInSeconds % (60 * 60 * 24)) / (60*60));
    var minutes2 = Math.floor((totalDonatedInSeconds % (60 * 60) /(60)));    
    document.getElementById("time").innerHTML = hours2 + ":" + minutes2
  }
  // If the count down is finished, write some text
  if (distance < 0) {
    if (startTimer === true) {
    document.getElementById("time").innerHTML = "TIMES UP"
    }
  };
  
  
}, 1000);

