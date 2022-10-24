function Algo() {}

Algo.prototype.reverse = function(str) {
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
  return str===(str.split('').reverse().join(''));
};

Algo.prototype.capitalize = function(str) {
  var words = str.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  
  return words.join(' ');
};

module.exports = Algo;
