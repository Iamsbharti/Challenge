/**You are given an array (which will have a length of at least 3, 
 * but could be very large) containing integers. 
 * The array is either entirely comprised of odd integers or entirely 
 * comprised of even integers except for a single integer N.
 *  Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

 */
const integers=[160, 3, 1719, 19, 11, 13, -21]
console.log(findOutlier(integers));
function findOutlier(integers){
    //your code here
    let even=0;let odd=0;
    let even_arr=[];let odd_arr=[];
   integers.forEach(element => {
       element%2==0 ? even_arr.push(element): odd_arr.push(element);
   });
   
   //console.log('even;_arr:'+even_arr+'::odd_arr:'+odd_arr+'::'+even_flag+'::'+odd_flag);
   return even_arr.length===1 ? even_arr[0] : odd_arr[0];
}
  