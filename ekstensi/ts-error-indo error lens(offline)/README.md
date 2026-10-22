# TS Error Bahasa Indonesia

Ekstensi VS Code yang menerjemahkan pesan error TypeScript ke Bahasa Indonesia **secara offline**.
Hasil terjemahan ikut tampil di ekstensi [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens).

Contoh:

| Sebelum | Sesudah |
|---|---|
| `Cannot find name 'strings'. Did you mean 'string'?` | `Tidak dapat menemukan nama 'strings'. Maksud Anda 'string'?` |

## Prasyarat
- VS Code
- Ekstensi Error Lens (opsional, tapi disarankan)

## Instalasi

### Cara 1 - dari file .vsix
1. Buka VS Code, lalu panel Extensions (`Ctrl+Shift+X`).
2. Klik tombol `...` di kanan atas panel, pilih **Install from VSIX...**, lalu pilih file `.vsix`.
3. Tekan `Ctrl+Shift+P`, pilih **Developer: Reload Window**.

Atau lewat terminal:
```
code --install-extension ts-error-indo-0.0.1.vsix
```

## Agar tidak muncul error ganda di Error Lens
Ekstensi ini otomatis aktif di semua folder. Supaya Error Lens hanya menampilkan versi Indonesia, tambahkan ke **User Settings** (berlaku di semua project):

1. `Ctrl+Shift+P`, pilih **Preferences: Open User Settings (JSON)**.
2. Tambahkan di dalam kurung `{ }`:
   ```json
   "errorLens.excludeBySource": ["ts"]
   ```
3. Simpan, lalu reload window.

## Cek hasilnya
Buka file `.ts` di folder mana saja dan tulis kode salah, misalnya:
```ts
let a: number = "halo"
```
Error Lens akan menampilkan: `Tipe 'string' tidak bisa dimasukkan ke tipe 'number'.`

Kalau tidak muncul: buka `Ctrl+Shift+X`, cari "TS Error Bahasa Indonesia", pastikan terinstall dan tidak disabled, lalu reload window.
