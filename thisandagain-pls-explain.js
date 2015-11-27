// @thisandagain pls explain

(function() {
  var thispost = prompt("Put topic or post URL here boi");
  if (!thispost) return console.log(">:I");
  var comment = "pls explain -> "+thispost;
  var csrf = document.cookie.match(/scratchcsrftoken=([0-9a-zA-Z]+)/)[1]; // thanks @liam48D
  if (!csrf) return console.log("No CSRF token found");
  var xhr = new XMLHttpRequest();
  xhr.open("POST","https://scratch.mit.edu/site-api/comments/user/thisandagain/add/",true);
  xhr.setRequestHeader("X-Csrf-Token",csrf);
  xhr.onload = function() {
    if (xhr.status == 200) alert("Comment sent. Hope thisandagain replies.");
    else alert("Something went wrong! *angry :package:*");
  };
  xhr.send({content:comment, parent_id:"", commentee_id:""});
})();
