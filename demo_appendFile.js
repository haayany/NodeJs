var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello Content!', function(err){
  if (err) throw err;
  console.log('Saved!');
});

//it appends specified content to a file, if the file doesn't exist, it will create a file by the name tried to appends.
