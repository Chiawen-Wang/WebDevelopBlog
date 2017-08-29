const fs = require('fs');
const path = require('path');
fs.readdir('E:/Tensent_BAT/WebDevelopBlog/markdown', function(err,files){
	console.log(files);
	for(var i=0; i<files.length; i++){
	var p = path.join('E:/Tensent_BAT/WebDevelopBlog/markdown',files[i]);
	var markdown = fs.readFileSync(p).toString();
	var template = fs.readFileSync('E:/Tensent_BAT/WebDevelopBlog/template.html').toString();
	var result = template.replace('%content%',markdown);
	fs.writeFileSync(files[i]+'.html',result);
	}
})
