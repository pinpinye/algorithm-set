let ruleList = [' 123456789',' abcdefg'];

let count = 0;

let countRepeat = function(password ,rule) {
     // 创建二维数组
    let myDoubleArr = []
    let ruleToArr = rule.split('');
    let passwordToArr = password.split('');
     myDoubleArr = myDoubleArr.concat([ruleToArr]);
    let m = ruleToArr.length;
    let n = passwordToArr.length;
    // 对比两个字符串是否相同，相同则对应坐标赋值为1
    for(let i = 1 ; i < m+1 ; i++) {
        for (let j = 1 ; j < n+1 ; j++) {
             // 将矩阵第一列的值替换为用户输入的密码的值
             myDoubleArr[j][0] = passwordToArr[j-1];
             // 记录密码命中的规则的位置
            if(myDoubleArr[j][0] === myDoubleArr[0][i] ) {
                myDoubleArr[j][i] = 1;
                  // 记录连续次数
                 if (myDoubleArr[j][i] === 1 && myDoubleArr[j-1][i-1] === 1  && myDoubleArr[j-2][i-2] === 1) {
                      count ++ ;
                 }
            } else {
                myDoubleArr[j][i] = 0;
            }
        }
    }
  }

// 对所有规则进行一次计算
let testBadPassword = function(password) {
    ruleList.forEach(item => {
        countRepeat(password, item)
    })
    if (count >= 2) {
        count = 0;
        return true
    } else {
        count = 0;
        return false
    }
}
