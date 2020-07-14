// display todays date and current time according to local time
// converting  date object (created by Date()) into a string
var d = new Date().toDateString(); 
var t = new Date().getHours();

// Changeing the <p> with id of "currentDay" to d
document.getElementById("currentDay").innerHTML = d;

function save(id, key) {
    var temp = document.getElementById(id).value;
    localStorage.setItem(key, temp)
}

function load() {

    for (var i = 9; i < 18; i++) {
        if (t === i) {
            document.getElementById(i).classList.add("present");
        }
        if (t < i) {
            document.getElementById(i).classList.add("future");
        }

        if (t > i) {
            document.getElementById(i).classList.add("past");
        }
    }
}
// function to save each task user types on to local storage
function read() {

    document.getElementById("9").innerText = localStorage.saveNine;
    document.getElementById("10").innerText = localStorage.saveTen;
    document.getElementById("11").innerText = localStorage.saveEleven;
    document.getElementById("12").innerText = localStorage.saveTwelve;
    document.getElementById("13").innerText = localStorage.saveOne;
    document.getElementById("14").innerText = localStorage.saveTwo;
    document.getElementById("15").innerText = localStorage.saveThree;
    document.getElementById("16").innerText = localStorage.saveFour;
    document.getElementById("17").innerText = localStorage.saveFive;

}

read();

load();





