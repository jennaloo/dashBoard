//user Data ----//
var user = {
    name: "Jenna Murphy",
    image: "img/jenna.jpg",
    progress: 0.66
}

var courseArr = [{
    title: "Readings in World Literature",
    subject: "Social Studies"
        }, {
    title: "Theory of Numbers",
    subject: "Mathematics"
        }, {
    title: "Farsi 301",
    subject: "Languages"
        }];

var activityArr = [{
    title: "Completed SOSC 503 Module 7 Quiz",
    subject: "Submitted for review 6/11/18 at 10:39PM"
        }, {
    title: "Commented in MATH104 Tuesday Discussion Group",
    subject: "Lorem ipsum dolores sit..."
        }, {
    title: "Enrolled in FARS301",
    subject: "Cohort begins 9/08/18"
        }];

var accountArr = [{
    title: "Enrolled since: ",
    subject: "9/06/2017"
        }, {
    title: "Enrollment Status: ",
    subject: "Active Student"
        }, {
    title: "Department",
    subject: "Computer Science"
        }];





//--adds time and date here--//

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

function addUserInfo(image, name, min, max) {
    var userImg = document.getElementById("userImg");
    userImg.src = image;

    var userName = document.getElementById('username');
    userName.innerText = name;

    var userIdSpace = document.getElementById('userId');


    function randomNum(min, max) {
        var randomInRange = Math.floor(Math.random() * (max - min + 1) + min);
        return randomInRange;
    }

    var userId = randomNum(1000, 9000);
    userIdSpace.innerText = "# " + userId;

}

addUserInfo(user.image, user.name, 1000, 9000);

//--inserts user Photo--//


//--inserts user name--//

//--inserts random userID--//
