// WRONG!!

function parseMolecude(formula) {
  var i = 0,
      len = formula.length,
      token,
      els = {};
  while (i < len) {
    token = nextToken(i, formula);
    if (token.type === 'num') {
      multiplyEls(els, ~~token.val);
    }
    else if (token.type === 'el') {
      addEl(els, token.val);
    }
  }
}

function addEl(obj, el) {
  if (!obj[el]) {
    obj[el] = 1;
  }
  else {
    obj[el]
}

function multiplyEls(obj, mul) {
  var key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] * mul;
    }
  }
}

function nextToken(i, formula) {
  var partial = formula.slice(i), 
    testNum = /^([0-9]+)/.exec(partial),
    testEl = /^([A-Z][a-z]?)/.exec(partial);
  if (testNum) {
    return { type: 'num', val: testNum[1] };
  }
  else if (testEl) {
    return { type: 'el', val: testEl[1] };
  }
  else {
    // nested elements
    return { type: 'nested', val: findMatch(i, formula) };
  }
}

function findMatch(i, formula) {
  var cnt = 0,
      idx = i,
      len = formula.length;
  for (; idx < len; idx ++) {
    if (['[', '(', '{'].indexOf(formula[idx]) > -1) {
      cnt ++;
    }
    else if ([']', ')', '}'].indexOf(formula[idx]) > -1) {
      cnt --;
    }
    if (cnt === 0) {
      return idx;
    }
  }
}
