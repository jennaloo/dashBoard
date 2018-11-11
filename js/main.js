//--adding time--//

function formatTime(timeDenom) {
    if (timeDenom < 10) {
        return "0" + timeDenom;
    } else {
        return timeDenom;
    }
}

function displayTime() {
    var now = new Date();
    var hh = formatTime(now.getHours());
    var mm = formatTime(now.getMinutes());
    var ss = formatTime(now.getSeconds());

    if (hh > 12) {
        var clock = "" + (hh - 12) + ":" + mm + ":" + ss + "" + " PM";
    } else {
        var clock = "" + hh + ":" + mm + ":" + ss + "" + "AM";
    }
    document.getElementById("time").innerText = clock;

    setInterval('displayTime()', 1000);
}

function displayDate() {
    var now = new Date();
    var mm = formatTime(now.getMonth());
    var dd = formatTime(now.getDate());
    var yy = formatTime((now.getYear() + 1900));

    var date = "" + (mm + 1) + "/" + dd + "/" + yy + "";
    document.getElementById("date").innerText = date;
    setInterval('displayDate()', 86400000)
}

displayTime();
displayDate();
