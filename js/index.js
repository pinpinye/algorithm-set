

// create a Function sum, make both sum(1,2,3) and sum(1)(2)(3) equal 6
// In javascript, when calculate a Object will call valueOf,and console a Object will call toString

function add(x) {
	let  args = Array.prototype.slice.call(arguments)
	let len = args.length;
	let sum = 0;
	if(len>1) {
		for(let i = 0; i<len; i++){
			sum = sum + args[i];
		}
		return sum;
	}else{
		sum = x;
		let sumFunction = (y) => {
			sum = sum + y;
			return sumFunction;
		};
		sumFunction.toString = () => {
			return sum;
		};
		return sumFunction;
	}
}
// console.log(add(1)(2)(3))


//  create a Function that returns a deepCopy of object
// 深度拷贝
function deepCopy(obj) {
	if(typeof obj !== 'object' || obj === null) {
		return obj
	}
	let copy = obj instanceof Array ? [] : {};

	for(let i in obj) {
		if(obj.hasOwnProperty(i)) {
			copy[i] = typeof obj[i] !== 'object' ? obj[i] : deepClone(obj[i])
		}
	}
	return copy;

}


// let a = {b:1,c:{e:3,f:4},t:{a:5}};
// let b = deepCopy(a);
