// ==UserScript==
// @name         thisandagain Summoner
// @namespace    thisandagainPlsExplainThisPost
// @version      1.0
// @description  Adds a button to posts to magically summon thisandagain
// @author       Zro716
// @match        https://scratch.mit.edu/discuss/*
// @grant        none
// ==/UserScript==

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
    btn.setAttribute("onclick",
      'if(confirm("Are you sure you want to summon thisandagain? Remember, please do not use this to spam him.")){'+
      'var csrf=document.cookie.match(/scratchcsrftoken=([0-9a-zA-Z]+)/);'+
      'if(!csrf)return alert("You need to be logged in.");'+
      'csrf=csrf[1];var cmt="pls explain -> https://scratch.mit.edu/discuss/post/"+this.id+"/";'+
      'var xhr = new XMLHttpRequest();'+
      'xhr.open("POST","https://scratch.mit.edu/site-api/comments/user/thisandagain/add/",true);'+
      'xhr.setRequestHeader("X-CSRFToken",csrf),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");'+
      'xhr.onload=function(){alert(xhr.status==200?"thisandagain has been summoned!":"Oops! Cannot do that.");};'+
      'xhr.send(JSON.stringify({content:cmt, parent_id:"", commentee_id:""}));}'
    );
    btn.innerHTML = "thisandagain pls explain";
    id = posts[p].id.match(/\d+/)[0];
    btn.setAttribute("id",id);
    plsexplain.appendChild(btn);
    ul = posts[p].getElementsByClassName("postfootright")[0].getElementsByTagName("ul")[0];
    //ul.appendChild(plsexplain);
    ul.insertBefore(plsexplain,ul.firstChild.nextSibling);
  }
}
