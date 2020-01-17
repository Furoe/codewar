var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    // for
      //while
      if(count < 0){
      	return count + '<0';
      }else{
      	var str = '';
      	for (var i = 0; i <= count; i++) {
      		str += i;
      		if(i != count){
      			str += '+';
      		}else{
      			str += '=';
      		}
      	}
      	if (count % 2 === 0) {
      		return str + (Math.floor((count+1)/2)*count+count/2);
      	}else{
      		return str + (Math.floor((count+1)/2)*count);
      	}
      }
  };

  return SequenceSum;

})();