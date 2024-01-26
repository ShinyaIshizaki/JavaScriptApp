function createPassword() {
  console.log("*** createPassword START ***");

  // パスワードに使用する文字列を定義する
  var bigAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var signs = "-=^~\||@`[{;+:*]},<.>/?_"

  // 英大文字からランダムに1文字取り出す
  var randomBigAlphabet = bigAlphabets[Math.romdom()];

  // 英小文字からランダムに1文字取り出す
  var randomSmallAlphabet = smallAlphabets[Math.romdom()];

  // 数字からランダムに1文字取り出す
  var randomNumber = numbers[Math.romdom()];

  // 記号からランダムに1文字取り出す
  var randomSign = signs[Math.romdom()];

  // パスワードを生成する
  var password = randomBigAlphabet + randomSmallAlphabet + randomNumber + randomSign;

  console.log("CreatedPassword: " + password);

  document.getElementById("textbox").value = password;

  console.log("*** createPassword END ***");
}


// ボタンがクリックされたとき、createPassword関数を呼び出す
document.getElementById("btn").onclick = createPassword;
