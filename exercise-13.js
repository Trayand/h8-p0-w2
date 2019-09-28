function xo(str) {
    var jlhX = 0
    var jlhO = 0

    for(var i=0;i<str.length;i++){
        if (str[i] === 'x'){
            jlhX++
        } else {
            jlhO++
        }
    }


    return jlhX === jlhO
  }


  
  // TEST
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true