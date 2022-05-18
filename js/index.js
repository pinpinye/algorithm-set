

// create a Function sum, make both sum(1,2,3) and sum(1)(2)(3) equal 6
// In javascript, when calculate a Object will call valueOf,and console a Object will call toString

function sum(x) {
    let args = Array.prototype.slice.call(arguments);
    let total = 0;
    args.forEach(item => {
        total = total + item;
    });
    let sumFunction = (y) => {
	total = total + y;
	return sumFunction;
     };
     sumFunction.toString = () => {
	return total;
     };
     return sumFunction;
}




const add = (...args) => args.reduce((a, b) => a + b);

// 简化写法
function currying(func) {
    const args = [];
    return function result(...rest) {
        if (rest.length === 0) {
          return func(...args);
        } else {
          args.push(...rest);
        	return result;
        }
    }
}

const sum = currying(add);

sum(1,2)(3); // 未真正求值
sum(4); 		 // 未真正求值
sum(); 			 // 输出 10


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
