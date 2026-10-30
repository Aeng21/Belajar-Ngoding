
// array
export const nested:(string)[] = ["hanya","mencoba","bukan","lainnya"]
export const iniArray:(string | number |string[])[] = ["Simla", 4 , "februari",nested]

export const tampilArray = () => {
    console.info(`===INI ARRAY===`)
    console.info(iniArray)
    console.info((iniArray[3] as string[])[2])
}

// destructuring
export const [nama, tanggal, bulan, datanested] = iniArray

//objeck
export const karakter: {
    nama: string,
    gender: string,
    umur: number,
    skill: string,
    status: boolean

} ={
    nama: "Ashley Graham",
    gender: "Perempuan",
    umur: 23,
    skill: "berlari cepat",
    status: true
}

export const tampilObjeck = () => {
    console.info(`===INI OBJECK===`)
    console.info(karakter.nama)
    console.info(karakter)
}
