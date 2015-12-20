// ==UserScript==
// @author      Zro716
// @name        Package Replacer
// @namespace   PackageReplacer
// @description Replaces :package: on pages with Github's Package emote
// @include     https://scratch.mit.edu/discuss/topic/*
// @version     1.1
// @grant       none
// ==/UserScript==

var posts = document.getElementsByClassName("postright");
for (var p = 0;p < posts.length; p++) posts[p].innerHTML = posts[p].innerHTML.replace(/:package:/g,'<img src="http://i67.tinypic.com/24wsdo6.png"></img>');
