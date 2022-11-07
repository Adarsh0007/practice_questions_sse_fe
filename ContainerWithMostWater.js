const containerWithMostWater = (height) => {
  // left element index for area
  let left = 0;
  
  // right element index for area
  let right = height.length-1;
  
  // area to be filled
  let area =0;
  
  // loop until left index is less than right index for area
  while (left < right){
  
    // find smallest element from array left boundary for area
    let short = Math.min(height[left], height[right]);
    
    // get the maximum of area calculated and area of left boundary current right boundary
    area = Math.max(area, short*(right-left));
    
    // check if left index is less than right boundary, increment by 1 to have next element from left boundary else reduce by 1 to get nexr element from right boundary
    if (left< right) left++;
    else right--;
  }
  
  // return cacluated area;
  return area;
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
