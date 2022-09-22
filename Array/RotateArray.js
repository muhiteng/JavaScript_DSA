// params array , int <length
var rotate = function (nums, k) {
  let newArr = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    newArr[(i + k) % n] = nums[i];
  }
  return newArr;
};
var rotateInPlace = function (nums, k) {
  let newArr = [...nums];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[(i + k) % n] = newArr[i];
  }
};
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
const nums = [-1, -100, 3, 99];
const k = 2;
console.log(rotate(nums, k));
