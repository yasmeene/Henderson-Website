var datetime = new Date();
console.log(new Date());
document.getElementById("time").textContent = datetime;

function refresh() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " , ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refresh, 1);

function EvenOdd() {
  var day = new Date().getDate();
  if (day % 2 != 0) {
    dayEO = "1";
  } else {
    dayEO = "2";
  }
  document.getElementById("dayNum").innerHTML = dayEO;
}
setInterval(EvenOdd, 1);