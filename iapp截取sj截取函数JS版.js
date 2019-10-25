正则表达式取结果
String.prototype.sj=function(val,val2){try{var re=new RegExp(val+"(.*?)"+val2);var value=this.match(re)[1].replace(/\\\"/g,'"');if(typeof(JSON.parse(value))=="object"){return JSON.parse(value)}else{return value}}catch(err){if(value){return value}else{return false}}}


var str="我的大家啊宽带连接";
alert(str.sj("的","宽"))正则表达式取结果
String.prototype.sj=function(val,val2){try{var re=new RegExp(val+"(.*?)"+val2);var value=this.match(re)[1].replace(/\\\"/g,'"');if(typeof(JSON.parse(value))=="object"){return JSON.parse(value)}else{return value}}catch(err){if(value){return value}else{return false}}}


var str="我的大家啊宽带连接";
alert(str.sj("的","宽"));
