const fs = require('fs');
const path = require('path');
fs.readdir('./markdown', function(err,files){
	for(var i=0; i<files.length; i++){
	var p = path.join('./markdonw',files[i]);
	var markdown = fs.readFileSync(p).toString();
	var template = fs.readFileSync('./template.html').toString();
	var result = template.replace('%content%',markdown);
	fs.writeFileSync(files[i]+'.html',result);
	}
})
