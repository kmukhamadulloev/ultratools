$('#text-encoder-form').on('submit', function(e) {
	e.preventDefault();
	e.stopPropagation();
	var data = {
		input: document.getElementById('text-encoder-form-input').value,
		method: document.getElementById('text-encoder-form-method').value
	}
	switch(data.method) {
		case 'text-to-base64':
			document.getElementById('text-encoder-form-output').value = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data.input));
			break;
		case 'base64-to-text':
			document.getElementById('text-encoder-form-output').value = CryptoJS.enc.Base64.parse(data.input).toString(CryptoJS.enc.Utf8);
			break;
		case 'text-reverse':
			document.getElementById('text-encoder-form-output').value = data.input.split('').reverse().join('');
			break;
		case 'text-randomize':
			document.getElementById('text-encoder-form-output').value = 'wait for update';
			break;
		case 'text-count':
			document.getElementById('text-encoder-form-output').value = 'chars: ' + data.input.length.toString();
			break;
	}
});

$('#text-encoder-form-clear-all').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	document.getElementById('text-encoder-form-input').value = "";
	document.getElementById('text-encoder-form-method').value = "texttobase64";
	document.getElementById('text-encoder-form-output').value = "";
});

$('#file-encoder-form').on('submit', function(e) {
	
});

$('#file-encoder-form-clear-all').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	
});

$('#text-encrypter-form').on('submit', function(e) {
	e.preventDefault();
	e.stopPropagation();
	var data = {
		input: document.getElementById('text-encrypter-form-input').value,
		password: document.getElementById('text-encrypter-form-password').value,
		action: document.getElementById('text-encrypter-form-action').value,
		method: document.getElementById('text-encrypter-form-method').value
	}
	switch(data.method) {
		case 'aes-128-cbc':
			if (data.action == 'encrypt') {
				document.getElementById('text-encrypter-form-output').value = CryptoJS.AES.encrypt(data.input, data.password).toString();
			} else if (data.action == 'decrypt') {
				document.getElementById('text-encrypter-form-output').value = CryptoJS.AES.decrypt(data.input, data.password).toString(CryptoJS.enc.Utf8);
			}
			break;
		case 'aes-192-cbc':
			break;
		case 'aes-256-cbc':
			break;
		case 'bf-cbc':
			break;
	}
});

$('#text-encrypter-form-clear-all').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	
});

$('#file-encrypter-form').on('submit', function(e) {
	e.preventDefault();
	e.stopPropagation();
	
});

$('#fileencrypterformclearall').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	
});

$('#text-hasher-form').on('submit', function(e) {
	e.preventDefault();
	e.stopPropagation();
	var data = {
		input: document.getElementById('text-hasher-form-input').value,
		method: document.getElementById('text-hasher-form-method').value
	}
	switch(data.method) {
		case 'md5':
			document.getElementById('text-hasher-form-output').value = CryptoJS.MD5(data.input).toString();
			break;
		case 'sha1':
			document.getElementById('text-hasher-form-output').value = CryptoJS.SHA1(data.input).toString();
			break;
		case 'sha256':
			document.getElementById('text-hasher-form-output').value = CryptoJS.SHA256(data.input).toString();
			break;
		case 'sha512':
			document.getElementById('text-hasher-form-output').value = CryptoJS.SHA512(data.input).toString();
			break;
	}
});

$('#text-hasher-form-clear-all').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	document.getElementById('text-hasher-form-input').value = "";
	document.getElementById('text-hasher-form-method').value = "md5";
	document.getElementById('text-hasher-form-output').value = "";
});

$('#file-hasher-form').on('submit', function(e) {
	e.preventDefault();
	e.stopPropagation();
	var data = {
		input: document.getElementById('file-hasher-form-input').files[0],
		method: document.getElementById('file-hasher-form-method').value
	}
	var filedata = new FormData($('')[0]);
	if (typeof FileReader !== 'underfined') {
		if (data.input.size > (2*1024*1024)) {
			alert("File needs to be less than 2 megabytes.");
			return false;
		}
	}
	switch(data.method) {
		case 'md5':
			document.getElementById('file-hasher-form-output').value = CryptoJS.MD5(filedata);
			break;
		case 'sha1':
			document.getElementById('file-hasher-form-output').value = CryptoJS.SHA1(filedata);
			break;
		case 'sha256':
			document.getElementById('file-hasher-form-output').value = CryptoJS.SHA256(filedata);
			break;
		case 'sha512':
			document.getElementById('file-hasher-form-output').value = CryptoJS.SHA512(filedata);
			break;
	}
});

$('#file-hasher-form-clear-all').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	document.getElementById('file-hasher-form-input').value = '';
	document.getElementById('file-hasher-form-method').value = 'md5';
	document.getElementById('file-hasher-form-output').value = '';
});


/*
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
			const output = data.input.split('').reverse().join('');
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
*/