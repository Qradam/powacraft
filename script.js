"use strict";

var flick = "OFF";
var flick2 = "OFF";
var flick3 = "OFF";

var pocet;
var statusInterval;

    $("window").ready(() => {
	 pocet = document.getElementById("online-players");
     loadStatus();
     statusInterval = setInterval(loadStatus(), 65*5);
});
	 
function loadStatus() {	
       $.get("https://api.mcsrvstat.us/2/mc.powacraft.sk", (data) => {
           if (data.online) {
               document.getElementById("online-status").innerText = "Online";

               var hraci = data.players.online.toString() + "/" + data.players.max.toString();
               pocet.innerText = hraci;
           } else {
               document.getElementById("online-status").innerText = "Offline";

               pocet.innerText = "-";
           }
        });
}





$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
});

function Hamburger() {
    if (flick == "OFF") {
        $(".line").css("background-color", "#A3E635");
        $("li").show(500);
        flick = "ON";
    } else {
        $(".line").css("background-color", "white");
        $("li").hide(500);
        flick = "OFF";
    }
}

function Show(element) {
    $("td")
        .not(":nth-child(5)")
        .click(function() {
            return false;
        });

    if (flick2 == "OFF") {
        $(element).css("display", "flex");
        $("html, body").animate({
                scrollTop: $(".vipsection").offset().top,
            },
            0
        );
        flick2 = "ON";
        setTimeout(() => {
            $("body").css("overflow", "hidden");
        }, 700);
    } else {
        $(element).hide();
        $("body").css("overflow", "auto");
        flick2 = "OFF";
    }
}

function Pomoc() {	
    if (flick3 == "OFF") {
        $("nav span").show(200);
        flick3 = "ON";
    } else {
        $("nav span").hide(200);
        flick3 = "OFF";
    }
}

function ShowTable(element) {
    $(".zaklad,.praca,.ah,.res").hide();
    $(element).show();
}