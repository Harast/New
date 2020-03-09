var str = 0;
function isright(obj)
{
if (obj.value>1e6) obj.value='err'; 
if (obj.value<1) obj.value='';
str = obj.value
console.log(str);
}
function count(){
var arr =[];
var r=str 
	for (var i = 1; i<str; i++){
	if (r%3 !== 0 || r==3){
		if(r%2 !== 0 || r==2){
	arr [i] = r;}}
	r = r -1;
	console.log(arr);
	document.getElementById("arr").innerHTML = arr;
	//alert(arr);
}}