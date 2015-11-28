// @thisandagain pls explain

(function(user) {
  var thispost = prompt("Put topic or post URL here boi");
  if (!thispost) return console.log(">:I");
  var comment = "pls explain -> "+thispost;
  var csrf = document.cookie.match(/scratchcsrftoken=([0-9a-zA-Z]+)/)[1]; // thanks @liam48D
  if (!csrf) return console.log("No CSRF token found");
  var xhr = new XMLHttpRequest();
  xhr.open("POST","https://scratch.mit.edu/site-api/comments/user/"+user+"/add/",true);
  xhr.setRequestHeader("X-CSRFToken",csrf);
  xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
  xhr.onload = function() {
    if (xhr.status == 200) alert("Comment sent to " + user + "!");
    else alert("Something went wrong! *angry :package:*");
  };
  xhr.send(JSON.stringify({content:comment, parent_id:"", commentee_id:""}));
})("thisandagain");
