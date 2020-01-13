// return masked string
function maskify(cc) {
    let len = cc.length;
    let temp = cc.split('');
    if(len > 4){
        cc = cc.replace(/\w|\d/g, '#');
        var dd = cc.split('');
        dd[len-1] = temp[len-1];
        dd[len-2] = temp[len-2];
        dd[len-3] = temp[len-3];
        dd[len-4] = temp[len-4];
        return dd.join('');
    }else{
      return cc;
    }
}

function maskify_best(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}