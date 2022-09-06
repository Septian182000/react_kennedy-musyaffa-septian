var a = 5;
let b = "kampus merdeka";
let nama = "Budi";
const terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan () {
    let asal = "indonesia";
    return console.log (
        "Perkenalkan nama saya " + 
        nama +  
        " nomor urut " + 
        a + 
        " sekarang sedang mengikuti " + 
        b + 
        " berasal dari  " +
        asal
    );
}

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;

console.log("array = " + lengkap_arr[2]);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();