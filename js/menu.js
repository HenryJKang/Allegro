var elem = document.querySelector('input[type="range"]');
var target = document.querySelector(".value");
var label = document.querySelector(".label");

let database = firebase.database();
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        let ref = database.ref("scores/users/" + user.uid);
        ref.on(
            "value",
            data => {
                try {
                    if (data.val().initialized == true) {
                    }
                } catch (err) {
                    ref.set({
                        initialized: true,
                        staticTreble: 0,
                        staticBass: 0,
                        dynamicTreble: 0,
                        dynamicBass: 0,
                        mixed: 0
                    });
                }
            },
            err => {
                console.log(err);
            }
        );
    } else {
        console.log("user not signed in");
    }
});

var rangeValue = function() {
    switch (elem.value) {
        case "1":
            target.style.backgroundImage = "url('../img/treble.png')";
            label.innerHTML = "treble";
            break;
        case "2":
            target.style.backgroundImage = "url('../img/bass.png')";
            label.innerHTML = "bass";

            break;
        case "3":
            target.style.backgroundImage = "url('../img/mixed.svg')";
            label.innerHTML = "mixed";
            break;
        default:
    }
};

elem.addEventListener("input", rangeValue);

var elem2 = document.getElementById("slider2");
var target2 = document.getElementById("value2");
var label2 = document.getElementById("label2");

var rangeValue = function() {
    switch (elem2.value) {
        case "1":
            target2.style.backgroundImage = "url('../img/treble.png')";
            label2.innerHTML = "treble";
            break;
        case "2":
            target2.style.backgroundImage = "url('../img/bass.png')";
            label2.innerHTML = "bass";

            break;
        default:
    }
};

elem2.addEventListener("input", rangeValue);

function selectDynamic() {
<<<<<<< HEAD
    if (elem2.value === "1") {
        location.href = "/advancedGame.html";
=======
    if (elem2.value === '1') {
        location.href = "./advancedGame.html";
>>>>>>> e35b8de20d434b615eca1c35e9133d35778926f2
    } else {
        location.href = "./advancedBass.html";
    }
}

function selectStatic() {
<<<<<<< HEAD
    if (elem.value === "1") {
        location.href = "/trebleGame.html";
    } else if (elem.value === "2") {
        location.href = "/bass.html";
=======
    if (elem.value === '1') {
        location.href = "./trebleGame.html";
    } else if (elem.value === '2') {
        location.href = "./bass.html";
>>>>>>> e35b8de20d434b615eca1c35e9133d35778926f2
    } else {
        location.href = "./mixed.html";
    }
}
