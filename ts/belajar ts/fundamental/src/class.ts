// interface ke class property biasa
interface TemplateDoc {
    namaDoc: string
    noDoc: number
    statusDoc: boolean 
}

// static
class DocumentsStatic {
    static namaDoc:string = "Ahmad Musthafa Kamal"
    static noDoc:number = 22148791914
    static statusDoc:boolean = true

    static tampil (pnamaDoc:string,pnoDoc:number,pstatusDoc:boolean) {
        console.info(`${pnamaDoc} ${pnoDoc} ${pstatusDoc}`)
    }
}

// tanpa constructor (input non custom)
class DocumentsAsli implements TemplateDoc{
    namaDoc:string = "Bayu Kurniawan"
    noDoc:number = 230729827
    statusDoc:boolean = true
}

// dengan constructor (input custom)
class DocumentsCustom implements TemplateDoc{
    namaDoc:string
    noDoc:number
    statusDoc:boolean
    constructor (
        pnamaDoc:string,
        pnoDoc:number,
        pstatusDoc:boolean
    
    ) {
        this.namaDoc = pnamaDoc
        this.noDoc = pnoDoc
        this.statusDoc =pstatusDoc
    }
}

const nonCostum = new DocumentsAsli()
const custom = new DocumentsCustom("Bayu setiawan Kurniawan", 9166419, false)

console.info(nonCostum)
console.info(custom)
DocumentsStatic.tampil("aeng", 9168691, false)

export {}
