function findShort(s){
  let minLen = 0;
  arr = s.split(' ');
  minLen = arr[0].length;
  arr.map(x => minLen = Math.min(x.length, minLen));
  return minLen;
}