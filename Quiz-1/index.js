function next_date(tanggal, bulan, tahun){
    var today = {
        tanggal: tanggal,
        bulan: bulan,
        tahun: tahun
    }
    var arrayBanyakHari = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if(tahun %4 === 0){ //Kalau tahun kabisat
        arrayBanyakHari[1]= 29
    }

    //Ketika tanggal melebihi tanggal dibulan tertentu
    if(today.tanggal + 1 > arrayBanyakHari[today.bulan - 1]){
        today.tanggal = 1
        today.bulan += 1
        if(today.bulan > 12){
            today.bulan = 1
            today.tahun += 1
        }
    }else{
        today.tanggal += 1
    }

    var strBulan;
    switch(today.bulan){
        case 1: {strBulan = "Januari"; break;}
        case 2: {strBulan = "Februari"; break;}
        case 3: {strBulan = "Maret"; break;}
        case 4: {strBulan = "April"; break;}
        case 5: {strBulan = "Mei"; break;}
        case 6: {strBulan = "Juni"; break;}
        case 7: {strBulan = "Juli"; break;}
        case 8: {strBulan = "Agustus"; break;}
        case 9: {strBulan = "September"; break;}
        case 10: {strBulan = "Oktober"; break;}
        case 11: {strBulan = "November"; break;}
        case 12: {strBulan = "Desember"; break;}
    }

    return today.tanggal + " " + strBulan + " " +today.tahun;


}
var tanggal = 31
var bulan = 12
var tahun = 2020
console.log(next_date(tanggal, bulan, tahun))