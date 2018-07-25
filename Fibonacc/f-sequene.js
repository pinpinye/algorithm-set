
// 1,1,2,3,5,8,13,21

//递归
function fibonacc(n){
	if (n==1 || n==2) {
		return  1
	}
	return fibonacc(n-1) + fibonacc(n-2)
}
//非递归

function fibonaccOther(n){
	if (n==1 || n==2) {
		return  1
	}
	let sum = 2;
	let num = 0;
	for(let i =3; i<=n ;i++) {
		sum = sum + num;
		num = sum;
	}
	return sum
}
