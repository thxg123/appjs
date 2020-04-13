document.getElementById("params").setAttribute("placeholder","Body表单(不填默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");

window.onerror = function(msg, file, line){
js_close();
return false;
};

function alert(val){
api.alert({msg:val});
};
