---
title: "Cara Migrasi Website ke Hosting Baru (Panduan Lengkap 2025)"
description: "Tutorial cara migrasi website WordPress ke hosting baru tanpa downtime. Langkah-langkah memindahkan file, database, dan domain dengan aman dan lengkap."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["cara migrasi website", "pindah hosting", "migrasi wordpress", "migrate website"]
keyword: "cara migrasi website"
volume: 1900
kd: 22
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
  - name: "Hostinger"
    url: "/go/hostinger"
    cta: "Lihat Harga"
---

Migrasi website ke hosting baru adalah proses yang bisa terasa menakutkan, tapi dengan langkah yang benar bisa dilakukan tanpa downtime dan tanpa kehilangan data. Artikel ini membahas cara migrasi website WordPress ke hosting baru secara lengkap.

## Kapan Perlu Migrasi Hosting?

- **Hosting lama lambat atau sering down** — performa buruk mempengaruhi SEO dan pengalaman pengunjung
- **Harga renewal terlalu mahal** — hosting baru menawarkan value lebih baik
- **Butuh fitur yang tidak tersedia** — lokasi server berbeda, teknologi baru
- **Support yang tidak responsif** — waktu kritis butuh bantuan cepat
- **Website berkembang** — butuh resource lebih besar

## Metode Migrasi Website

### Metode 1: Plugin Migrasi (Termudah)

Untuk WordPress, cara termudah adalah menggunakan plugin migrasi:
- **All-in-One WP Migration** — paling simpel, cocok untuk website < 512MB
- **Duplicator** — lebih fleksibel, bisa untuk website besar
- **Migrate Guru** — gratis, tanpa batas ukuran

### Metode 2: Manual (File + Database)

Lebih teknis tapi memberikan kontrol penuh. Cocok untuk website besar atau kasus khusus.

### Metode 3: Layanan Migrasi Hosting

Banyak hosting (termasuk [Niagahoster](/go/niagahoster) dan [Hostinger](/go/hostinger)) menawarkan jasa migrasi gratis — tinggal minta ke tim support dan mereka yang mengerjakan.

## Persiapan Sebelum Migrasi

**1. Backup website lama**
Sebelum apapun, buat backup lengkap di hosting lama. Ini jaring pengaman jika ada yang salah.

**2. Daftar hosting baru**
Aktifkan akun di hosting tujuan. Untuk migrasi tanpa downtime, kamu perlu hosting baru aktif sebelum memindahkan domain.

**3. Catat informasi penting**
- Versi PHP yang digunakan hosting lama
- Nama database, username database
- URL WordPress (domain.com atau subdomain?)

**4. Cek kompatibilitas**
Pastikan hosting baru mendukung versi PHP yang sama atau lebih baru.

## Cara Migrasi dengan Plugin All-in-One WP Migration

### Di Hosting Lama (Export)

1. Install plugin **All-in-One WP Migration** di WordPress
2. Masuk ke **All-in-One WP Migration → Export**
3. Klik **Export To → File**
4. Tunggu proses export selesai
5. **Download file** `.wpress` yang dihasilkan ke komputer

### Di Hosting Baru (Import)

1. Install WordPress baru di hosting baru (via Softaculous)
2. Install plugin **All-in-One WP Migration**
3. Masuk ke **All-in-One WP Migration → Import**
4. Upload file `.wpress` yang tadi didownload
5. Konfirmasi import — **semua data akan digantikan**
6. Tunggu proses selesai (bisa 5–30 menit tergantung ukuran)

**Catatan:** Plugin gratis membatasi upload hingga 512MB. Untuk website lebih besar, gunakan versi premium atau metode manual.

### Update URL dan Konfigurasi

Setelah import selesai:
1. Login ke WordPress admin (mungkin perlu URL sementara dari hosting)
2. **Pengaturan → Umum** → pastikan URL sudah benar
3. Flush cache jika menggunakan plugin caching
4. Test semua halaman dan fungsi

## Cara Migrasi Manual (File + Database)

### Step 1: Backup File Website dari Hosting Lama

**Via File Manager cPanel:**
1. Login cPanel hosting lama
2. File Manager → public_html
3. Pilih semua file → Compress → Download file ZIP

**Via FTP:**
1. Gunakan FileZilla
2. Connect ke hosting lama
3. Download seluruh folder `public_html`

### Step 2: Export Database dari Hosting Lama

1. cPanel → phpMyAdmin
2. Pilih database WordPress
3. Klik **Export** → Method: Quick → Format: SQL
4. Klik **Go** → file `.sql` terdownload

### Step 3: Upload File ke Hosting Baru

1. Login cPanel hosting baru
2. File Manager → public_html
3. Upload file ZIP → Extract di sini
4. Atau gunakan FTP untuk upload folder langsung

### Step 4: Buat Database Baru di Hosting Baru

1. cPanel → MySQL Databases
2. Buat database baru
3. Buat user baru
4. Assign user ke database dengan **All Privileges**

### Step 5: Import Database ke Hosting Baru

1. cPanel → phpMyAdmin
2. Pilih database baru yang baru dibuat
3. Klik **Import**
4. Upload file `.sql` dari step 2
5. Klik **Go**

### Step 6: Update wp-config.php

1. File Manager → `public_html/wp-config.php`
2. Edit file, update:
   ```
   DB_NAME — nama database baru
   DB_USER — username database baru
   DB_PASSWORD — password database baru
   DB_HOST — localhost (biasanya)
   ```
3. Save

### Step 7: Update URL di Database (Jika Domain Berubah)

Jika domain lama dan baru berbeda, update URL di database:
1. phpMyAdmin → pilih database → tab SQL
2. Jalankan query:
```sql
UPDATE wp_options SET option_value = 'https://domain-baru.com' WHERE option_name = 'siteurl';
UPDATE wp_options SET option_value = 'https://domain-baru.com' WHERE option_name = 'home';
```
3. Atau gunakan plugin **Better Search Replace** dari dashboard WordPress

## Migrasi Domain Tanpa Downtime

Agar website tidak mati selama proses migrasi:

**1. Test di hosting baru dulu**
Gunakan file `hosts` di komputer untuk "menipu" browser agar membuka website dari hosting baru tanpa mengubah DNS.

Di Windows, edit `C:\Windows\System32\drivers\etc\hosts`, tambahkan:
```
[IP hosting baru] namadomain.com
[IP hosting baru] www.namadomain.com
```

**2. Verifikasi semua berfungsi**
Test semua halaman, form, dan fungsi website di hosting baru melalui hosts file trick.

**3. Pindahkan nameserver/DNS**
Setelah yakin hosting baru berfungsi sempurna, ubah nameserver domain ke hosting baru.

**4. Tunggu propagasi DNS**
Propagasi DNS bisa memakan waktu 1–48 jam. Selama periode ini, beberapa pengunjung masih diarahkan ke hosting lama.

**5. Hapus entri hosts file**
Setelah propagasi selesai, hapus entri yang tadi ditambahkan ke hosts file.

## FAQ: Migrasi Website

**Apakah migrasi website bisa menyebabkan downtime?**
Dengan planning yang benar, downtime bisa diminimalkan menjadi 0. Kuncinya: setup dan test di hosting baru dulu, baru pindahkan domain setelah semua berfungsi.

**Berapa lama proses migrasi?**
Tergantung ukuran website. Website kecil (< 1GB): 30–60 menit. Website besar: bisa 2–4 jam. Propagasi DNS tambah 1–48 jam.

**Apakah SEO terpengaruh saat migrasi?**
Migrasi hosting yang benar (domain tetap sama) tidak mempengaruhi SEO. Yang bisa mempengaruhi SEO adalah jika domain berubah atau ada downtime berkepanjangan.

**Bisakah minta bantuan hosting baru untuk migrasi?**
Ya. Niagahoster dan Hostinger menawarkan jasa migrasi gratis. Hubungi support mereka dan berikan akses ke hosting lama.

## Kesimpulan

Migrasi website tidak perlu menakutkan. Dengan metode yang tepat — plugin migrasi untuk kemudahan, manual untuk kontrol penuh, atau minta bantuan hosting — prosesnya bisa berjalan lancar tanpa kehilangan data.

Jika sedang mempertimbangkan pindah hosting, coba:
- [Niagahoster](/go/niagahoster) — migrasi gratis, support bahasa Indonesia
- [Hostinger](/go/hostinger) — migrasi gratis, performa tinggi
