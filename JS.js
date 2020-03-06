var str = '';
var r =[];
function isright(obj)
{
if (obj.value>1e6) obj.value='err'; 
if (obj.value<1) obj.value='';
str = obj.value
console.log(str);
}
function count(){
	for (var str1 = str-1; str1>=1; str1 = str1-1);{
	r [str1] = str1
	str = str + ',' + r;
	console.log(str);
	alert(r);
}}