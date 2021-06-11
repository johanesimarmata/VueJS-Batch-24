//soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort().forEach(function(hewan){
    console.log(hewan)
})

//soal 2
function introduce(data){
    return "Nama saya "+ data.name +", umur saya "+ data.age +" tahun, alamat saya di "+ data.address +", dan saya punya hobby yaitu "+ data.hobby
}
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
var perkenalan = introduce(data)
console.log(perkenalan)

//soal 3
function hitung_huruf_vokal(data){
    var result = 0
    var strLength = data.length
    var hurufVokal = ['a', 'i', 'u', 'e', 'o']
    for(var i = 0; i < strLength; i++){
        if(hurufVokal.includes(data[i].toLowerCase())){
            result++
        }
    }
    return result
}

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2)

//soal 4
function hitung(angka){
    return ((angka*2) - 2)
}

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8