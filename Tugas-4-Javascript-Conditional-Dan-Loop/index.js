// soal 1
var nilai;
nilai = 85
if(nilai >= 85){
    console.log("Indeks Nilai A")
}else if(nilai >= 75 && nilai < 85){
    console.log("Indeks Nilai B")
}else if(nilai >= 65 && nilai < 75){
    console.log("Indeks Nilai C")
}else if(nilai >= 55 && nilai < 65){
    console.log("Indeks Nilai D")
}else{
    console.log("Indeks Nilai E")
}

//soal 2
var tanggal = 15;
var bulan = 11;
var tahun = 2001;

switch(bulan){
    case 1: {console.log("%s Januari %s", tanggal, tahun); break;}
    case 2: {console.log("%s Februari %s", tanggal, tahun); break;}
    case 3: {console.log("%s Maret %s", tanggal, tahun); break;}
    case 4: {console.log("%s April %s", tanggal, tahun); break;}
    case 5: {console.log("%s Mei %s", tanggal, tahun); break;}
    case 6: {console.log("%s Juni %s", tanggal, tahun); break;}
    case 7: {console.log("%s Juli %s", tanggal, tahun); break;}
    case 8: {console.log("%s Agustus %s", tanggal, tahun); break;}
    case 9: {console.log("%s September %s", tanggal, tahun); break;}
    case 10: {console.log("%s Oktober %s", tanggal, tahun); break;}
    case 11: {console.log("%s November %s", tanggal, tahun); break;}
    case 12: {console.log("%s Desember %s", tanggal, tahun); break;}
}

//soal 3
for(var j = 1; j <= 7; j++){
    var result = "";
    for(var k = 1; k <= j; k++){
        result += "#";
    }
    console.log(result);
}

//soal 4
var m = 10;
for(var i = 1; i <= m; i++){
    if(i % 3 === 1){
        console.log("%s - I love programming", i)
    }else if(i % 3 === 2){
        console.log("%s - I love Javascript", i)
    }else if(i % 3 === 0){
        console.log("%s - I love VueJS", i)
        console.log("===")
    }
}