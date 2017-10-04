$('#Tencoder').on('submit', function(e){
	e.preventDefault();
	e.stopPropagation();
	var data = {
		input: document.getElementById('TencoderInput').value,
		method: document.getElementById('TencoderMethod').value
	}
	
	switch(data.method) {
		case 'textToBase64':
			var wordAr = CryptoJS.enc.Utf8.parse(data.input);
			document.getElementById('TencoderOutput').value = CryptoJS.enc.Base64.stringify(wordAr);
			break;
		case 'base64ToText':
			var base64 = CryptoJS.enc.Base64.parse(data.input);
			document.getElementById('TencoderOutput').value = base64.toString(CryptoJS.enc.Utf8);
			break;
		case 'transliter':
			break;
		case 'textReverser':
			var wordAr = string.split(data.input);
			var output;
			for (var i = data.input.length-1; i = 0; i--) {
				output += wordAr[i];
			}
			document.getElementById('TencoderOutput').value = output;
			break;
		case 'textRandomizer':
			// var wordAr = string.split(data.input);
			// var output;
			// for (var i = 0; i = data.input.length; i++) {
				// output += wordAr[]
			// }
			// document.getElementById('TencoderOutput').value = output;
			break;
	}
});

$('#Htext').on('submit', function(e){
	e.preventDefault();
	e.stopPropagation();
	
	var data = {
		input: document.getElementById('HtextInput').value,
		method: document.getElementById('HtextMethod').value
	}
	
	switch (data.method) {
		case 'md5hashText':
			var output = CryptoJS.MD5(data.input);
			document.getElementById('HtextOutput').value = output;
			break;
		case 'sha1hashText':
			var output = CryptoJS.SHA1(data.input);
			document.getElementById('HtextOutput').value = output;
			break;
		case 'sha256hashText':
			var output = CryptoJS.SHA256(data.input);
			document.getElementById('HtextOutput').value = output;
			break;
		case 'sha512hashText':
			var output = CryptoJS.SHA512(data.input);
			document.getElementById('HtextOutput').value = output;
			break;
	}
	
});

$('#Hfile').on('submit', function(e){
	e.preventDefault();
	e.stopPropagation();
	console.log(e);
	var fData = new FormData($('#Hfile')[0]);
	
	if (typeof FileReader !== "undefined") {
		var size = document.getElementById('HfileInput').files[0].size;
		if (size > (2*1024*1024)) {
			alert("LESS THAN 2MB FILE!!!");
			return false;
		}
	}
	
	switch (document.getElementById('HfileMethod').value) {
		case 'md5hashFile':
			var output = CryptoJS.MD5(fData);
			document.getElementById('HfileOutput').value = output;
			break;
		case 'sha1hashFile':
			var output = CryptoJS.SHA1(fData);
			document.getElementById('HfileOutput').value = output;
			break;
		case 'sha256hashFile':
			var output = CryptoJS.SHA256(fData);
			document.getElementById('HfileOutput').value = output;
			break;
		case 'sha512hashFile':
			var output = CryptoJS.SHA512(fData);
			document.getElementById('HfileOutput').value = output;
			break;
	}
});

function passPoint(password) {
		
}

function generatePass(length, level) {
	var lowLevel  = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
	var midLevel  = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
	var highLevel = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-=_+";
	
	var output = '';
	
	switch(level) {
		case 'Low':
			for (var i = 0; i <= length; i++) {
				output += lowLevel[Math.floor(Math.random() * lowLevel.length)];
			}
			return output;
			break;
		case 'Middle':
			for (var i = 0; i <= length; i++) {
				output += lowLevel[Math.floor(Math.random() * midLevel.length)];
			}
			return output;
			break;
		case 'High':
			for (var i = 0; i <= length; i++) {
				output += lowLevel[Math.floor(Math.random() * highLevel.length)];
			}
			return output;
			break;
	}
}

$('#Gpassword').on('submit', function(e){
	e.preventDefault();
	e.stopPropagation();
	
	var data = {
		length: document.getElementById('GpasswordLength').value,
		method: document.getElementById('GpasswordMethod').value
	}
	
	document.getElementById('GpasswordOutput').value = generatePass(data.length, data.method);
});

$('#Efile').on('submit', function(e){
	e.preventDefault();
	e.stopPropagation();
});

var locationListener = {
	init: function() {
		this.parse(location.search.replace('?', ''));
	},
	
	check: function (event) {
		this.parse(event.state);
	},
	
	parse: function (url) {
		if (!url) return false;
		var $form = url.match('form=([A-Za-z0-9\-_]*)');
		var targetForm = $form[1];
		console.log($form);
		
		switch (targetForm) {
			case 'generatepassword':
			case 'checkpassword':
			case 'passwordgenerator':
				$('a[href*="#passwordgenerator"]').tab('show');
				if (targetForm == 'passwordgenerator') targetForm = 'generatepassword';
				break;
			case 'hashtext':
			case 'hashfile':
			case 'hashencoder':
				$('a[href*="#hashencoder"]').tab('show');
				if (targetForm == 'hashencoder') targetForm = 'hashtext';
				break;
			case 'encryptfile':
			case 'decryptfile':
			case 'fileencrypter':
				$('a[href*="#fileencrypter"]').tab('show');
				if (targetForm == 'fileencrypter') targetForm = 'encryptfile';
				break;
		}
		
		$('a[href*="#' + targetForm + '"]').tab('show');
	},
	
	push: function (url) {
		if (url == location.search) return false;
		history.pushState(url, null, url);
		history.replaceState(url, null, url);
		
		this.parse(url);
	}
}

window.addEventListener('popstate', function(e) {
	locationListener.check(e);
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	console.log(e.target, [1]);
	var locMatch = e.target.href.match(/#(\w+)/);
	var newLoc = (locMatch && locMatch[1]) ? locMatch[1] : 'textencoder';
	locationListener.push("?form=" + newLoc);
});

$(document).ready(function() {
	locationListener.init();
});

document.addEventListener('DOMContentLoaded', function() {
  alert("This is only test version \n of the project UltraTools!");
});