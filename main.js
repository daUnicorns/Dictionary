var fs = require('fs');
var obj = {};
//
function wordImporter(value) {
  var allWords = __dirname + '/words.txt';
  var splitWords;
  var data = fs.readFileSync('words.txt');
  var superData = data.toString().split('\n');
}

console.log(wordImporter('rob'));
// findWord = function (word, callback) {
//   // who wants to volunteer to implement the method?
//   var found = [];
//   for (var i = 0; i < ac.words.length; i++) {
//     if (ac.words[i].search(word) === 0) {
//       found.push(ac.words[i]);
//     }
//   }
//   return callback(null, found);
// };

// var filename = __dirname + '/words.txt';
// fs.readFile(filename, 'utf8', function (err, data) {
//   ac.words = data.split('\n');
//   return callback(err, ac.words);
// });
