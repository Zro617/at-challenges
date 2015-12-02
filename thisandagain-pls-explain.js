// ==UserScript==
// @name         @thisandagain pls explain
// @namespace    thisandagainPlsExplain
// @version      1.0
// @description  Adds a magic button to summon thisandagain
// @author       Zro716
// @match        https://scratch.mit.edu/discuss/*
// @grant        none
// ==/UserScript==
"use strict";

function Summon(user,postid) {
  if(confirm("Are you sure you want to summon "+user+"?")){
    var comment = "pls explain -> https://scratch.mit.edu/discuss/post/"+postid+"/";
    var csrf = document.cookie.match(/scratchcsrftoken=([0-9a-zA-Z]+)/); // thanks @liam48D
    if (!csrf) return alert("You need to be logged in.");
    csrf = csrf[0];
    var xhr = new XMLHttpRequest();
    xhr.open("POST","https://scratch.mit.edu/site-api/comments/user/"+user+"/add/",true);
    xhr.setRequestHeader("X-CSRFToken",csrf);
    xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
    xhr.onload = function() {
    if (xhr.status == 200) alert(user + " has been summoned!");
    else alert("Oops! Can't do that. :/");
  };
    xhr.send(JSON.stringify({content:comment, parent_id:"", commentee_id:""}));
  }
}

// the only textarea is the markitup editor which is only shown if the user is logged in
var isloggedin = document.getElementsByTagName("textarea"); 
if (!isloggedin.length) return;

var posts = document.getElementsByClassName("blockpost roweven firstpost");
if (posts.length) {
  for (var p=0,plsexplain,btn,id,ul;p<posts.length;p++){
    plsexplain = document.createElement("li");
    plsexplain.setAttribute("class","postexplain");
    //plsexplain.appendChild(document.createTextNode("| "));
    btn = document.createElement("button");
    btn.setAttribute("class","plsexplain");
    btn.setAttribute("onclick","Summon('thisandagain',this.id)");
    btn.innerHTML = "thisandagain pls explain";
    id = posts[p].id.match(/\d+/)[0];
    btn.setAttribute("id",id);
    plsexplain.appendChild(btn);
    ul = posts[p].getElementsByClassName("postfootright")[0].getElementsByTagName("ul")[0];
    //ul.appendChild(plsexplain);
    ul.insertBefore(plsexplain,ul.firstChild.nextSibling);
  }
}
