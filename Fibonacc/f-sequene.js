
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
	let pre1 = 1;
	let pre2 = 1;
	let num;
	for(let i = 3; i<=n ;i++) {
		num = pre1 + pre2;
		if(i!==3 ){
			pre2 = pre1;
		 }
		 pre1 = num;
	}
	return num
}
