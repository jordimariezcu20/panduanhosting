---
title: "Cara Buat Email Bisnis dengan Domain Sendiri (Gratis via cPanel, 2025)"
description: "Tutorial cara buat email bisnis profesional dengan domain sendiri seperti nama@perusahaan.com menggunakan cPanel. Gratis, tanpa biaya tambahan, selesai dalam 5 menit."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["email bisnis", "email domain sendiri", "cpanel", "email profesional"]
keyword: "cara buat email bisnis"
volume: 2900
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

Punya email bisnis dengan domain sendiri — seperti `halo@tokobaju.com` atau `info@restoran-kamu.id` — adalah investasi kecil yang memberikan kesan sangat profesional. Dibandingkan email gratisan (`@gmail.com`, `@yahoo.com`), email bisnis dengan domain sendiri membangun kepercayaan klien secara instan.

Kabar baiknya: jika kamu sudah punya hosting, **email bisnis gratis** sudah termasuk di dalamnya. Tidak perlu bayar extra.

## Manfaat Email Bisnis dengan Domain Sendiri

- **Kesan profesional** — klien lebih percaya pada `info@bisnis.com` daripada `bisnisanda123@gmail.com`
- **Branding yang konsisten** — setiap email yang dikirim mempromosikan nama domain kamu
- **Mudah diingat** — lebih mudah dari email acak
- **Kontrol penuh** — tidak bergantung pada layanan email pihak ketiga
- **Gratis di semua paket hosting** — cPanel sudah menyertakan email hosting tanpa biaya tambahan

## Cara Buat Email Bisnis di cPanel

### Langkah 1: Login ke cPanel

1. Buka `namadomain.com/cpanel` di browser
2. Masukkan username dan password cPanel
3. Klik **"Log in"**

### Langkah 2: Buka Menu Email Accounts

Di dashboard cPanel, cari bagian **"Email"** dan klik **"Email Accounts"**.

### Langkah 3: Buat Akun Email Baru

Klik tombol **"Create"** atau **"+ Create"**.

Isi formulir yang muncul:

**Domain:** Pilih domain yang ingin digunakan dari dropdown.

**Username:** Bagian sebelum `@`. Contoh:
- `info` → `info@namadomain.com`
- `halo` → `halo@namadomain.com`
- `nama` → `nama@namadomain.com`

Tips penamaan email bisnis yang umum:
- `info@` — untuk informasi umum
- `hello@` atau `halo@` — customer service
- `support@` atau `bantuan@` — dukungan teknis
- `sales@` atau `penjualan@` — tim penjualan
- `nama@` — email personal staf/pendiri

**Password:** Gunakan password kuat — minimal 12 karakter dengan kombinasi huruf besar, kecil, angka, dan simbol.

**Storage Space:** Atur quota penyimpanan email. Default 250MB sudah cukup untuk awal. Kamu bisa atur ke "Unlimited" jika paket hosting memungkinkan.

### Langkah 4: Klik Create

Klik **"Create"** → akun email baru langsung aktif!

### Langkah 5: Cek Email via Webmail

1. Kembali ke daftar Email Accounts di cPanel
2. Temukan email yang baru dibuat
3. Klik **"Check Email"** → pilih aplikasi webmail (Roundcube direkomendasikan)
4. Kamu sekarang bisa baca dan kirim email dari browser

## Cara Akses Email Bisnis di Gmail (GRATIS)

Cara paling praktis adalah menghubungkan email bisnis ke Gmail sehingga kamu bisa membaca dan membalas email bisnis dari antarmuka Gmail yang familiar.

### Setting IMAP di Gmail

**Step 1: Ambil setting SMTP/IMAP dari cPanel**

Di cPanel → Email Accounts → klik ikon pengaturan email kamu → pilih **"Set Up Mail Client"**. Catat:
- Incoming Server (IMAP): biasanya `mail.namadomain.com`, port 993 (SSL)
- Outgoing Server (SMTP): biasanya `mail.namadomain.com`, port 465 (SSL) atau 587 (TLS)

**Step 2: Tambahkan di Gmail**

1. Buka Gmail → klik ikon ⚙️ → **"See all settings"**
2. Masuk ke tab **"Accounts and Import"**
3. Di bagian **"Check mail from other accounts"**, klik **"Add a mail account"**
4. Masukkan alamat email bisnis kamu → klik **"Next"**
5. Pilih **"Import emails from my other account (POP3)"** → klik **"Next"**
6. Isi:
   - **Username:** alamat email penuh (misal: `info@tokobaju.com`)
   - **Password:** password email yang tadi dibuat
   - **POP Server:** `mail.namadomain.com`
   - **Port:** 995 (SSL) atau 110
   - Centang **"Always use a secure connection (SSL)"**
7. Klik **"Add Account"**

**Step 3: Atur untuk Bisa Kirim juga via Gmail**

1. Masih di tab Accounts and Import
2. Di bagian **"Send mail as"**, klik **"Add another email address"**
3. Masukkan nama dan alamat email bisnis → klik **"Next Step"**
4. Isi setting SMTP server seperti yang dicatat dari cPanel
5. Verifikasi dengan klik link di email konfirmasi

Setelah selesai, saat compose email di Gmail, kamu bisa memilih "From:" menggunakan email bisnis atau email Gmail biasa.

## Cara Akses Email di Smartphone

### Android (Gmail App)

1. Buka Gmail → tap ikon profil di pojok kanan atas
2. Pilih **"Add another account"**
3. Pilih **"Other"** (bukan Google)
4. Masukkan alamat email bisnis → masukkan password
5. Pilih **"IMAP"** → isi server settings sesuai yang diberikan cPanel
6. Selesai — email bisnis akan muncul di inbox Gmail

### iOS (iPhone/iPad)

1. Buka **Settings → Mail → Accounts → Add Account**
2. Pilih **"Other"**
3. Pilih **"Add Mail Account"**
4. Isi nama, email, password, dan deskripsi
5. Masukkan server settings IMAP dan SMTP dari cPanel
6. Tap **"Next"** → **"Save"**

## Email Bisnis di Niagahoster dan Hostinger

### Di Niagahoster

Niagahoster menggunakan cPanel standar, prosesnya persis seperti panduan di atas. Selain itu:

1. Login ke Member Area Niagahoster
2. Pilih **"Email"** → **"Kelola Email"**
3. Buat dan kelola email lebih mudah dari antarmuka Member Area

### Di Hostinger

Hostinger menggunakan hPanel, sedikit berbeda:

1. Login ke **hPanel**
2. Klik **"Emails"** → **"Email Accounts"**
3. Klik **"Create Email Account"**
4. Isi username, pilih domain, set password
5. Klik **"Create"**

Untuk webmail: `webmail.namadomain.com` atau gunakan link dari hPanel.

## Berapa Email Bisnis yang Bisa Dibuat?

Tergantung paket hosting:
- Paket dasar: biasanya 5–25 akun email
- Paket menengah: 100–500 akun email
- Paket premium: unlimited akun email

Untuk UMKM, 5–10 akun email biasanya lebih dari cukup:
- `info@` (umum)
- `halo@` (customer service)
- `nama-pendiri@` (personal)
- `order@` (pemesanan)
- `invoice@` (keuangan)

## Tips Email Bisnis yang Profesional

**1. Gunakan format penamaan yang konsisten**
Untuk tim, gunakan format yang sama: `namadepan@domain.com` atau `inisial@domain.com` untuk semua staf.

**2. Setup auto-reply**
Saat kamu sedang tidak bisa membalas, setup auto-reply yang memberitahu pengirim bahwa pesannya diterima dan kapan kamu akan membalas.

**3. Gunakan email signature**
Tambahkan signature berisi nama, jabatan, nomor telepon, dan website. Ini membantu penerima menghubungi kamu dengan cara lain jika diperlukan.

**4. Backup email penting**
Simpan email penting secara lokal atau ekspor ke file `.mbox` secara berkala. Jika ganti hosting, email di server mungkin tidak otomatis ikut pindah.

**5. Jangan pakai email bisnis untuk keperluan personal**
Pisahkan email kerja dan personal untuk menjaga profesionalisme dan keamanan.

## FAQ: Email Bisnis dengan Domain Sendiri

**Apakah email bisnis dari hosting bisa diakses offline?**

Jika menggunakan aplikasi email client (Gmail, Outlook, Thunderbird, Apple Mail) dengan setting IMAP, email yang sudah terunduh bisa dibaca offline.

**Apa perbedaan POP3 dan IMAP?**

**POP3**: email diunduh ke perangkat dan dihapus dari server. Cocok jika hanya akses dari satu perangkat.
**IMAP**: email sinkron antara server dan semua perangkat. Lebih disarankan jika akses dari banyak perangkat.

**Apakah email bisnis dari hosting sama dengan Google Workspace?**

Tidak. Email dari hosting di-host di server hosting kamu (dengan kapasitas yang bergantung paket). Google Workspace adalah layanan email profesional dari Google dengan storage besar, fitur kolaborasi, dan keandalan Google. Google Workspace berbayar sekitar $6/user/bulan.

**Bisakah ganti domain email nanti?**

Secara teknis bisa, tapi prosesnya rumit — harus buat akun email baru, pindah semua kontak, update di semua layanan yang terdaftar. Pilih domain yang akan kamu pakai jangka panjang sejak awal.

**Email hosting vs email dari hosting — apa bedanya?**

"Email hosting" adalah layanan yang fokus pada email (seperti Zoho Mail, Google Workspace, Microsoft 365). "Email dari hosting" adalah fitur email yang sudah termasuk dalam paket web hosting. Untuk awal, email dari hosting sudah cukup. Upgrade ke email hosting khusus jika butuh fitur lebih canggih.

## Kesimpulan

Membuat email bisnis dengan domain sendiri lewat cPanel adalah proses yang mudah dan gratis — asalkan sudah punya hosting. Dengan email seperti `halo@bisnis.com`, kesan profesionalisme kamu langsung meningkat di mata klien dan mitra bisnis.

Langkah selanjutnya: buat email, hubungkan ke Gmail, dan mulai gunakan untuk semua komunikasi bisnis.

Belum punya hosting? [Niagahoster](/go/niagahoster) dan [Hostinger](/go/hostinger) menyediakan email hosting gratis di semua paket, plus domain gratis untuk tahun pertama.
