String.prototype.repeat = function(times) {
  var result = '',
      i;
  for (i = 0; i < times; i ++) {
    result += this.valueOf();
  }
  return result;
};

var justify = function(str, len) {
  var words = str.split(' '),
      curWords = [],
      curLen = 0,
      result = '';
  
  
  words.map(function insert(word, idx) {
    if (curLen + word.length + curWords.length <= len) {
      curWords.push(word);
      curLen += word.length;
      
      if (idx === words.length - 1) {
        curWords.map(function(word, idx) {
          result += word;
          result += (idx === curWords.length - 1) ? '\n' : ' ';
        });
      }
    }
    else {
      curWords.map(function(word, idx) {
        var space4Spaces = len - curLen;
        result += word;
        if (idx !== curWords.length - 1) {
          result += ' '.repeat(Math.floor(space4Spaces / (curWords.length - 1)) + (idx < (space4Spaces % (curWords.length - 1)) ? 1 : 0));
        }
        else {
          result += '\n';
        }
      });
      
      // redo the insertion
      curWords = [];
      curLen = 0;
      insert(word, idx);
    }
  });
  
  return result;
};


console.log(justify('Loremddsasadaswe ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sapiente iure libero delectus vel ducimus unde commodi debitis optio quae perferendis odit sint quam ipsum quod accusamus in voluptas necessitatibus! sda 1e1 dasd sadq23 1 casd ad12 dasd ad asdas dasdqwe 1d aas dasd qdqw qwd qw', 20));