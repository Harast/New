var arr = [2,3,5,7];
var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var r=Math.trunc(Math.sqrt(50));
let q = 2
function findSolution(r) {
function find(start, history) {
if (arr[q] == r)
return history;
else if (arr[q] < r)
return q = q+1;
else
return find();
}
return find(arr[q], arr1[q]);
}
console.log(findSolution(r));
console.log(q);