// ==UserScript==
// @author      Zro716
// @name        Scratch Topic Subscription Override
// @namespace   ScratchTopicSubscriptionOverride
// @description Allows you to unfollow closed topics
// @include     https://scratch.mit.edu/discuss/topic/*
// @version     2.0
// @grant       none
// ==/UserScript==

const csrf = document.cookie.match(/scratchcsrftoken=([a-zA-Z0-9]+)/)[1]

if (!document.querySelector('.markup.markItUpEditor')) {
	var btn = document.createElement('button')
	btn.innerHTML = 'Unsubscribe'
	btn.setAttribute('class', 'unfollow-button button grey')
	btn.setAttribute('title', 'Unsubscribe from this topic')
	
	var div = document.createElement('div')
	div.setAttribute('class', 'follow-topic top')
	
	btn.addEventListener('click', function() {
		var id = window.location.href.match(/\d+/)[0]
		var xhr = new XMLHttpRequest()
		xhr.open('POST', `https://scratch.mit.edu/discuss/subscription/topic/${id}/delete/`, true)
		xhr.setRequestHeader('X-CSRFToken', csrf)
		xhr.send()
		div.remove()
    })

	var divParent = document.querySelector('.linkst')
	div.appendChild(btn)
	divParent.insertBefore(div, divParent.firstChild)
}
