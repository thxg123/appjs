try{
document.getElementById("params").setAttribute("placeholder","Body表单(不填则默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");
}catch(e){};


try{
fileBrowser = api.require("fileBrowser");
fileBrowser.skin({
    skin:1,
    color:{
      bgColor:"#FF454E60", /*（可选项）字符串类型；每行的背景颜色，支持 rgb，rgba，#；默认："#fff"*/
      titleColor:"#FFFFFF", /*（可选项）字符串类型；每行的标题颜色，支持 rgb，rgba，#；默认："#fff"*/
      subtitleColor:"", /*（可选项）字符串类型；每行的副标题颜色，支持 rgb，rgba，#；默认："#fff"*/
      timeColor:"", /*（可选项）字符串类型；每行的时间颜色，支持 rgb，rgba，#；默认："#fff"*/
      lineColor:"", /*（可选项）字符串类型；每行的分割线颜色，支持 rgb，rgba，#；默认："#fff"*/
    }
});
}catch(e){};

function httpheader(val){
try{
if(val.substr(0,1)==":"){
val=val.substr(1);
}
var val=getnull(toString2(val)).replace(/^\r+|\n+$/gi,"").replace(/[\r\n]{1,}/gi,$api.getStorage("Header_log"));
var value=val.split($api.getStorage("Header_log"));
var jstype = false;
var header_val={};
for (var i=0, len=value.length; i<len; i++) {
try{
var valueobj=value[i].match(/^(.*?):|(.*?)$/gi);
headerkey=getnull(valueobj[0]).replace(/(^\s*)|(\s*$)/gi,"");
headerval=getnull(valueobj[1]).replace(/(^\s*)|(\s*$)/gi,"");
}catch(e){
headerkey="";
headerval="";
};
if(headerkey && headerval){
if(headerkey.substr(-1) == ":"){
headerkey=getnull(headerkey).replace(/(:$)/gi, "");
}
var headerkey2=headerkey.toLowerCase();
if(headerkey && headerval && headerkey2+headerval!="content-length"+headerval && headerkey2!="content-length"){
if(headerkey=="Content-Type" && headerval.match(/text\/plain/)){
var jstype = true;
}
if(headerkey=="Content-Type" && headerval.match(/application\/x-www-form-urlencoded/) && jstype==true){
headerkey = "";
headerval = "";
var jstype = false;
}
if(headerkey && headerval){
header_val[getescape(headerkey)]=getescape(headerval);
}
}
}
}

if(getnull(JSON.stringify(header_val)) && getnull(JSON.stringify(header_val))!=""){
return header_val;
}else{
return {};
}
}catch(e){};
}

function string_replace(val){
try{
var val=getnull(toString2(val)).replace(/[\n]{1,}/gi,"\n");
var val=getnull(toString2(val)).replace(/(^\s*)|(\s*$)/gi,"");
return val;
}catch(e){
return val;
}
}
