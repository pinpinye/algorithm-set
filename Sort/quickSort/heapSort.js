// topk
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
    if(!arr || arr.length == 0 || k <=0 || k > arr.length) return []; 
    var ret = new Array(); 
    function comp(a,b){return a > b;}
    function top(arr){ 
        var i = Math.floor(arr.length / 2) | 0 ; 
        for(;i >= 0; i--){ 
            if(comp(arr[i], arr[i * 2 + 1])){exch(arr, i, i*2 + 1);} 
            if(comp(arr[i], arr[i * 2])){exch(arr, i, i*2);} 
        }
        return arr[0];   
    } 
    function exch(arr,i,j){ 
        var t = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = t; 
    }
    for(var i = 0;i < k; i++){ 
        var max = top(arr); 
        ret.push(max); 
        arr = arr.slice(1); 
    } 
    return ret; 
    // return arr.sort((a, b) => a - b).slice(0, k);
    // // 交换数据
    // function swap(arr, index1, index2) {
    //     let temp = arr[index1];
    //     arr[index1] = arr[index2];
    //     arr[index2] = temp;
    // }
    // // 比较父节点和子节点
    // function compare(arr, parentIndex){
    //     let lchild = parentIndex * 2 + 1;
    //     let rchild = parentIndex * 2 + 2;
    //     if(lchild < arr.length && arr[parentIndex] > arr[lchild]) swap(arr,parentIndex, lchild);
    //     if(rchild < arr.length && arr[parentIndex] > arr[rchild]) swap(arr,parentIndex, rchild);
    // }

    // // 创建小顶堆
    // let heap =  {
    //     heapify: function(arr) {
    //         let n = Math.floor(arr.length / 2);
    //         for(let i = n; i >= 0; i--) {
    //             compare(arr, i)
    //         }
    //     },
    //     getTop: function(arr) {
    //         return arr.shift();
    //     }
    // }

    // // 创建长度为k的数组
    // let res = new Array();

    // for(let i = 0; i < k ;i++) {
    //     heap.heapify(arr);
    //     let top = heap.getTop(arr);
    //     // console.log('top', top)
    //     res.push(top);
    // }

    // return res;
};
