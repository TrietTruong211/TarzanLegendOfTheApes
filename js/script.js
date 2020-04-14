$(document).ready(function(){
    $("body").addClass("js");
    // become part of story
    $("#part-of-story-form form").submit(function(event){
        username = $("#form-name").val();
        //if username is available, store it and replace tarzan with username
        if (username) {
            $(".name").text(username);
            sessionStorage.setItem("name", username);
            start();
        } else {
            var temp = $("#form-name");
            temp.addClass("error");
            $("#part-of-story-form button").text("Try Again!");
        }
        event.preventDefault();
    })
    // see what chapter is this
    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch (page) {
        // event for chapter 1
        case "chap1.html":
            $(this).keyup(function(e){
                if(e.which==32){
                    move_bar();
                }
            });
            break;
        // event for chapter 2
        case "chap2.html":
            var a_key = true;
            var s_key = false;
            var d_key = false;
            $(this).keyup(function(e){
                // a key 
                if(e.which==65 && a_key){
                    a_key = false;
                    s_key = true;
                    move_bar();
                }
                // s key 
                if(e.which==83 && s_key){
                    s_key = false;
                    d_key = true;
                    move_bar();
                }
                //d key
                if(e.which==68 && d_key){
                    d_key = false;
                    a_key = true;
                    move_bar();
                }
            });
            break;
        // event for chapter 3
        case "chap3.html":
            var a_key = true;
            var d_key = false;
            $(this).keyup(function(e){
                // a key 
                if(e.which==65 && a_key){
                    a_key = false;
                    d_key = true;
                    move_bar();
                }
                //d key
                if(e.which==68 && d_key){
                    d_key = false;
                    a_key = true;
                    move_bar();
                }
            });
            break;
        // event for chapter 4
        case "chap4.html":
            var w_key = true;
            var s_key = false;
            $(this).keyup(function(e){
                // w key 
                if(e.which==87 && w_key){
                    w_key = false;
                    s_key = true;
                    move_bar();
                }
                // s key 
                if(e.which==83 && s_key){
                    s_key = false;
                    w_key = true;
                    move_bar();
                }
            });
            break;
        // event for chapter 5
        case "chap5.html":
            var a_key = true;
            var s_key = false;
            var d_key = false;
            var w_key = false;
            $(this).keyup(function(e){
                // a key 
                if(e.which==65 && a_key){
                    a_key = false;
                    w_key = true;
                    move_bar();
                }
                // s key 
                if(e.which==83 && s_key){
                    s_key = false;
                    a_key = true;
                    move_bar();
                }
                //d key
                if(e.which==68 && d_key){
                    d_key = false;
                    s_key = true;
                    move_bar();
                }
                // w key 
                if(e.which==87 && w_key){
                    w_key = false;
                    d_key = true;
                    move_bar();
                }
            });
            break;
    }
})

//Detect browser loaded, replace default name with user name
document.addEventListener('DOMContentLoaded', function() {
    var temp = sessionStorage.getItem("name");
    if (temp) {
        $(".name").text(temp);
    } else {
        $(".name").text("Tarzan");
    }
    
}, false);


//start the story, skip naming
$("#part-of-story-form a").click(function(){
    start();
    event.preventDefault();
});

//hide form and make instructions visible
function start() {
    document.getElementById("part-of-story-form").style.visibility = "hidden";
    document.getElementById("instructions").style.visibility = "visible";
    
}

$("#instructions-ok").click(function(){
    start_reading();
    event.preventDefault();
});

//hide instructions and make start button visible
function start_reading() {
    document.getElementById("instructions").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "visible";
    
}

//Close popup
$(".close-button a").click(function(){
    var list = document.getElementsByClassName("popup");
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility = "hidden";
    }
    event.preventDefault();
})

//Open popups
$(".click-popup").click(function(){
    document.getElementById(this.id + "-popup").style.visibility = "visible";
    event.preventDefault();
})

//mouse over popup
$(".mouseover").mouseover(function(){
    document.getElementById(this.id + "-tooltip").style.animationName = "slide-in";
    document.getElementById(this.id + "-tooltip").style.right = "0px";
    event.preventDefault();
})
$(".mouseover").mouseout(function(){
    document.getElementById(this.id + "-tooltip").style.animationName = "slide-out";
    document.getElementById(this.id + "-tooltip").style.right = "-510px";
})
//mouse over popup with video
$(".mouseover-video").mouseover(function(){
    document.getElementById(this.id + "-tooltip").style.animationName = "slide-in";
    document.getElementById(this.id + "-tooltip").style.right = "0px";
    event.preventDefault();
})
$(".mouseover-popup a").click(function(){
    document.getElementById(this.id + "-tooltip").style.animationName = "slide-out";
    document.getElementById(this.id + "-tooltip").style.right = "-510px";
})

// audio control
$(".audio .player-controls a").click(function(){
    event.preventDefault();
    $(this).parent().toggleClass("playing");

});
$(".audio .player-controls a:first-child").click(function(){
    $(this).parent().parent().find("audio")[0].play();
});
$(".audio .player-controls a:nth-child(2)").click(function(){
    $(this).parent().parent().find("audio")[0].pause();
});

//show events
$("#show-event").click(function(){
    document.getElementById("event-window").style.visibility = "visible";
})


//increase progress bar in event 
var width = 0;
function move_bar() {
    var elem = document.getElementById("myBar"); 
    if (width >= 100) {
        skip_event();
    } else {
        width+=5;
        elem.style.width = width + '%';
    }

}

// skip event
function skip_event() {
    document.getElementById("myProgress").style.visibility = "hidden";
    document.getElementById("skip-button").style.visibility = "hidden";
    var list = document.getElementsByClassName("after-event");
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = "block";
    }
    $(".event p").text("You did it !!!");
    //close popup
    var list = document.getElementsByClassName("popup");
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility = "hidden";
    }
    
    // see what chapter is this
    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch (page) {
        // scroll to the content just appears
        case "chap1.html":
            window.scrollTo(0,820);
            break;
        case "chap2.html":
            window.scrollTo(0,300);
            break;
        case "chap3.html":
            window.scrollTo(0,document.body.scrollHeight);
            break;
        case "chap4.html":
            window.scrollTo(0,document.body.scrollHeight);
            break;
        case "chap5.html":
            window.scrollTo(0,document.body.scrollHeight);
            break;
    }
}

