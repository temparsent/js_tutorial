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

let button = document.querySelector("#palindromeTester");
button.addEventListener("click", function() {
  palindromeTester();
})