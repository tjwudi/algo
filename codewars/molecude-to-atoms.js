function merge(dest, source) {
  if (!source || !dest) {
    throw new Error('dest or source should be an object');
  }
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (!dest[key]) {
        dest[key] = source[key];
      }
      else {
        dest[key] += source[key];  
      }
    }
  }
  // modify dest and return it as well
  return dest;
}

function findMatchBracket(formula) {
  var cur = 0,
      i = 0;
  while (i < formula.length) {
    if ( ['[', '(', '{'].indexOf(formula[i]) > -1 ) {
      cur ++;
    }
    if ( [']', ')', '}'].indexOf(formula[i]) > -1 ) {
      cur --;
    }
    if (cur === 0) {
      return i;
    }
    i ++;
  }
}

function mulProperties(obj, mul) {
  for (var key in obj) {
    if ( obj.hasOwnProperty(key) ) {
      obj[key] *= mul;
    }
  }
  return obj;
}

function parseMolecule(formula) {
  var cur = {};
  if (!formula || formula.length === 0) {
    return cur; 
  }
  var el = /^([A-Z][a-z]?)(\d*)/.exec(formula),
      matchBracket,
      mul,
      tmp;
  if (el) {
    el[2] = el[2] || '1';
    cur[el[1]] = parseInt(el[2], 10);
    // parse recursively
    merge(cur, parseMolecule(formula.slice(el[0].length)));
  }
  else {
    matchBracket = findMatchBracket(formula);
    mul = /^(\d*)/.exec(formula.slice(matchBracket + 1));
    tmp = parseMolecule(formula.slice(1, matchBracket));
    mulProperties(tmp, parseInt(mul[0] || '1', 10));
    merge(cur, tmp);
    merge(cur, parseMolecule(formula.slice(matchBracket + mul[0].length + 1)));
  }
  return cur; 
}


//test 1
var obj = {'Hg':1, 'O':2};
mulProperties(obj, 4);
console.log(obj);

//test2
var source = {'Hg':2, 'H':5};
var target = {'Hg':7, 'O':2};
merge(target, source);
console.log(target);

//test3
console.log(findMatchBracket('[Mg(OH)2]OH'));

//test4
console.log(parseMolecule('Mg(OH)2'));

//test5
console.log(parseMolecule('CH3CHO(OH)2'));


//test6
console.log(parseMolecule('(C5H5)Fe(CO)2CH3'));
