/**
	Simple Cookie Prompt
	Idea: @panda_doodle - Coded: @michaelw90

	Forked: @theartofweb
**/
var cPrompt = {

	init: function(){
		if(!this.checkCookie()){
			this.loadPrompt();
		}
	},

	checkCookie: function(){
		return document.cookie.match(/cPrompt_useCookies=1/) && this.saveCookie();
	},

	loadPrompt: function(){
		var holder = document.createElement("div");
		holder.innerHTML = "This site would like to place cookies on your computer to help make this website better. To find out more about cookies, visit <a href='http://en.wikipedia.org/wiki/HTTP_cookie' style='color: #FFF;'>Wikipedia</a>.<br /><input type='checkbox' onclick='cPrompt.clickEvent(this);' id='cPrompt_check'><label for='cPrompt_check'>I accept cookies from this site.</label>";
		holder.style.cssText = "position: absolute; padding: 10px; background: rgba(0,0,0,0.85); font-family: sans-serif; font-size: 11px; color: rgba(255,255,255,0.85);";
		holder.id = "cPrompt_Holder";
		var b = document.getElementsByTagName("body")[0];
		b.insertBefore(holder, b.firstChild)
	},

	saveCookie: function(){
		document.cookie = "cPrompt_useCookies=1;expires=" + (new Date()).toGMTString().replace(/(\d{4})/, function(x){ return Number(x)+1 })
		return true;
	},

	clickEvent: function(obj){
		this.saveCookie();
		document.getElementById("cPrompt_Holder").style.display = "none"
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