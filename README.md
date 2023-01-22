
# Specific Web Protection Browser Extension 

Ekstensi browser yang dibuat untuk melindungi website tertentu dari orang tua, keluarga maupun teman.
Ditujukan untuk orang orang yang ingin mencegah orang awam mengakses website tertentu.
Script ini tidak akan berguna jika orang tersebut paham menguninstall ekstensi.


```
Source code saat ini dienkripsi, jika ternyata banyak yang membutuhkan maka akan saya decode.
Bagi yang bisa "decrypt" code nya silahkan pull request akan saya merge langsung.
```
## Feature
Script ini memiliki fitur sebagai berikut.
### Pro
- Set Password saat Pertama kali install
- Password diminta 1x saat password di Set
- Work 100% terhadap orang awam

### Const
- Hanya berguna pada orang awam komputer ( Orang tua terutama )
- Tidak work untuk anak IT
- Browser uninstall = proteksi mati lah wkwk.## Instalasi

Untuk built `.crx` file yang tinggal pakai bisa cek di release.

- Download Project ini
- Buka `manifest.json`
- Ubah menjadi seperti ini:

```json
{
    "manifest_version": 3,
    "name": "[INI JUDUL ASAL ISI DENGAN ASAL]",
    "version": "1.0",
    "description": "[INI JUDUL ASAL ISI DENGAN ASAL]",
    "author": "Rafli Pasya",
    "content_scripts": [
        {
            "matches": ["*://*.whatsapp.com/*", "*://*.facebook.com/*"],
            "js": ["web.js"],
            "run_at": "document_start"
        },
        {
            "matches": ["*://*.google.com/*"],
            "js": ["setting.js"],
            "run_at": "document_end"
        }
    ],
    "background": {
        "service_worker": "background.js"
    },
    "permissions": [
        "tabs",
        "storage"
    ],
    "redirect_url": "https://www.google.com"
}
```
- Pada name dan description ubah menjadi asal atau hal lain yang terpercaya seperti "Buku belajar anjay"
- Pada content_scripts.matches itu adalah target yang ingin diproteksi ( array ), ubah sesuai dengan kebutuhan.
- Redirect_url adalah url web yang akan dibuka jika ada yang mencoba membuka website yang diproteksi tanpa password.
- Buka Chrome / Edges -> Extension
- Setelah itu nyalakan developer mode.
- load unpack extension.
Bebas pilih apakah mau dipack dulu atau tidak.
- Jika pakai Edges bisa drag and drop file .crx nya.## Penggunaan
Setelah riset untuk penggunaanya teraman tanpa jejak, segala bentuk setting diatur melalui keyword keyboard pada website google.

[Google](https://google.com)

(Wajib dibuka dari sini, atau bisa setting di manifest.json bagian content_script)

nantinya saat menekan tombol tertentu pada website ( google.com ) tersebut akan muncul prompt.



### Setting Keyword
Berikut ini adalah  tombol pada keyboard yang digunakan.
Gunakan saat membuka web google.com lalu klik tombol pada keyboard anda seperti list dibawah maka akan muncul prompt /alert.

#### Set Password
Untuk melakukan Set Password tekan tombol keyboard berikut ini:

`
s
`

Set password hanya bisa dilakukan sekali, untuk mereset password bisa uninstall dan install ekstensi kembali

#### Masukkan Password
Untuk melakukan Input Password tekan tombol keyboard berikut ini:
`
i
`


Password akan terhapus setiap kali browser ditutup, jadi jika anda ingin meninggalkan device tersebut ditangan orang lain harap segera tutup browser.
ketika browser dibuka kembali maka diwajibkan untuk login ulang.

### Console.log Message

Jika saat membuka google.com ( default web setting ) terdapat console.log :

`el mejor portero del mundo`

Maka anda sudah ada dihalaman setting ( default: google.com ), silahkan masukkan keyword setting yg tersedia.

Berikut ini "sandi" dari console.log yang terdapat saat mengakses website yang diproteksi.
Jangan lupa aktifkan preserve log.



- A | Password belum diset, silahkan set password.
- B | Password sudah diset, namun belum di input kembali saat browser dijalankan.
- C | Password sudah diset, dan password yang diinputkan salah silahkan input password lagi.
## Authors

- [Rafli Pasya](https://www.github.com/pasya1912)


## Contributing

Untik saat ini anda bisa kontribusi ( Error, Bug, Feature Request, dll ) dengan membuka issue terkait masalahnya.