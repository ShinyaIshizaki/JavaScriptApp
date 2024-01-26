function createPassword() {
  console.log("*** createPassword START ***");

  // パスワードに使用する文字列を定義する
  let bigAlphabets = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
  let smallAlphabets = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  let numbers = "0,1,2,3,4,5,6,7,8,9";
  let signs = "(,),{,},[,],=,+,-,*,/,!,#,$,%,&,'\,\",^,~,\\,|,<,>,\,,.,?";

  // デバッグ用としてコンソールに出力する
  console.log("bigAlphabets: " + bigAlphabets);
  console.log("smallalphabets: " + smallAlphabets);
  console.log("numbers: " + numbers);
  console.log("signs: " + signs);

  // 文字列を分割する
  const arrayBigAlphabets = bigAlphabets.split(",");
  const arraySmallAlphabets = smallAlphabets.split(",");
  const arrayNumbers = numbers.split(",");
  const arraySigns = signs.split(",");

  // デバッグ用としてコンソールに出力する
  console.log("arrayBigAlphabets[1]: " + arrayBigAlphabets[1]);
  console.log("arraySmallalphabets[3]: " + arraySmallAlphabets[3]);
  console.log("arrayNumbers[5]: " + arrayNumbers[5]);
  console.log("arraySigns[7]: " + arraySigns[7]);

  // 配列の添字を定義する
  let index;

  // 配列（英大文字）からindex番目の1文字を取り出す
  console.log("arrayBigAlphabets.length: " + arrayBigAlphabets.length);
  const randomNumberForBigAlphabet = Math.random();  // 0 (含む) から 1 (含まない) までの擬似乱数である浮動小数点数
  index = getPositiveInteger(randomNumberForBigAlphabet, arrayBigAlphabets.length);
  console.log("index: " + index);
  const randomBigAlphabet = arrayBigAlphabets[index];

  // 配列（英小文字）からindex番目の1文字を取り出す
  console.log("arraySmallAlphabets.length: " + arraySmallAlphabets.length);
  const randomNumberForSmallAlphabet = Math.random();  // 0 (含む) から 1 (含まない) までの擬似乱数である浮動小数点数
  index = getPositiveInteger(randomNumberForSmallAlphabet, arraySmallAlphabets.length);
  console.log("index: " + index);
  const randomSmallAlphabet = arraySmallAlphabets[index];

  // 配列（数字）からindex番目の1文字を取り出す
  console.log("arrayNumbers.length: " + arrayNumbers.length);
  const randomNumberForNumbers = Math.random();  // 0 (含む) から 1 (含まない) までの擬似乱数である浮動小数点数
  index = getPositiveInteger(randomNumberForNumbers, arrayNumbers.length);
  console.log("index: " + index);
  const randomNumber = arrayNumbers[index];

  // 配列（記号）からindex番目の1文字を取り出す
  console.log("arraySigns.length: " + arraySigns.length);
  const randomNumberForSigns = Math.random();  // 0 (含む) から 1 (含まない) までの擬似乱数である浮動小数点数
  index = getPositiveInteger(randomNumberForSigns, arraySigns.length);
  console.log("index: " + index);
  const randomSign = arraySigns[index];

  // パスワードを生成する
  let password = randomBigAlphabet + randomSmallAlphabet + randomNumber + randomSign;

  // デバッグ用としてコンソールに出力する
  console.log("randomBigAlphabet: " + randomBigAlphabet);
  console.log("randomSmallAlphabet: " + randomSmallAlphabet);
  console.log("randomNumber: " + randomNumber);
  console.log("randomSign: " + randomSign);
  console.log("CreatedPassword: " + password);

  document.getElementById("textbox").value = password;

  console.log("*** createPassword END ***");
}

// ボタンがクリックされたとき、createPassword関数を呼び出す
document.getElementById("btn").onclick = createPassword;

// 生成した乱数を0以上最大値未満の整数に補正する
function getPositiveInteger(randomNumber, maxValue) {
  
  // 負の数の場合
  if (randomNumber < 0) {

    // 正の数に補正してから最大値未満に補正して小数点以下を切り捨てる
    return Math.floor(randomNumber * (-1) * maxValue);
  }

  // 最大値未満に補正して小数点以下を切り捨てる
  return Math.floor(randomNumber * maxValue);
}