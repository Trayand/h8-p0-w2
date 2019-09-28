

function balikKata (str){
    var tampungan =''
      for(i=str.length-1;i>=0;i--){
        tampungan += str[i]
      }
      return tampungan
    }



// TEST
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));