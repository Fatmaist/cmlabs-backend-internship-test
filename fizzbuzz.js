function cekAngka(angka, bilangan){
    return angka % bilangan === 0
}

function fizzbuzz(angka){
    //Create a function for looping the number
    for (let i=1; i<=angka; i++){
        if (cekAngka(i, 3) && cekAngka(i, 5)){
            console.log('FizzBuzz')
        } else if (cekAngka(i, 3)){
            console.log('Fizz')
        } else if (cekAngka(i, 5)){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzbuzz