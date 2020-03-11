var str = 100
var j=Math.trunc(Math.sqrt(str));
var j1 = str;
var ar='';
var arr1 =[];
function Fizz,Buzz();
{	
	for (var i = 0; i<str; i++){
	if (j1%2 == 0)
    {arr1 [i] = 'Buzz';}
      else{
		if(j1%5 == 0)
        {arr1 [i] = 'Fizz';}
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
