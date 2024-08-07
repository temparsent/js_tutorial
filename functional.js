let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


// URLに適した文字列を返す
// 変換例: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}


//URL生成：　命令型バージョン
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function (element) {
    urls.push(urlify(element));
  });
  return urls;
}

console.log(imperativeUrls(states));

//URL生成：　関数型バージョン
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// map()を使い、states変数を引数に取ってhttps://example.com/<URLに適した形式>を要素に持つ配列を返す関数を書いてください。
function generateUrls(ele) {
  return ele.map(eles => `https://example.com/${urlify(eles)}`);
}
console.log(generateUrls(states));

// 1単語の文字列抽出: 命令型バージョン
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function (element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  }); return singles;
}
console.log(imperativeSingles(states));

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

function includeDakota(dakota) {
  return dakota.filter(element => element.includes("Dakota"));
}
console.log(includeDakota(states));

function twoElements(two) {
  return two.filter(ele => ele.split(/\s+/).length === 2);
}
console.log(twoElements(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: 命令型バージョン
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function (n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum:関数型バージョン
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));




// lengths[state] = state.length;

//length: 命令型バージョン
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function (element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

//lengths: 関数型バージョン
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));

//演習問題
//reduce()関数を用いて、配列内の全要素の積を返す関数を書いてください。（ヒント: +=による加算を*=による乗算に置き換えます。）

// sum:関数型バージョン
function functionalMultiply(elements) {
  return elements.reduce((total, n) => {return total *= n; });
} 
console.log(functionalMultiply(numbers));

// lengths: 関数型バージョン
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] =element.length;return lengths;}, {});
}
console.log(functionalLengths(states));
