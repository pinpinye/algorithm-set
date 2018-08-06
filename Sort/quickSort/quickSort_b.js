// 快速排序 
let quickSort = (arr) => {

	if (arr.length <= 1 )
			return arr;
	let left = [];
	let right = [];
	let flag = Math.floor(arr.length / 2);
	// let mid = arr.splice(flag,1)[0];  //--------------1
	let mid = arr[flag];              //--------------2
	for(var i = 0; i < arr.length; i++ ) {
		if(arr[i]< mid){
			left.push(arr[i])
		// }else{                           //---------------1
		}else if(arr[i] > mid){							 //---------------2
			right.push(arr[i])
		}
	};	
	return quickSort(left).concat([mid],quickSort(right));
}

let a = [1,4,3,2];
let b = quickSort(a);
console.log(b);