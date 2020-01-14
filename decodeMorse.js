var MORSE_CODE = {
	'....': 'H',
	'.': 'E',
	'-.--': 'Y',
	'.---': 'J',
	'..-': 'U',
	'-..': 'D',
};
decodeMorse = function(morseCode){
  //your code here
  let str = morseCode.trim();
  let strIndex = '';
  let decodeStr = '';
  for (var i = 0; i < str.length; i++) {
  	if(str[i] != ' '){
  		strIndex += str[i];
  		if(i == (str.length-1)){
  			decodeStr += MORSE_CODE[strIndex];
  		}
  	}else{
  		if(str[i-1] == ' '){
  			if(str[i+1] == ' '){
  				decodeStr += ' ';
  			}
  		}else{
  			decodeStr += MORSE_CODE[strIndex];
  			console.log(decodeStr,strIndex);
  			strIndex = '';
  		}
  	}
  }
  //console.log(decodeStr + '1111');
  return decodeStr;
}