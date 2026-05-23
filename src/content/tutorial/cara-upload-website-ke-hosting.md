---
title: "Cara Upload Website ke Hosting (File Manager & FTP, 2025)"
description: "Tutorial cara upload website ke hosting menggunakan cPanel File Manager dan FTP dengan FileZilla. Panduan lengkap untuk website HTML statis maupun WordPress."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["cara upload website", "file manager cpanel", "ftp filezilla", "upload file hosting"]
keyword: "cara upload website ke hosting"
volume: 2400
kd: 20
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
  - name: "Hostinger"
    url: "/go/hostinger"
    cta: "Lihat Harga"
---

Setelah website selesai dibuat di komputer lokal, langkah selanjutnya adalah menguploadnya ke hosting agar bisa diakses siapapun di internet. Artikel ini membahas **cara upload website ke hosting** menggunakan dua metode paling umum: cPanel File Manager dan FTP.

## Persiapan Sebelum Upload

Pastikan kamu sudah menyiapkan:

1. **File website yang siap** — semua file HTML, CSS, JavaScript, gambar sudah final
2. **Akun hosting aktif** dengan domain yang sudah terhubung
3. **Informasi akses cPanel** — username, password, dan URL cPanel (dari email konfirmasi hosting)

## Memahami Struktur Folder Hosting

Sebelum upload, penting memahami struktur folder di hosting:

```
/home/usernamecpanel/
├── public_html/         ← Folder utama website (root domain)
│   ├── index.html       ← Halaman utama website
│   ├── about.html
│   ├── images/
│   └── css/
├── www → public_html    ← Symlink ke public_html
└── [folder lain]        ← File sistem hosting (jangan diubah)
```

**`public_html`** adalah folder kunci — semua file website yang ingin bisa diakses via browser harus diletakkan di sini (atau di subfolder di dalamnya).

## Metode 1: Upload via cPanel File Manager

File Manager adalah cara termudah untuk upload file kecil hingga menengah langsung dari browser.

### Langkah 1: Buka File Manager

1. Login ke cPanel
2. Di bagian **"Files"**, klik **"File Manager"**
3. File Manager akan terbuka di tab browser baru

### Langkah 2: Navigasi ke public_html

- Di panel kiri, klik **"public_html"**
- Atau klik folder `public_html` di area utama

### Langkah 3: Upload File

**Untuk upload file tunggal atau beberapa file:**
1. Klik tombol **"Upload"** di toolbar atas
2. Drag and drop file ke area upload, atau klik **"Select File"** untuk pilih dari komputer
3. Tunggu proses upload selesai
4. Klik **"Go Back"** untuk kembali ke File Manager

**Untuk upload seluruh website (banyak file):**

Cara paling efisien adalah dengan mengompres folder website menjadi file ZIP terlebih dahulu:

1. Di komputer lokal, pilih semua file website → klik kanan → **"Send to Compressed (zipped) folder"** (Windows) atau **"Compress"** (Mac)
2. Upload file ZIP tersebut ke `public_html` via File Manager
3. Setelah upload selesai, klik kanan file ZIP → pilih **"Extract"**
4. Konfirmasi path ekstraksi (pastikan ke `public_html`)
5. Hapus file ZIP setelah ekstraksi

### Langkah 4: Verifikasi

Buka `namadomain.com` di browser. Jika halaman utama website muncul, upload berhasil!

**Tips:** Jika ada file `index.html` yang sudah ada (dari default hosting), hapus atau timpa dengan file `index.html` website kamu.

## Metode 2: Upload via FTP dengan FileZilla

FTP (File Transfer Protocol) lebih cepat dan lebih andal untuk upload file dalam jumlah besar. FileZilla adalah FTP client gratis yang paling populer.

### Langkah 1: Install FileZilla

Download FileZilla Client (gratis) dari situs resminya dan install di komputer.

### Langkah 2: Dapatkan Informasi FTP

Login ke cPanel → cari **"FTP Accounts"**. Lihat:
- **FTP Host/Server:** biasanya `ftp.namadomain.com` atau `namadomain.com`
- **FTP Username:** username cPanel kamu atau akun FTP khusus
- **FTP Password:** password cPanel atau password FTP
- **Port:** 21 (FTP standar) atau 22 (SFTP, lebih aman)

Untuk keamanan lebih, buat akun FTP khusus di **cPanel → FTP Accounts → Create an FTP Account** dengan akses terbatas ke folder `public_html` saja.

### Langkah 3: Hubungkan ke Server

1. Buka FileZilla
2. Di bagian QuickConnect (atas), isi:
   - **Host:** `ftp.namadomain.com` atau `sftp://namadomain.com` untuk SFTP
   - **Username:** username FTP
   - **Password:** password FTP
   - **Port:** 21 (FTP) atau 22 (SFTP)
3. Klik **"Quickconnect"**

Jika berhasil, panel kanan (server) akan menampilkan file-file di hosting. Jika muncul peringatan "Unknown host key", klik **"OK"** / **"Accept"** untuk melanjutkan.

### Langkah 4: Navigasi ke public_html

Di panel kanan (server):
- Klik **`/`** atau **`..`** untuk ke root
- Klik **`public_html`**

### Langkah 5: Upload File

Di panel kiri (komputer lokal), navigasi ke folder website kamu.

**Pilih dan upload file:**
- Drag file dari panel kiri ke panel kanan
- Atau klik kanan file → **"Upload"**

FileZilla akan menampilkan progress transfer di bagian bawah.

**Upload seluruh folder:**
- Di panel kiri, navigasi ke folder induk website kamu
- Pilih semua file dan folder di dalamnya (Ctrl+A)
- Drag ke panel kanan (public_html)

### Langkah 6: Tunggu Selesai

Waktu upload tergantung ukuran file dan kecepatan internet. FileZilla menampilkan queue dan status transfer di bagian bawah.

## Mengupload Website WordPress

Jika kamu sudah membuat website WordPress di komputer lokal (dengan XAMPP atau Laragon) dan ingin memindahkannya ke hosting:

### Metode A: Export-Import WordPress

1. **Di lokal:** install plugin **"All-in-One WP Migration"**
2. **Export** website → download file `.wpress`
3. **Di hosting:** install WordPress baru via Softaculous
4. **Import** file `.wpress` melalui plugin yang sama

### Metode B: Manual (Lebih Lengkap)

**Upload file:**
1. Kompres folder WordPress lokal menjadi ZIP
2. Upload ke `public_html` dan ekstrak (via File Manager)

**Upload database:**
1. Di lokal: buka phpMyAdmin (biasanya di `localhost/phpmyadmin`)
2. Pilih database WordPress → tab **"Export"** → **"Go"** → download file `.sql`
3. Di hosting: buka phpMyAdmin dari cPanel
4. Buat database baru, buat user database, assign user ke database
5. Import file `.sql` tadi

**Update konfigurasi:**
1. Di hosting, buka File Manager → `public_html/wp-config.php`
2. Update: `DB_NAME`, `DB_USER`, `DB_PASSWORD` sesuai database baru di hosting
3. Update `DB_HOST` ke `localhost`

**Update URL:**
1. Login ke WordPress admin
2. **Pengaturan → Umum** → update WordPress Address dan Site Address ke domain hosting

## Masalah Umum dan Solusinya

**Website menampilkan blank/putih setelah upload**
- Cek apakah `index.html` atau `index.php` ada di `public_html`
- Buka browser console (F12) untuk melihat error CSS/JS

**File CSS atau gambar tidak muncul**
- Periksa path file — case sensitive di Linux server (berbeda dengan Windows)
- `images/foto.JPG` ≠ `images/foto.jpg` di hosting Linux

**Error "403 Forbidden"**
- Permission file harus: file = 644, folder = 755
- Di File Manager: pilih file → klik kanan → **"Change Permissions"** → set ke 644

**Upload gagal karena file terlalu besar**
- cPanel File Manager biasanya punya batas upload ~50–100MB
- Untuk file besar, gunakan FTP yang tidak ada batasnya

## FAQ: Upload Website ke Hosting

**Berapa ukuran maksimal upload di File Manager cPanel?**

Umumnya 50–256MB per file. Untuk website yang lebih besar, kompres menjadi ZIP dan upload, atau gunakan FTP yang tidak dibatasi ukuran.

**Apakah file di public_html langsung online?**

Ya, segera setelah diupload. Tidak perlu "publish" atau tindakan tambahan apapun.

**Bisakah upload website tanpa domain aktif?**

Ya, tapi akses via IP langsung atau temporary URL yang disediakan hosting. Domain hanya diperlukan agar pengunjung bisa mengaksesnya dengan nama yang mudah diingat.

**Perbedaan FTP dan SFTP?**

FTP (port 21) mengirim data tanpa enkripsi. SFTP (SSH File Transfer Protocol, port 22) mengenkripsi semua data yang ditransfer. Gunakan SFTP jika tersedia untuk keamanan lebih baik.

**Apakah perlu hapus file lama sebelum upload yang baru?**

Tidak harus, tapi disarankan untuk menghindari konflik. Jika mengupload versi baru website, hapus file lama dulu atau pastikan semua file lama tertimpa.

## Kesimpulan

Upload website ke hosting bisa dilakukan dengan dua cara utama — File Manager untuk kemudahan, FTP untuk kecepatan dan volume besar. Pilih metode yang sesuai dengan ukuran website dan kenyamananmu.

Setelah upload selesai, jangan lupa test semua halaman dan link untuk memastikan semuanya berjalan dengan baik.

Butuh hosting untuk upload website? [Niagahoster](/go/niagahoster) dan [Hostinger](/go/hostinger) menyediakan cPanel dengan File Manager dan FTP yang mudah digunakan, plus support yang siap membantu jika ada masalah.
