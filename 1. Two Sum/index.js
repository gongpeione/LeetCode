/**
 * [Title] Two Sum
 * [ID] 1
 * [Url] /two-sum
 * [Description] 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsL = nums.length;
    for (let i = 0; i < numsL - 1; i++) {
        for (let j = i + 1; j < numsL; j++) {
            if (nums[i] + nums[j] !== target) continue;
            return [i, j];
        }
    }
};