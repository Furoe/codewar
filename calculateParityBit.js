function checkParity(parity, bin){
  //Have fun!
  let len = bin.replace(/0/g, '').length;
  if(parity === 'even'){
  	return ((len+1)%2) === 0?1:0;
  }else if(parity === 'odd'){
  	return ((len+1)%2) === 0?0:1;
  }
}