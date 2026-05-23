---
title: "Cara Install WordPress di Hosting cPanel (5 Menit, 2025)"
description: "Tutorial cara install WordPress di hosting menggunakan Softaculous di cPanel. Dari registrasi domain hingga WordPress siap digunakan, hanya 5 menit."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["cara install wordpress", "wordpress cpanel", "softaculous", "wordpress hosting"]
keyword: "cara install wordpress"
volume: 4400
kd: 35
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
  - name: "Hostinger"
    url: "/go/hostinger"
    cta: "Lihat Harga"
---

WordPress adalah CMS (Content Management System) paling populer di dunia — menggerakkan lebih dari 43% website di internet. Kabar baiknya, menginstall WordPress di hosting modern sekarang tidak membutuhkan pengetahuan teknis sama sekali dan hanya perlu waktu 5 menit.

Artikel ini membahas **cara install WordPress** menggunakan auto-installer (Softaculous) di cPanel — metode paling umum dan paling mudah.

## Yang Dibutuhkan Sebelum Mulai

- **Akun hosting aktif** dengan cPanel (Niagahoster, Hostinger, atau provider lain yang menggunakan cPanel)
- **Domain** yang sudah terhubung ke hosting
- **5 menit waktu** 😊

Jika belum punya hosting, [Niagahoster](/go/niagahoster) dan [Hostinger](/go/hostinger) keduanya menawarkan WordPress hosting dengan instalasi satu klik.

## Cara Install WordPress via Softaculous (cPanel)

Softaculous adalah auto-installer yang tersedia di hampir semua cPanel. Dengan Softaculous, kamu bisa menginstall WordPress (dan ratusan aplikasi lain) tanpa perlu sentuh kode apapun.

### Langkah 1: Login ke cPanel

1. Buka browser dan akses cPanel kamu
   - Biasanya di: `namadomain.com/cpanel`
   - Atau gunakan link dari email konfirmasi hosting
2. Masukkan username dan password cPanel
3. Klik **"Log in"**

### Langkah 2: Temukan Softaculous

Di dashboard cPanel, cari salah satu dari:
- **"Softaculous Apps Installer"** — di bagian Software
- **"WordPress"** — beberapa hosting menampilkan shortcut langsung
- Gunakan kolom pencarian cPanel dan ketik "wordpress"

Klik ikon **Softaculous** atau **WordPress**.

### Langkah 3: Mulai Instalasi WordPress

Di halaman Softaculous, klik **"Install"** atau **"Install Now"** di bagian WordPress.

### Langkah 4: Konfigurasi Instalasi

Ini bagian terpenting. Isi dengan cermat:

**Software Setup:**
- **Choose Protocol:** Pilih `https://` (wajib jika SSL sudah aktif) atau `http://`
- **Choose Domain:** Pilih domain yang ingin dipasangi WordPress dari dropdown
- **In Directory:** **Kosongkan** jika ingin WordPress di root domain (`namadomain.com`). Isi "blog" jika ingin di `namadomain.com/blog`

**Site Settings:**
- **Site Name:** Nama website kamu (bisa diubah nanti)
- **Site Description:** Tagline singkat (bisa diubah nanti)

**Admin Account (PENTING — simpan di tempat aman):**
- **Admin Username:** Buat username yang tidak mudah ditebak (hindari "admin")
- **Admin Password:** Gunakan password kuat — minimal 12 karakter, campuran huruf besar/kecil, angka, simbol
- **Admin Email:** Email aktif kamu untuk pemulihan password dan notifikasi

**Choose Language:** Pilih **Indonesian** untuk antarmuka WordPress dalam bahasa Indonesia.

**Select Plugins:**
- **Limit Login Attempts** — direkomendasikan dicentang untuk keamanan
- Selebihnya opsional

### Langkah 5: Install

Scroll ke bawah dan klik **"Install"**. Tunggu 1–3 menit hingga proses selesai.

Setelah selesai, Softaculous menampilkan:
- URL website: `https://namadomain.com`
- URL admin: `https://namadomain.com/wp-admin`

**Catat atau simpan informasi ini!**

### Langkah 6: Login ke WordPress

1. Buka `https://namadomain.com/wp-admin`
2. Masukkan username dan password yang tadi dibuat
3. Klik **"Log In"**

Selamat — WordPress kamu sudah siap!

## Cara Install WordPress di Niagahoster (Member Area)

Niagahoster memiliki cara tambahan yang bahkan lebih mudah lewat Member Area:

1. Login ke **Member Area Niagahoster**
2. Klik **"Kelola Hosting"** → pilih domain
3. Masuk ke tab **"WordPress"** atau **"Auto Installer"**
4. Isi nama situs, username admin, password, email
5. Klik **"Install"**

Prosesnya bahkan lebih simpel karena terintegrasi langsung tanpa perlu masuk ke cPanel.

## Cara Install WordPress di Hostinger (hPanel)

1. Login ke **hPanel Hostinger**
2. Klik **"Websites"** → pilih domain
3. Di bagian **"Auto Installer"**, klik **"WordPress"**
4. Ikuti panduan singkat: isi nama situs, password admin, pilih bahasa
5. Klik **"Install"**

## Langkah Setelah Install WordPress

WordPress baru terinstal masih dalam kondisi default. Ini langkah-langkah penting selanjutnya:

### 1. Pilih dan Aktifkan Tema

Masuk ke **Tampilan → Tema → Tambah Baru**. Tema gratis yang direkomendasikan untuk pemula:
- **Astra** — sangat cepat, kompatibel dengan semua page builder
- **GeneratePress** — ringan dan SEO-friendly
- **Neve** — modern, banyak template starter

### 2. Install Plugin Dasar

Minimal install plugin-plugin ini:
- **Yoast SEO** atau **RankMath** — untuk optimasi SEO
- **WP Super Cache** atau **W3 Total Cache** — untuk mempercepat website
- **Wordfence** — keamanan (firewall dan malware scanner)
- **UpdraftPlus** — backup otomatis

### 3. Hapus Konten Default

WordPress baru datang dengan konten sample yang perlu dihapus:
- **Postingan → Hapus** "Hello World!"
- **Halaman → Hapus** "Sample Page" (atau ubah menjadi About page)
- **Plugin → Hapus** plugin yang tidak dipakai (Hello Dolly, Akismet jika tidak dipakai)

### 4. Setting Permalink

Ini penting untuk SEO. Masuk ke **Pengaturan → Tautan Permanen** → pilih **"Nama Postingan"** → klik **"Simpan Perubahan"**.

Ini mengubah URL dari `domain.com/?p=1` menjadi `domain.com/judul-artikel/` yang lebih SEO-friendly.

### 5. Konfigurasi Dasar

Di **Pengaturan → Umum**:
- Cek Judul Situs dan Tagline
- Pastikan URL menggunakan `https://` (bukan `http://`)
- Atur zona waktu ke **"Asia/Jakarta"**

## Tips Keamanan WordPress

WordPress yang baru diinstall rentan jika tidak segera diamankan:

1. **Ganti URL login default** — `/wp-admin` adalah target umum bot. Gunakan plugin WPS Hide Login untuk mengubahnya
2. **Aktifkan 2FA (Two-Factor Authentication)** — untuk akun admin
3. **Update selalu** — WordPress core, tema, dan plugin harus selalu diperbarui
4. **Hapus tema/plugin yang tidak aktif** — kode yang tidak terpakai bisa jadi celah keamanan
5. **Pasang SSL** — jika belum ada, aktifkan Let's Encrypt dari cPanel

## FAQ: Install WordPress

**Apakah perlu download WordPress dulu?**

Tidak jika menggunakan Softaculous atau auto-installer serupa. Auto-installer mengunduh dan menginstall WordPress secara otomatis. Download manual hanya diperlukan jika kamu ingin install secara manual via FTP.

**Berapa lama proses instalasi WordPress?**

Dengan Softaculous, prosesnya 1–5 menit. Setelah itu WordPress langsung bisa digunakan.

**Bisakah install lebih dari satu WordPress di satu hosting?**

Ya. Kamu bisa install WordPress di beberapa domain atau subdomain yang berbeda, tergantung batas paket hostingmu. Buka Softaculous dan ulangi proses instalasi dengan memilih domain atau path yang berbeda.

**Lupa password WordPress, bagaimana?**

Di halaman login (`/wp-admin`), klik **"Lupa kata sandi?"** → masukkan email admin → cek email untuk link reset password. Jika email juga tidak bisa diakses, bisa reset lewat phpMyAdmin di cPanel.

**Apakah WordPress gratis?**

WordPress.org (self-hosted) sepenuhnya gratis dan open source. Yang berbayar adalah hosting dan domain untuk menjalankannya. WordPress.com adalah layanan berbeda yang menyediakan hosting WordPress dengan paket gratis dan berbayar.

## Kesimpulan

Menginstall WordPress di hosting modern benar-benar mudah — hanya perlu 5 menit dengan Softaculous. Yang membutuhkan waktu lebih adalah proses memilih tema, menginstall plugin, dan membuat konten pertama kamu.

Langkah selanjutnya setelah WordPress terinstall: pilih tema yang sesuai, install plugin SEO dan keamanan, dan mulai membuat konten.

Belum punya hosting? Coba [Niagahoster](/go/niagahoster) atau [Hostinger](/go/hostinger) — keduanya menawarkan WordPress hosting dengan instalasi satu klik dan dukungan pelanggan yang responsif.
