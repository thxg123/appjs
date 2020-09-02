document.getElementById("params").setAttribute("placeholder","Body表单(不填则默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");

function string_replace(val){
try{
var val=getnull(toString2(val)).replace(/[\n]{1,}/gi,"\n");
var val=getnull(toString2(val)).replace(/(^\s*)|(\s*$)/gi,"");
return val;
}catch(e){
return val;
}
};
