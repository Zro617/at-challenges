// @thisandagain pls explain

(function() {
  var thispost = prompt("Put topic or post URL here boi");
  if (!post) return console.log(">:I");
  var comment = "pls explain "+thispost;
  var xhr = new XMLHttpRequest();
  xhr.open("POST","https://scratch.mit.edu/site-api/comments/user/Zro716/add/",true);
  // TODO: Work on getting the CSRF token
  // xhr.setRequestHeader("X-CSRF-Token",csrf_token_goes_here);
  xhr.onload = function() {
    if (xhr.status == 200) alert("Comment sent. Hope thisandagain replies.");
    else alert("Something went wrong! *angry :package:*");
  };
  xhr.send({content:comment, parent_id:"", commentee_id:""});
})();
