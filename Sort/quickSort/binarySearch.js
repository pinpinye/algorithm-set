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
