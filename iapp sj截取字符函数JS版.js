String.prototype.sj=function(val,val2){try{var re=new RegExp(val+"(.*?)"+val2);var value=String(this).match(re)[1].replace(/\\\"/gi,'"');if(typeof(JSON.parse(value))=="object"){return JSON.parse(value)}else{return value}}catch(error){if(value){return value}else{return false}}};


var str="我是一个字符串演示啊";
alert(str.sj("是","串")); //输出 “一个字符”
