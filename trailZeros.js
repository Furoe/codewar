//Number of trailing zeros of N!
function zeros (n) {
  // your code here 
  var x = Math.floor(n/5); 
  if(x < 5){
  	return x;
  }else{
  	return x + zeros(x);
  }
}