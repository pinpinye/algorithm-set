

// create a Function sum, make both sum(1,2,3) and sum(1)(2)(3) equal 6
// In javascript, when calculate a Object will call valueOf,and console a Object will call toString

function add(x) {
	let len = arguments.length;
	let sum = 0;
	if(len>1) {
		for(let i = 0; i<len; i++){
			sum = sum + arguments[i];
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
function deepCopy(obj,copyObj) {
	if(obj === null) {
		return null;
	}
	if(typeof obj == "undefined") {
		return undefined;
	}

	let copy = copyObj || { };
	for(let props in obj) {
		if(typeof obj[props] == "object") {
			copy[props] = (obj[props].constructor === Array) ? [] : {};
			deepCopy(obj[props],copy[props]);
		}else{
			copy[props] = obj[props];
		}

	}
	return copy;
}

// let a = {b:1,c:{e:3,f:4},t:{a:5}};
// let b = deepCopy(a);
