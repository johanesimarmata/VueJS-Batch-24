//SOAL 1
console.log("----soal 1----")
const luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
}
const kelilingPersegiPanjang = (panjang, lebar) => {
    return 2 * (panjang + lebar); 
}
console.log(luasPersegiPanjang(7,7))
console.log(kelilingPersegiPanjang(7,7))

//SOAL 2
console.log("----soal 2----")
const newFunction = (...nama) => {
    const [firstName, lastName] = nama
    const fullName = `${firstName} ${lastName}`
    return {firstName, lastName, fullName}
}
console.log(newFunction("William", "Imoh").fullName)

//SOAL 3
console.log("----soal 3----")
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}
const {firstName, lastName, address, hobby} = newObject
console.log(firstName, lastName, address, hobby)

//SOAL 4
console.log("----soal 4----")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

//SOAL 5
console.log("----soal 5----")
const planet = "earth" 
const view = "glass"
var result = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`
console.log(result)