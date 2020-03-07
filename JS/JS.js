var str = 0;
function isright(obj)
{
if (obj.value>1e6) obj.value='err'; 
if (obj.value<1) obj.value='';
str = obj.value
console.log(str);
}
function count(){
var arr =[str-1];
	for (var i = str-2; i>0; i--){
	arr [i] = str - (i+1);
	//str = str + arr;
	console.log(arr);
	document.getElementById("arr").innerHTML = arr;
	//alert(arr);
}}