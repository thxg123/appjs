document.getElementById("params").setAttribute("placeholder","Body表单(不填则默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");

function alert(val){
api.alert({msg:val});
};
