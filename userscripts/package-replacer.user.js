// ==UserScript==
// @author      Zro716
// @name        Package Replacer
// @namespace   PackageReplacer
// @description Replaces :package: on pages with Github's Package emote
// @include     https://scratch.mit.edu/discuss/topic/*
// @version     2.0
// @grant       none
// ==/UserScript==

for (var p of document.getElementsByClassName("postright")) {
	p.innerHTML = p.innerHTML.replace(/:package:/g,'<img src="http://i67.tinypic.com/24wsdo6.png"></img>')
}
