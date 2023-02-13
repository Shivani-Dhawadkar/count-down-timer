//alert("hello! its shivani")
let cl = console.log;

function createCountDown(){
    const countdown = document.getElementById("count");

let FutureDate = new Date(2023, 04, 27);
cl(FutureDate);

let currentDate = new Date();
cl(currentDate);

let diff = FutureDate.getTime() - currentDate.getTime();
cl(diff);

let days = Math.floor(diff / (1000 * 60 * 60 * 24));
cl(days);

let hr = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
cl(hr);

let min = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
cl(min);

let sec = Math.floor(diff % (1000 * 60) / (1000));
cl(sec);

// days = (days < 10) ? ('0' + days) : days;
// hr = (hr < 10) ? ('0' + hr) : hr;
// min = (min < 10) ? ('0' + min) : min;
// sec = (sec < 10) ? ('0' + sec) : sec;



/* hr = setZero(hr);
min = setZero(min);
sec = setZero(sec); */

let result =
    ` <div class="counter" id="days">
            <p>${setZero(days)}</p>
            <p>Days</p>
    </div>
    <div class="counter" id="hr">
        <p>${setZero(hr)}</p>
        <p>Hours</p>
    </div>
    <div class="counter" id="min">
        <p>${setZero(min)}</p>
        <p>Minutes</p>
    </div>
    <div class="counter" id="sec">
        <p>${setZero(sec)}</p>
        <p>Sec</p>
    </div> `

countdown.innerHTML = result;
cl(result);

setTimeout(createCountDown, 1000)

}
createCountDown()


function setZero(num){
   return (num < 10) ? ('0' + num) : num
}
