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

    //    setInterval('displayTime()', 1000);
}

function displayDate() {
    var now = new Date();
    var mm = formatTime(now.getMonth());
    var dd = formatTime(now.getDate());
    var yy = formatTime((now.getYear() + 1900));

    var date = "" + (mm + 1) + "/" + dd + "/" + yy + "";
    document.getElementById("date").innerText = date;
    //    setInterval('displayDate()', 86400000)
}


//--Adds user info
function addUserInfo(image, name, min, max) {
    //--inserts user Photo--//
    var userImg = document.getElementById("userImg");
    userImg.src = image;
    //--inserts user name--//
    var userName = document.getElementById('username');
    userName.innerText = name;
    //--inserts random userID--//
    var userIdSpace = document.getElementById('userId');

    function randomNum(min, max) {
        var randomInRange = Math.floor(Math.random() * (max - min + 1) + min);
        return randomInRange;
    }

    var userId = randomNum(1000, 9000);
    userIdSpace.innerText = "# " + userId;

}

//Adds title of selected item and 
//fills in content from the user data
//object
function addContent(activeTitle, someArray) {
    var myh2 = document.getElementById('active-title');
    myh2.innerText = activeTitle;
    var activeUl = document.getElementById('active-list');
    activeUl.innerHTML = "<li>" + courseArr[0].title + "</li>" + "<p>" + someArray[0].subject + "</p>" +
        "<li>" + someArray[1].title + "</li>" +
        "<p>" + someArray[1].subject + "</p>" +
        "<li>" + someArray[2].title + "</li>" +
        "<p>" + someArray[2].subject + "</p>"
}

//sets the progress bar depending on 
//user data
function progressBar() {
    var progressCSS = document.getElementById('progress');
    progressCSS.style.width = user.progress * 100 + '%';
    var progressPercent = document.getElementById('progress-percent');
    progressPercent.innerText = user.progress * 100 + '%';
}

//executes any immediate functions.
addUserInfo(user.image, user.name, 1000, 9000);
displayTime();
displayDate();
progressBar();
