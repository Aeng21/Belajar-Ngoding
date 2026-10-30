interface TemplateBio {
    nama?: string
    umur: number
    status?: boolean
    tampil(): void
}

class Bio implements TemplateBio {
    nama?: string
    umur: number
    status?: boolean

    constructor (
        pumur:number,
        pnama?: string,
        pstatus?:boolean
    ) {
        this.nama = pnama
        this.umur = pumur
        this.status = pstatus
    }

    tampil(): void {
        console.info(`parent ${this.nama} ${this.umur} ${this.status}`)
    }
}

class BioLanjut extends Bio {
    jenkel: number
    alamat: string

    constructor (
        pumurp:number,
        pjenkel:number,
        palamat:string
    ) {
        super(pumurp)
        this.jenkel = pjenkel
        this.alamat = palamat
    }


    tampil() {
        super.tampil()
        console.info(`clield ${this.umur} ${this.jenkel} ${this.alamat}`)
    }
}

const Bayu = new Bio(23, "Bayu", true)
const BayuL = new BioLanjut(25,1, "subang")

Bayu.tampil()
BayuL.tampil()

export {}