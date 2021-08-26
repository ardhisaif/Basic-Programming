/**
 * GET MINIMUM NUMBER
 * ==================
 * 
 * Function getMinimum membutuhkan argumen berupa Array of Numbers. Function ini berfungsi untuk mencari
 * angka minimum dari kumpulan angka pada input.
 * 
 * RULES :
 *   - Dilarang menggunakan built-in function selain .push().
 */

function getMinimum(nums) {
  let terkecil = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if(nums[0] > nums[i]){
      terkecil = nums[i]
    }
  }
  return terkecil
}

console.log(getMinimum([100, 50, 9, 98, 110, 5, 3])); // 3
console.log(getMinimum([0, 0, 9, -8, 22, 15, 32])); // -8
console.log(getMinimum([1, 1, 1, -1, 11, 111, -11])); // -11

module.exports = getMinimum;
