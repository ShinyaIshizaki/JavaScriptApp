function createPassword() {
  console.log("*** btn clicked ***");
  
  // パスワードを生成する
  var password = Math.random().toString(36).slice(-8);

  console.log(password);

  // パスワードをテキストボックスに設定する
  document.getElementById("textbox").value = password;
}


// ボタンがクリックされたとき、createPassword関数を呼び出す
document.getElementById("btn").onclick = createPassword;
