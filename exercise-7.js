// 1. Menyusun Barisan Bintang
var row1 = 5
while (row1>0){
    console.log('*');
    row1--
}

console.log('\n');

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = 5
while (row2>0){
    var starstr = ''
    var j = 0
    while (j<5){
        starstr = starstr + '*'
        j++
    }

    console.log(starstr);
    row2--
}

console.log('\n');

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 0
var h = 0
var bintang = ''

while (row3<5){
    row3++
    while (h<row3){
        bintang = bintang + '*'
        h++
    }
    console.log(bintang);
}