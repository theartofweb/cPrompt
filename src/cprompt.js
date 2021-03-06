/**
	Simple Cookie Prompt
	Idea: @panda_doodle - Coded: @michaelw90
**/
var cPrompt = {

	cookie: false,

	init: function(){
		if(!this.checkCookie()){
			this.loadPrompt();
		}
	},

	checkCookie: function(){
		if(document.cookie.match(/cPrompt_useCookies=1/)){
			this.cookie = true;
		}
		return this.cookie;
	},

	loadPrompt: function(){
		var holder = document.createElement('div');
		holder.innerHTML = "<div style='margin: 10px;'>This site would like to place cookies on your computer to help make this website better. To find out more about cookies, visit <a href='http://en.wikipedia.org/wiki/HTTP_cookie' style='color: #FFF;'>Wikipedia</a>.<br /><input type='checkbox' onclick='cPrompt.clickEvent(this);' id='cPrompt_check'> <label for='cPrompt_check'>I accept cookies from this site.</label></div>"
		holder.style.cssText = 'background: #000; position: absolute; width: 100%; color: #FFF; font-family: verdana; font-size: 11px; opacity: 0.85';
		holder.id = 'cPrompt_Holder';
		var b = document.getElementsByTagName('body')[0];
		b.insertBefore(holder, b.firstChild);
	},

	saveCookie: function(){
		document.cookie = "cPrompt_useCookies=1;expires=" + (new Date()).toGMTString().replace(/\d{4}/, '2050');
	},

	clickEvent: function(obj){
		if(obj.checked){
			this.saveCookie();
			document.getElementById('cPrompt_Holder').style.display = 'none';
		}
	}
}
if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		cPrompt.init();
	}, false);
}else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		if(document.readyState === "complete"){
			cPrompt.init();
		}
	});
}