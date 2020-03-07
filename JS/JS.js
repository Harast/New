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
	for (var i = str-1; i>=1; i--){
	arr [i] = str - i;
	//str = str + arr;
	console.log(arr);
	document.getElementById("arr").innerHTML = arr;
	//alert(arr);
}}