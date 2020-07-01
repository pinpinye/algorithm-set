// 题目描述
// 对字符串进行RLE压缩，将相邻的相同字符，用计数值和字符值来代替。例如：aaabccccccddeee，
// 则可用3a1b6c2d3e来代替。

// 输入描述:
// 输入为a-z,A-Z的字符串，且字符串不为空，如aaabccccccddeee
// 输出描述:
// 压缩后的字符串，如3a1b6c2d3e
// 

function rlePack(str) {
	let arr = str.split('');
	let res = '' , pre = '',count = 0 , len = arr.length;
	for(let i = 0 ; i < len; i++) {
		if(arr[i] === pre ||pre === '') {
			count++;
		}else {
			res = `${res}${count}${pre}`;
			count = 1;
		}
		if(i === len-1) {
			res = `${res}${count}${arr[i]}`;
		}
		pre = arr[i];
	}
	return res;
}
let test = "aaabccccccddeee";
let test1 = "aaa";
console.log(rlePack(test))
console.log(rlePack(test1))
