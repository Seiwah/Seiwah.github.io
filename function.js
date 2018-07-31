var level = 0;
var tagToPrint = [];
tagToPrint[0] = "Nobody can come and develop Africa on behalf of Africans.";
tagToPrint[1] = "A tiger does not shout its tigrtiude. It acts";
tagToPrint[2] = "We cannot wait for governments to do it all.";
tagToPrint[3] = "We mus forever realize that the time is always ripe to do right";
tagToPrint[4] = "In the landfdgfdgdfg";
tagToPrint[5] = "dfgdfgfdgdf of myths4";

var author = [];
author[0] = "Mo Ibrahim";
author[1] = "Wole Soyinka";
author[2] = "Kofi Annan";
author[3] = "Nelson Mandela";

var timer;
var authorTimer;
var pos = 0;
var level = 0;
var duration = 50;
var pauseMillis = 3000;


function hello() {
    timer = setInterval(printNextTag, duration);
    clearInterval(authorTimer);
}

function printNextTag() {
    var tag = document.getElementById("tagline");
    var authorElement = document.getElementById('said');
    authorElement.innerHTML = "";
    var tagline = tagToPrint[level];

    if(pos >= tagline.length) {
        // console.log("position1", pos, "Level1 ", level)
        pos = 0;
        level++;
        clearInterval(timer);
        var name = author[level];
        if(name === undefined) {
            name = "Unknown";
        }
        authorElement.innerHTML = name;
        setTimeout(hello, pauseMillis);
    }
    else {
        pos++;
        tag.innerHTML = tagline.substr(0, pos);
    }
    


   
}