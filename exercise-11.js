function balikKata(str){
    var splitString = str.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    return joinArray;
}



// TEST
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));