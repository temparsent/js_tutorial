(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("tenparsent-palindrome");

function palindromeTester() {
  let string = prompt("パリンドロームをテストしたい文字列を入力してください:");
  let phrase = new Phrase(string);

  if (phrase.palindrome()) {
    alert(`"${phrase.content}"はパリンドロームです！`);
  } else {
    alert(`"${phrase.content}"はパリンドロームではありません`)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function () {
    palindromeTester();
  });
});
},{"tenparsent-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

//reverse()メソッドを追加して全てのStringで使えるようにする。
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // パリンドロームのテスト用に変換したcontentを返す
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  //コンテンツの文字だけ返す
  //利用例
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi;
    return (this.content.match(lettersRegEx) || []).join("");
  }
  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

},{}]},{},[1]);
