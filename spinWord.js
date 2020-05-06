function spinWords(str) {
  const arr = str.split(" ");
  let revarr = [];
  revarr = arr.map((word) => (word.length >= 5 ? reverse(word) : word));
  function reverse(rev) {
    var reverseStr = "";
    for (let i = rev.length - 1; i >= 0; i--) {
      reverseStr = reverseStr.concat(rev.charAt(i));
    }
    console.log(`rev-str ${reverseStr}`);
    return reverseStr;
  }
  return revarr.join(" ");
}

console.log(spinWords("the fellow worrior"));
