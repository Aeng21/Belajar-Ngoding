// untuk membandingkan satu variabel dengan banyak nilai tertentu.
const status: string = "dikirim";

switch (status) {
    case "menunggu":
        console.info("Pesanan menunggu pembayaran");
        break;
    case "diproses":
        console.info("Pesanan sedang diproses");
        break;
    case "dikirim":
        console.info("Pesanan sedang dikirim");
        break;
    case "selesai":
        console.info("Pesanan selesai");
        break;
    default:
        console.info("Status tidak dikenal");
}

// if else lebih fleksibel
const nilai: number = 85;

if (nilai >= 90) {
    console.info("A");
} else if (nilai >= 80) {
    console.info("B");
} else if (nilai >= 70) {
    console.info("C");
} else {
    console.info("D");
}




// export fiktif supaya dianggap modul oleh ts.
// tujuannya supaya gak bentrok jika bikin variabel dengaan nama yang sama di file lain.
// karna jika bukan modul pasti dianggap script dan ditaruh discope global
export{}