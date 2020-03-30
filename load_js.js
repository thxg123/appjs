document.getElementById("params").setAttribute("placeholder","Body表单(不填默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");

function url_sqldb(url, params, header, referer, cookie, getua2) {
 var url = toString2(getnull(url)).replace(/'/g,"&#x27;").replace(/"/g,"&quot;");
 var params = toString2(getnull(params)).replace(/'/g,"&#x27;").replace(/"/g,"&quot;");
 var header = toString2(getnull(header)).replace(/'/g,"&#x27;").replace(/"/g,"&quot;");
 var referer = toString2(getnull(referer)).replace(/'/g,"&#x27;").replace(/"/g,"&quot;");
 var cookie = toString2(getnull(cookie)).replace(/'/g,"&#x27;").replace(/"/g,"&quot;");
 var getua2 = toString2(getnull(getua2)).replace(/'/g,"&#x27;").replace(/"/g,"&quot;");
  var getrandomid = randomid();
  var getmd5 = md5(url + params + header + referer + cookie + getua2);
  if (url == "") {
    return false;
  } else {
    try {
      var db = api.require("db");
      var ret = db.selectSqlSync({
        name: "app",
        sql: "select * from uesr where md5 = '" + getmd5 + "'"
      });
      if (ret.status) {
        if (JSON.stringify(ret.data) == "[]") {
          try {
            var db = api.require("db");
            var ret = db.executeSqlSync({
              name: "app",
              sql: "insert into uesr (id,md5,r,url2,params2,header2,referer2,cookie2,getua3) values ('" + getrandomid + "','" + getmd5 + "','" + Math.random() + "','" + url + "','" + params + "','" + header + "','" + referer + "','" + cookie + "','" + getua2 + "')"
            })
          } catch (e) {}
        }
      }
    } catch (e) {}
  }
}


function escape(val){
return getescape(val);
};

function alert(val){
api.alert({msg:val});
};
