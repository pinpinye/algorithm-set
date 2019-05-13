var SafetyPasswd = {
    WeakRules: {
        //关键词检测
        r0: function(str, len){
            let isWeak = false;
            const pattern = /acc(ess|ount)|acti(on|ve)|system|(web|sys(tem)?)?(master|admin(istrator)?)|anonymous|backup|data(base)?|sybase|caonima|debug|fuck(you)?|gateway|girl|guest|hack(er)?|mail|manager|oracle|pass(word)?|power|root|secret|server|test|user|windows|word/i;
            
            pattern.lastIndex = 0;

            isWeak = pattern.test(str);

            return isWeak;
        },
        //字符重复检测
        r1: function(str, len){
            let isWeak = false;

            const _set = new Set(str);

            if(((len - _set.size) / len) >= 0.4){
                isWeak = true;
            }

            return isWeak
        },
rule2: function() {
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
                  if (i === 1) {
                    myDoubleArr[j] = [];
                    myDoubleArr[j][0] = passwordToArr[j-1];
                  }
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
     },
        baseRule: function(str){
        var pattern = /^[\u0021-\u007E]{6,16}$/;

        return pattern.test(str);
    },
    check: function(str, usename){
        if(!this.baseRule(str)){
            return {
                "weak": false,
                "code": "B1",
                "message": "密码为6-16位的字母、数字和非空的字符"
            };
        }
        if(usename && (str.toLowerCase()).indexOf(usename.toLowerCase()) !== -1){
            return {
                "weak": true,
                "code": "B0",
                "message": "密码不能包含用户名"
            };
        }
        var rules = this.WeakRules;

        var fn = null;
        var result = null;
        for(var r in rules){
            if(rules.hasOwnProperty(r)){
                fn = rules[r];

                result = fn.apply(this, [str, str.length]);

                if(result.weak){
                    return result;
                }
            }
        }

        return {
            "weak": false,
            "code": "0",
            "message": "ok"
        };
    },
    match: function(str, usename){
        const result = this.check(str, usename);

        if(true === result.weak || "0" != result.code){
            return result.message;
        }

        return true;
    }     
}
