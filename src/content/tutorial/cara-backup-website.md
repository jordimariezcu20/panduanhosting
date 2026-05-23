---
title: "Cara Backup Website di cPanel (Panduan Lengkap 2025)"
description: "Tutorial cara backup website di cPanel secara manual dan otomatis. Lindungi data website kamu dari kehilangan data, error, atau serangan hacker."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["backup website", "cpanel", "backup hosting", "keamanan website"]
keyword: "cara backup website"
volume: 880
kd: 10
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
  - name: "Hostinger"
    url: "/go/hostinger"
    cta: "Lihat Harga"
---

Kehilangan data website adalah mimpi buruk yang bisa terjadi kapan saja — server crash, kesalahan update plugin, atau serangan hacker. Satu-satunya cara menghindari bencana ini adalah dengan **backup rutin**. Artikel ini membahas cara backup website di cPanel dengan cepat dan mudah.

## Mengapa Backup Website Itu Penting?

Sebelum masuk ke langkah-langkah, pahami dulu risikonya:

- **Server failure** — hardware hosting bisa rusak tanpa peringatan
- **Error setelah update** — update WordPress, tema, atau plugin bisa memecah website
- **Serangan hacker** — malware atau defacement bisa merusak seluruh file
- **Kesalahan sendiri** — menghapus file atau database yang salah
- **Masalah migrasi** — pindah hosting tanpa backup berisiko kehilangan data

Hosting-hosting terbaik seperti Niagahoster dan Hostinger sudah menyediakan backup otomatis, tapi memiliki backup sendiri tetap wajib sebagai lapisan keamanan tambahan.

## Jenis Backup Website

Ada dua komponen utama yang harus di-backup:

| Komponen | Isi | Ukuran |
|---|---|---|
| **File website** | HTML, PHP, gambar, CSS, JS, tema, plugin | Bervariasi (10MB–10GB+) |
| **Database** | Postingan, komentar, pengaturan, user | Biasanya lebih kecil (1–500MB) |

Untuk website yang lengkap, kamu perlu **keduanya**. File tanpa database = website kosong. Database tanpa file = tidak bisa jalan.

## Cara Backup Website di cPanel (Manual)

### Metode 1: Full Backup (Paling Lengkap)

Full backup membuat satu file arsip berisi semua file dan database sekaligus.

**Langkah-langkahnya:**

1. Login ke cPanel (akses via **namadomain.com/cpanel**)
2. Di bagian **"Files"**, klik **"Backup"**
3. Klik **"Download a Full Website Backup"**
4. Di **"Backup Destination"**, pilih **"Home Directory"**
5. Isi email untuk notifikasi (opsional)
6. Klik **"Generate Backup"**
7. Tunggu proses selesai — bisa 5–30 menit tergantung ukuran website
8. Setelah selesai, kembali ke halaman Backup → klik nama file backup untuk download

File backup akan berformat `.tar.gz` dan disimpan di folder utama cPanel kamu. **Segera download ke komputer lokal** karena file ini memakan storage hosting.

### Metode 2: Partial Backup (File Saja atau Database Saja)

Lebih cepat jika kamu hanya butuh salah satu komponen:

**Backup file website:**
1. Di cPanel → **Backup** → bagian **"Partial Backups"**
2. Klik **"Download a Home Directory Backup"**
3. File `.tar.gz` langsung didownload

**Backup database:**
1. Masih di halaman yang sama
2. Di bagian **"Download a MySQL Database Backup"**
3. Klik nama database yang ingin di-backup (biasanya berformat `username_namadb`)
4. File `.sql.gz` langsung didownload

### Metode 3: Backup via phpMyAdmin (Database Saja)

Untuk backup database yang lebih terkontrol:

1. Di cPanel → **"Databases"** → **"phpMyAdmin"**
2. Pilih database di panel kiri
3. Klik tab **"Export"** di menu atas
4. Method: pilih **"Quick"** untuk export standar
5. Format: **SQL**
6. Klik **"Go"** → file `.sql` akan didownload

## Cara Backup WordPress Secara Spesifik

Jika website kamu menggunakan WordPress, ada cara lebih mudah lewat plugin:

### Plugin UpdraftPlus (Gratis, Paling Populer)

1. Login ke WordPress Admin → **Plugin → Tambah Baru**
2. Cari **"UpdraftPlus"**
3. Install dan Aktifkan
4. Masuk ke **Pengaturan → UpdraftPlus Backups**
5. Klik **"Backup Now"** untuk backup manual
6. Atau atur jadwal backup otomatis di tab **"Settings"**

UpdraftPlus bisa menyimpan backup ke:
- **Dropbox** — direkomendasikan (simpan di luar server)
- **Google Drive** — mudah diakses
- **Amazon S3** — untuk website besar
- **Email** — untuk file kecil

### Plugin Jetpack Backup (Berbayar, Paling Andal)

Jetpack Backup menyimpan backup real-time dan memungkinkan restore satu klik. Cocok untuk toko online yang tidak boleh kehilangan data transaksi.

## Cara Restore (Memulihkan) Backup

Backup tidak berguna jika kamu tidak tahu cara restore-nya. Berikut caranya:

### Restore Full Backup di cPanel

1. cPanel → **"Backup"**
2. Di bagian **"Restore a Full Backup"**, klik **"Choose File"**
3. Upload file backup `.tar.gz` yang sudah kamu download
4. Klik **"Upload"** → proses restore dimulai

### Restore Database via phpMyAdmin

1. cPanel → **phpMyAdmin**
2. Pilih database tujuan di panel kiri (harus sudah ada, buat dulu jika belum)
3. Klik tab **"Import"**
4. Klik **"Choose File"** → pilih file `.sql` atau `.sql.gz`
5. Klik **"Go"**

### Restore WordPress via UpdraftPlus

1. WordPress Admin → **Pengaturan → UpdraftPlus**
2. Pilih backup yang ingin di-restore
3. Klik **"Restore"** → pilih komponen yang ingin dikembalikan
4. Ikuti wizard yang muncul

## Jadwal Backup yang Direkomendasikan

| Jenis Website | Frekuensi Backup |
|---|---|
| Blog personal | Mingguan |
| Website bisnis | 2x seminggu |
| Toko online aktif | Harian |
| Website dengan banyak update | Harian atau real-time |

**Aturan 3-2-1 untuk backup:**
- **3** salinan data
- **2** media penyimpanan berbeda
- **1** salinan di lokasi off-site (cloud atau luar kantor)

## Tips Penting Tentang Backup

**1. Simpan backup di luar server**
Backup di server yang sama tidak aman — jika server kena masalah, backup juga ikut hilang. Selalu download ke komputer atau upload ke cloud.

**2. Test restore secara berkala**
Backup yang tidak bisa di-restore sama dengan tidak ada backup. Test proses restore setidaknya setiap 3 bulan.

**3. Simpan beberapa versi**
Jangan simpan satu backup saja. Simpan minimal 3 versi terbaru — misalnya backup 7 hari, 30 hari, dan 90 hari terakhir.

**4. Cek apakah hosting sudah include backup otomatis**
[Niagahoster](/go/niagahoster) menyediakan backup otomatis harian, dan [Hostinger](/go/hostinger) menyediakan backup mingguan gratis di semua paket. Ini adalah lapisan backup tambahan — tetapi jangan hanya mengandalkan backup dari hosting saja.

## FAQ: Backup Website

**Berapa sering saya harus backup website?**

Minimal seminggu sekali untuk website personal. Untuk toko online atau website yang sering diupdate, backup harian sangat direkomendasikan.

**Backup otomatis dari hosting sudah cukup?**

Tidak sepenuhnya. Backup dari hosting adalah safety net, bukan pengganti backup mandiri. Beberapa hosting hanya menyimpan backup 7–30 hari terakhir, dan tidak semua paket mengandung backup.

**File backup terlalu besar, bagaimana?**

Backup database biasanya sangat kecil. Yang membuat besar adalah file media (gambar, video). Coba backup file dan database secara terpisah, atau gunakan plugin yang hanya backup file yang berubah (incremental backup).

**Berapa lama waktu backup website?**

Tergantung ukuran website. Website kecil (< 500MB) selesai dalam 2–5 menit. Website besar bisa membutuhkan 30–60 menit.

**Apakah backup bisa dilakukan dari smartphone?**

Untuk cPanel, buka via browser mobile dan akses menu Backup. Prosesnya sama, tapi lebih nyaman dari komputer untuk mengunduh file backup yang besar.

## Kesimpulan

Backup website adalah kebiasaan wajib yang sering diabaikan sampai terjadi bencana. Dengan cPanel, prosesnya hanya butuh beberapa menit dan bisa dilakukan kapan saja.

Jadikan backup sebagai rutinitas — setidaknya sekali seminggu untuk website personal, dan setiap hari untuk website yang aktif digunakan. Jangan tunggu sampai kehilangan data baru menyesal.

Jika hosting kamu belum menyediakan fitur backup yang lengkap, pertimbangkan untuk pindah ke [Niagahoster](/go/niagahoster) atau [Hostinger](/go/hostinger) yang sudah menyertakan backup otomatis di semua paketnya.
