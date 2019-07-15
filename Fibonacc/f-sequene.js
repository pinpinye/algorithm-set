
// 1,1,2,3,5,8,13,21

//递归
function fibonacc(n){
	if (n <= 2) {
		return  1
	}
	return fibonacc(n-1) + fibonacc(n-2)
}
//非递归

function fibonaccOther(n){
	if (n <= 2) {
		return  n
	}
	let pre1 = 1;
	let pre2 = 1;
	let sum;
	for(let i = 1; i<n-1 ;i++) {
		 sum = pre1 + pre2;
		 pre1 = pre2;
		 pre2 = sum;
	}
	return sum
}

//数组

function fibonaccOther(n){
	let arr = [];
	arr[0] = 0;                                                                                                                                                                                                                        n                                                       
	arr[1] = 1;	
	for (let i=2; i<=n; i++)
	{
		arr[i] = arr[i-1] + arr[i-2];
	}
	return arr[n];
}


