// Tugas 1
function shoutOut(){
    return '"Hello Function!"'
  }
  
  console.log(shoutOut());
  
  console.log('\n')
  
  // Tugas 2
  function calculateMultiply(num1, num2){
    return num1*num2
  }
  
  var num1 = 4;
  var num2 = 9;
  var hasilPerkalian = calculateMultiply(num1, num2);
  
  console.log(hasilPerkalian);
  
  console.log('\n')
  
  // Tugas 3
  function processSentence(name, age, address, hobby){
  return '"Nama saya ' + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + '!"'
  }
    
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name, age, address, hobby);
  
  console.log(fullSentence);