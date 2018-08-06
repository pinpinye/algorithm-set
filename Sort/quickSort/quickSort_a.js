
// 快速排序 a

let quickSort=(arr,start,end)=>{
	// 数组为空或者数据的长度为1，直接返回原数组
	if(arr.length<=1)
		return arr;
	// 切分数组,返回一个参照数
	let flag = partition(arr,start,end);
	// 对<参照数的数据进行排序
	if(start<flag-1){
		quickSort(arr,start,flag-1);
	}
	// 对参照数的数据进行排序
	if(end>flag){
		quickSort(arr,flag,end);
	}
	return arr;
}

// 切分函数
let partition = (arr,left,right)=>{
	// 
	let l = left;
	let r = right;
	if(l >= r)
		return arr;
	let mid = arr[Math.floor((r+l)/2)];
	while(l<=r) {
		while (arr[l]<mid)
			l++;
		while (arr[r]>mid)
			r--;
		if(l<=r){
			let temp;
			temp = arr[l];
			arr[l] = arr[r];
			arr[r] = temp; 
			l++;
			r--;
		}
	}
	return l;
}


let a = [3,2,45,5,4545,344,4,1];
let b;
b = quickSort(a,0,a.length-1);
console.log(b);