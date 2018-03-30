"use strict";
const SIZE = Symbol("&*");
const SEXS = Symbol("&&");
var obj = {};
obj["name"] = "杨";
obj[SIZE] = 8;//这里设置的是标符
obj.SIZE = 0;//这里是size字符创建的属性
obj[SEXS] = function (sexType) {
	return sexType == 1 ? "男" : "女";
};
//delete obj.[SEXS];
//obj.["SIZE"]  = 10;
//
delete obj["name"];//删除属性
console.log(obj,obj.SIZE,obj[SIZE],obj[SEXS](2));