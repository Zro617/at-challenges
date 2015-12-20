// ==UserScript==
// @author      Zro716
// @name        Scratch Topic Subscription Override
// @namespace   ScratchTopicSubscriptionOverride
// @description Allows you to unfollow closed topics
// @include     https://scratch.mit.edu/discuss/topic/*
// @version     1
// @grant       none
// ==/UserScript==

var isClosed = !document.getElementsByClassName("markup markItUpEditor").length;
if (isClosed) {
  var id = window.location.href.match(/\d+/)[0],
      csrf = document.cookie.match(/scratchcsrftoken=([a-zA-Z0-9]+)/)[1];
  if (csrf) { // need to be logged in
    var btn = document.createElement("button"),
        div = document.createElement("div"),
        divParent = document.getElementsByClassName("linkst")[0];
    btn.setAttribute("class","unfollow-button button grey");
    btn.setAttribute("title","Unsubscribe to this topic");
    btn.setAttribute("id",id);
    btn.onclick = function() {
      var xhr = new XMLHttpRequest();
      xhr.open("POST","https://scratch.mit.edu/discuss/subscription/topic/"+id+"/delete/",true);
      xhr.setRequestHeader("X-CSRFToken",csrf);
      xhr.onload = function() { alert(xhr.status == 200 ? "Unsubscribed." : "An error occurred.") };
      xhr.send();
      div.removeChild(btn);
    };
    btn.innerHTML = "Unfollow";
    div.setAttribute("class","follow-topic top");
    div.appendChild(btn);
    divParent.insertBefore(div,divParent.firstChild);
  }
}
