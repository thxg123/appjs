document.getElementById("params").setAttribute("placeholder","Body表单(不填默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");

function alert(val){
api.alert({msg:val});
};

function transform(val){
if(val.substr(0,1)==":"){
val=val.substr(1);}
val=toString2(getnull(val)).replace(/^\r+|\n+$/gi,"");
val=toString2(getnull(val)).replace(/[\r\n]{1,}/gi,$api.getStorage("Header_log"));
var value=val.split($api.getStorage("Header_log"));
var objdata={};
for (var key in value) {
headerkey=value[key].match(/^.*?:/gi)[0].replace(/(^\s*)|(\s*$)/gi,"");
headerval=value[key].match(/\:(.*?)$/gi)[0].replace(/(^\s*)|(\s*$)/gi,"");
if(headerkey.substr(-1) == ":"){
headerkey=headerkey.substr(0,headerkey.lastIndexOf(":"));
}
if(headerval.substr(0,1) == ":"){
headerval=headerval.substr(1);
}
var headerkey2=headerkey.toLowerCase();
if(headerkey2+headerval!="content-length"+headerval || headerkey2!="content-length" && headerkey && headerval){
objdata[headerkey]=headerval;
}

}

if(getnull(JSON.stringify(objdata))!=""){
return objdata;
}else{
return {};
}
};
