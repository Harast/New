var str = 0;
var j = 0;
var j1 = 0;
var arr1 =[];

function isright(obj)
{
if (obj.value>1e6) obj.value='err'; 
if (obj.value<1) obj.value='';
str = obj.value;
j=Math.trunc(Math.sqrt(str));
console.log(j);
console.log(str);
}
function count(){
var j1 = j;
var ar='';
	for (var i = 0; i<j; i++){
	if (j1>1 && j1%2 !== 0 || j1==2){
		if(j1%3 !== 0 || j1==3){
	arr1 [i] = j1;}}
	j1 = j1 -1;}
for (ji = 0; ji <j; ji++) {
  if (arr1[ji] !== undefined){
    ar = ar +','+arr1[ji];}}
	console.log(ar);
	document.getElementById("ar").innerHTML = ar;
}
function Fizz_Buzz()
{	
var j1=str
	for (var i = 0; i<str; i++){
	if (j1%3 == 0)
    {if(j1%5 == 0)
		{arr1 [i] = 'FizzBuzz';}
		else{
	arr1 [i] = 'Fizz';}}
      else{
		if(j1%5 == 0)
        {arr1 [i] = 'Buzz';}
      else{
	  arr1 [i] = j1;}}
	j1 = j1 -1;}
/*for (ji = 0; ji <j; ji++) {
  if (arr1[ji] !== undefined){
    ar = ar +','+arr1[ji];}}
	console.log(ar);*/
    console.log(arr1);
	document.getElementById("arr1").innerHTML = arr1;
}

	