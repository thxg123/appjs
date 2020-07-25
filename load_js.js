document.getElementById("params").setAttribute("placeholder","Body表单(不填默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");

function alert(val){
api.alert({msg:val});
};

function string_replace(val){
try{
var val=toString2(getnull(val)).replace(/>\n/gi,">\n");
var val=toString2(getnull(val)).replace(/\n</gi,"\n<");
var val=toString2(getnull(val)).replace(/>\s/gi,">\n");
var val=toString2(getnull(val)).replace(/\s</gi,"\n<");
var val=toString2(getnull(val)).replace(/[\r\n]{2,}/gi,"\n");
var val=toString2(getnull(val)).replace(/(^\s*)|(\s*$)/gi,"");
return val;
}catch(error){
return val;
}
};
