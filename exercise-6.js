// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA')

var text = ' - I love coding'
var number1 = 2

while (number1<=20) {
  console.log(number1 + text);
  number1 += 2;
}
console.log('\n');
console.log('LOOPING KEDUA')
var text = ' - i will become full stack developer'
var number2 = 20

while (number2>=2) {
  console.log(number2 + text);
  number2 -= 2;
}
console.log('\n');

// 2. Melakukan Looping Menggunakan For
console.log('Looping Pertama')
for(var number3=1;number3<=20;number3++){
  console.log(number3 + ' I love coding')
}
console.log('\n');

console.log('Looping Kedua')
for(var number4=20;number4>=1;number4--){
  console.log(number4 + ' i will become fullstack developer')
}
console.log('\n');


// 3. Angka Ganjil dan Genap
      // I.Ganjil Genap
var angka = 1;

while (angka <= 100){

  if (angka%2==0){
    console.log('Sekarang ' + angka + ' - "GENAP"')
  } else {
    console.log('Sekarang ' + angka + ' - "GANJIL"')
  }
  angka ++
}

console.log('\n')
console.log('\n')
console.log('\n')

      // II. Kelipatan 3

var angka1 = 1;
while (angka1 <= 100){

  if (angka1%3===0){
    console.log(angka1 + ' kelipatan 3')
  }
    angka1 += 2
}
console.log('\n')
console.log('\n')
console.log('\n')

      // III.Kelipatan 5

var angka2 = 1;
while (angka2 <= 100){

  if (angka2%6===0){
    console.log(angka2 + ' kelipatan 6')
  }
    angka2 += 5
}
console.log('\n')
console.log('\n')
console.log('\n')

      // IV.Kelipatan 9

var angka3 = 1;
while (angka3 <= 100){

  if (angka3%10===0){
    console.log(angka3 + ' kelipatan 10')
  }
    angka3 += 9
}
console.log('\n')
console.log('\n')
console.log('\n')