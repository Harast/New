var str = '';
function isright(obj)
{
if (obj.value>1e6) obj.value='err'; 
if (obj.value<1) obj.value='';
str = obj.value
console.log(str);
}
function count(){
	//for (var str1 = str-1; str1<=str; str1--);{
	alert(str-1);
}