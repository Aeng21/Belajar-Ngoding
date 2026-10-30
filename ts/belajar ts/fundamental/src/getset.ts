class Biodata {
    nama:string
    _umur!:number

    constructor (
        pnama: string,
        pumur:number
    ) {
        this.nama = pnama
        this.umur = pumur
    }
    // tanpa get juga bisa. get digunakan jika ingin mengambil data umur karna data yang terisi cuma _umur bukan umur.
    set umur (u:number) {
        if (u <= 0) {
            this._umur = 1
        }else {
            this._umur = u
        }
    }

    get umur () {
        return this._umur
    }
}

const kami = new Biodata ("kamal", 23)
const lanang = new Biodata ("lanang", -2)

console.info(kami)
// get digunakan karna umur gak punya data kalau gak pakai get
console.info(kami.umur)
console.info(lanang)

