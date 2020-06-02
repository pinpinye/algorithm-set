// 循环
var search1 = function(nums, target) {

  let low = 0;
  let high = nums.length -1;
  let mid;
  while(low <= high) {
    mid = parseInt(low + (high - low) / 2);
    if(nums[mid] === target) {
      return mid;
    } else if(nums[mid] < target) {
      low = mid + 1;
    } else if(nums[mid] > target) {
      high = mid -1;
    }
  } 
  return -1 
  
};

// 递归
var search2 = function(nums, target, l, h) {
  let low = l || 0;
  let high = h || nums.length -1;
  let mid = parseInt(low + (high - low) / 2);
    if(nums[mid] === target) {
      return mid;
    } else if(nums[mid] < target) {
      return search(nums, target, mid + 1, high);
    } else if(nums[mid] > target) {
      return search(nums, target, low, mid -1);
    }
  return -1 
  
};
