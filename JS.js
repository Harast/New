var str = '';
function isright(obj)
{
if (obj.value>1e6) obj.value='err'; 
if (obj.value<1) obj.value='';
str = str + obj.value
console.log(str);
}
function count(){
	alert(str);
}