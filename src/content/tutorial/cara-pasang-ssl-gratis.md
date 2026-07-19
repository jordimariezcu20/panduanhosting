---
title: "Cara Pasang SSL Gratis di Hosting 2026 (Let's Encrypt, 5 Menit)"
description: "Cara pasang SSL gratis di hosting via cPanel atau hPanel dalam 5 menit — panduan lengkap untuk Niagahoster, Hostinger, dan hosting Indonesia lainnya. HTTPS aktif tanpa biaya."
publishDate: "2026-05-23"
lastUpdated: "2026-07-19"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["cara pasang ssl gratis", "ssl gratis hosting", "https gratis", "lets encrypt cpanel", "cara aktifkan ssl", "ssl niagahoster", "ssl hostinger"]
keyword: "cara pasang ssl gratis"
volume: 1300
kd: 15
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Hosting + SSL Gratis Otomatis"
  - name: "Hostinger"
    url: "/go/hostinger"
    cta: "Hosting + SSL Gratis Otomatis"
faqItems:
  - question: "Bagaimana cara pasang SSL gratis di hosting?"
    answer: "Cara pasang SSL gratis di hosting: (1) Login ke cPanel hosting kamu. (2) Di bagian Security, klik SSL/TLS atau Let's Encrypt SSL. (3) Pilih domain yang ingin dipasangi SSL. (4) Klik Issue atau Install SSL. (5) Tunggu 1–2 menit hingga selesai. (6) Buka website dengan https:// di browser untuk verifikasi. Hosting seperti Niagahoster dan Hostinger mengaktifkan SSL otomatis saat domain terhubung."
  - question: "Apakah SSL gratis Let's Encrypt aman digunakan?"
    answer: "Ya, Let's Encrypt sama amannya dengan SSL berbayar untuk enkripsi data — menggunakan standar TLS yang sama. Perbedaannya hanya pada garansi finansial dan validasi organisasi (OV/EV SSL berbayar). Untuk blog, website bisnis, UMKM, dan toko online kebanyakan, Let's Encrypt sudah lebih dari cukup dan diakui semua browser modern."
  - question: "Berapa lama SSL Let's Encrypt berlaku?"
    answer: "SSL Let's Encrypt berlaku 90 hari. Namun hosting yang baik (Niagahoster, Hostinger, Dewaweb) memperpanjang SSL otomatis sebelum expired — kamu tidak perlu melakukan apapun. Jika hosting tidak memperpanjang otomatis, kamu perlu install ulang setiap 90 hari."
  - question: "Website sudah HTTPS tapi masih muncul Not Secure, kenapa?"
    answer: "Penyebab paling umum: mixed content — beberapa elemen (gambar, script, CSS) masih dimuat via HTTP meskipun SSL sudah terpasang. Solusi untuk WordPress: install plugin Really Simple SSL yang menangani mixed content otomatis. Cek juga di Chrome DevTools (F12 → Console) untuk melihat elemen mana yang masih HTTP."
  - question: "Apakah SSL gratis memengaruhi kecepatan website?"
    answer: "Tidak secara signifikan. Ada overhead sangat kecil saat TLS handshake pertama, tapi dengan HTTP/2 yang sudah didukung semua hosting modern, website HTTPS justru bisa lebih cepat dari HTTP. Google juga memberi sedikit keunggulan ranking untuk website HTTPS dibanding HTTP."
---

**Cara pasang SSL gratis — ringkasan 5 langkah:**
1. Login cPanel → Security → SSL/TLS atau Let's Encrypt
2. Pilih domain → klik **Issue** atau **Install SSL**
3. Tunggu 1–2 menit → buka `https://namadomain.com` untuk verifikasi
4. Aktifkan redirect HTTP→HTTPS (via .htaccess atau plugin Really Simple SSL)
5. Cek mixed content di Chrome DevTools jika masih ada peringatan

Di [Niagahoster](/go/niagahoster) dan [Hostinger](/go/hostinger), SSL gratis aktif **otomatis** saat domain terhubung ke hosting.

SSL adalah lapisan keamanan yang membuat website menggunakan HTTPS — tanda gembok di browser yang menandakan koneksi terenkripsi. **Let's Encrypt** menyediakan SSL gratis yang diakui semua browser modern.

## Mengapa SSL Wajib untuk Website?

Sebelum ke langkah teknis, ini alasan SSL bukan lagi opsional:

- **Google mewajibkannya** — website HTTP (tanpa SSL) diberi label "Not Secure" di Chrome sejak 2018
- **Pengaruh peringkat Google** — HTTPS adalah faktor ranking yang dikonfirmasi Google sejak 2014
- **Kepercayaan pengunjung** — 84% pembeli online membatalkan transaksi jika melihat website tidak aman
- **Syarat payment gateway** — Midtrans, Xendit, dan semua payment gateway Indonesia mewajibkan HTTPS
- **Proteksi data** — data yang dikirim pengunjung (form, login, pembayaran) dienkripsi

## Jenis-Jenis SSL

Sebelum memasang, kenali dulu jenis SSL yang tersedia:

| Jenis | Biaya | Cocok untuk |
|---|---|---|
| **Let's Encrypt** | Gratis | Blog, website personal, UMKM |
| **DV SSL** (berbayar) | Rp 100.000–500.000/tahun | Website bisnis |
| **OV SSL** | Rp 1–5 juta/tahun | Perusahaan menengah |
| **EV SSL** | Rp 5–20 juta/tahun | Bank, e-commerce besar |

Untuk kebanyakan website, **Let's Encrypt sudah lebih dari cukup**.

## Cara Pasang SSL Gratis via cPanel (Metode Paling Umum)

Hampir semua hosting Indonesia menyediakan aktivasi SSL gratis langsung dari cPanel. Ini cara termudahnya.

### Langkah 1: Login ke cPanel

1. Buka **namadomain.com/cpanel** atau link yang diberikan oleh hosting kamu
2. Masukkan username dan password cPanel
3. Klik **"Login"**

Jika kamu belum punya hosting, [Niagahoster](/go/niagahoster) dan [Hostinger](/go/hostinger) keduanya menyediakan SSL gratis (Let's Encrypt) yang diaktifkan otomatis saat kamu mendaftar.

### Langkah 2: Temukan Menu SSL/TLS

Di dashboard cPanel, cari salah satu dari:
- **"SSL/TLS"** — biasanya di bagian "Security"
- **"Let's Encrypt SSL"** — beberapa hosting menyediakan menu khusus
- **"Free SSL"** — nama menu di beberapa panel hosting

### Langkah 3: Aktivasi SSL dengan Let's Encrypt

**Jika ada menu "Let's Encrypt":**
1. Klik menu tersebut
2. Pilih domain yang ingin dipasangi SSL
3. Centang opsi "www.namadomain.com" juga (untuk versi dengan www)
4. Klik **"Issue"** atau **"Install SSL"**
5. Tunggu 1–2 menit sampai proses selesai
6. Kamu akan melihat notifikasi berhasil

**Jika menu SSL/TLS biasa:**
1. Klik **"SSL/TLS"**
2. Pilih **"Manage SSL sites"**
3. Klik **"Run SSL Wizard"** atau **"AutoSSL"**
4. Pilih domain → klik **"Request"**

### Langkah 4: Verifikasi SSL Terpasang

Buka browser dan akses **https://namadomain.com** (dengan huruf "s" setelah http). Jika muncul ikon gembok (🔒) di address bar, SSL berhasil terpasang!

## Cara Pasang SSL di Niagahoster

Niagahoster memiliki antarmuka yang sedikit berbeda. Berikut langkah spesifiknya:

1. Login ke **Member Area Niagahoster**
2. Masuk ke **cPanel**
3. Scroll ke bagian **"Security"** → klik **"SSL/TLS Status"**
4. Pilih domain yang ingin diaktifkan
5. Klik **"Run AutoSSL"**
6. Tunggu proses selesai (biasanya 1–3 menit)

Atau cara lebih mudah: dari Member Area, masuk ke **"Kelola Hosting"** → **"SSL"** → aktifkan toggle SSL untuk domain yang diinginkan.

## Cara Pasang SSL di Hostinger

1. Login ke **hPanel Hostinger**
2. Klik **"Websites"** → pilih website kamu
3. Masuk ke **"Security" → "SSL"**
4. Klik **"Install SSL"** untuk domain kamu
5. Pilih **"Free"** (Let's Encrypt)
6. Klik **"Install"**

SSL Hostinger biasanya aktif dalam hitungan menit dan diperpanjang otomatis setiap 90 hari.

## Paksa Website Menggunakan HTTPS (Redirect HTTP ke HTTPS)

Setelah SSL terpasang, kamu perlu memastikan semua pengunjung diarahkan ke versi HTTPS. Tanpa ini, website bisa diakses via HTTP maupun HTTPS — yang bisa membingungkan Google.

### Metode 1: Via .htaccess (Direkomendasikan untuk WordPress)

1. Login ke cPanel → **File Manager**
2. Buka folder **public_html**
3. Temukan file **.htaccess** (aktifkan "Show Hidden Files" jika tidak terlihat)
4. Klik kanan → **Edit**
5. Tambahkan kode ini di baris paling atas:

```
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

6. Klik **Save Changes**

### Metode 2: Via WordPress (Jika Menggunakan WordPress)

1. Login ke WordPress Admin
2. Masuk ke **Pengaturan → Umum**
3. Ubah **"WordPress Address (URL)"** dan **"Site Address (URL)"** dari `http://` menjadi `https://`
4. Klik **"Simpan Perubahan"**

Kemudian install plugin **Really Simple SSL** untuk menangani redirect dan mixed content otomatis:
1. **Plugin → Tambah Baru**
2. Cari "Really Simple SSL"
3. Install dan Aktifkan
4. Ikuti wizard yang muncul

### Metode 3: Via cPanel (Cara Paling Mudah)

Beberapa hosting menyediakan opsi "Force HTTPS Redirect" langsung di cPanel:
1. Di cPanel, cari **"Domains"**
2. Klik domain kamu
3. Aktifkan toggle **"Force HTTPS Redirect"**

## Cek Mixed Content (Konten Campur)

Setelah aktifkan HTTPS, mungkin ada "mixed content warning" — terjadi ketika beberapa elemen di website (gambar, script, CSS) masih dimuat via HTTP.

**Cara cek:**
1. Buka website kamu di Chrome
2. Tekan **F12** untuk buka Developer Tools
3. Klik tab **"Console"**
4. Jika ada peringatan "Mixed Content", artinya ada elemen HTTP yang perlu diperbaiki

**Cara perbaiki di WordPress:**
Plugin **Really Simple SSL** biasanya menangani ini otomatis. Jika masih ada, gunakan plugin **Better Search Replace** untuk mengganti semua URL `http://namadomain.com` menjadi `https://namadomain.com` di database.

## FAQ: SSL Gratis di Hosting

**Apakah SSL Let's Encrypt sama amannya dengan SSL berbayar?**

Ya, untuk enkripsi data, Let's Encrypt sama amannya dengan SSL berbayar. Perbedaannya hanya pada jaminan/garansi yang diberikan issuer dan tanda validasi bisnis (untuk OV/EV SSL).

**Berapa lama SSL Let's Encrypt berlaku?**

90 hari. Tapi hosting yang baik (seperti Niagahoster dan Hostinger) memperpanjangnya secara otomatis sebelum kadaluarsa, jadi kamu tidak perlu khawatir.

**SSL gratis bisa untuk semua domain?**

Ya, termasuk subdomain. Untuk setiap domain atau subdomain, kamu perlu mengaktifkan SSL secara terpisah.

**Website saya sudah HTTPS tapi masih muncul "Not Secure"?**

Kemungkinan ada mixed content — beberapa elemen halaman masih dimuat via HTTP. Gunakan plugin Really Simple SSL untuk WordPress, atau periksa secara manual di Developer Tools browser.

**Apakah SSL memengaruhi kecepatan website?**

Ada overhead sangat kecil pada awal koneksi (TLS handshake), tapi dengan protokol HTTP/2 yang sudah didukung semua hosting modern, website HTTPS justru bisa lebih cepat dari HTTP biasa.

## Kesimpulan

Memasang SSL gratis di hosting memakan waktu kurang dari 5 menit dan manfaatnya sangat besar: kepercayaan pengunjung meningkat, peringkat Google lebih baik, dan website kamu memenuhi standar keamanan modern.

Tidak ada alasan untuk menunda memasang SSL. Jika hostingmu belum menyediakan SSL gratis, pertimbangkan untuk pindah ke hosting yang lebih modern seperti [Niagahoster](/go/niagahoster) atau [Hostinger](/go/hostinger) yang sudah menyertakan SSL gratis secara otomatis. 🔒
