/**
 * [Title] Reshape the Matrix
 * [ID] 566
 * [Url] /reshape-the-matrix
 * [Description] 
 * In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
 * You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
 * The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
 * If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 * Input: 
 * nums = 
 * [[1,2],
 *  [3,4]]
 * r = 1, c = 4
 * Output: 
 * [[1,2,3,4]]
 * Explanation:
 * The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
 * Input: 
 * nums = 
 * [[1,2],
 *  [3,4]]
 * r = 2, c = 4
 * Output: 
 * [[1,2],
 *  [3,4]]
 * Explanation:
 * There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
 * Note:
 * 1. The height and width of the given matrix is in range [1, 100].
 * 2. The given r and c are all positive.
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (
        r === nums.length
    ) {
        return nums;
    }
    const result = [];
    const flatNums = flatArr(nums);
    for (let i = 0; i < r; i++) {
        const numSlice = flatNums.slice(i * c, i * c + c + 1);
        if (numSlice.length !== c) return nums;
        result.push(numSlice);
    }
    return result;
};

var flatArr = function (arr) {
    const result = [];
    arr.forEach(item => {
        item.forEach(i => {
            result.push(i);
        });
    });
    return result;
}