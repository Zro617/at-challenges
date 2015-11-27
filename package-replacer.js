(function() {
  var posts = document.getElementsByClassName("postright");
  for (var p = 0;p < posts.length; p++)
      posts[p].innerHTML = posts[p].innerHTML.replace(/:package:/g,'<img src="http://i67.tinypic.com/24wsdo6.png"></img>');
})();
