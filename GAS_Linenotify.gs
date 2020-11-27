//=====================================
//PostをLineに送る。
//
//=====================================

//設定
//Line Notify TOKEN
var strToken = "yourtoken";

/*
//postされるたデータをメッセージに変換
function Post(p){
  var body = p.postData.contents;
  var msg = body.toUpperCase();
  sendLine(msg)
  }
*/

function setMsg(){
  var msg = "お知らせだよ！"
  sendLine(msg)
}


//Lineを送信する
function sendLine(strMessage){
  var options =
   {
     "method"  : "post",
     "payload" : "message=" + strMessage,
     "headers" : {"Authorization" : "Bearer "+ strToken}
 
   };
 
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}