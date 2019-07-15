
// 1,1,2,3,5,8,13,21

//递归 时间复杂度 O(2^n)
function fibonacc(n){
	if (n <= 2) return  1;
	return fibonacc(n-1) + fibonacc(n-2)
}
//非递归 时间复杂度 O(n)

function fibonaccOther(n){
	if (n <= 2) return  1;
	let pre1 = 1;
	let pre2 = 1;
	for(let i = 1; i<n-1 ;i++) {
	   pre2 + = pre1;
	   pre1 = pre2 - pre1;
	}
	return pre2;
}

//数组

function fibonaccOther1(n){
	let arr = [];
	arr[0] = 0;                                                                                                                                                                                                                        n                                                       
	arr[1] = 1;	
	for (let i=2; i<=n; i++)
	{
          arr[i] = arr[i-1] + arr[i-2];
	}
	return arr[n];
}


// 数学公式法

function fibonaccOther2(n) {
  let c = Math.sqrt(5);
  return ((Math.pow((1+c)/2,n) - Math.pow((1-c) /2,n)) / c)
}


