---
title: "Cara Daftar dan Pasang Google Analytics 4 di WordPress (2025)"
description: "Tutorial cara daftar Google Analytics 4 dan memasangnya di website WordPress. Panduan lengkap setup GA4, integrasi plugin, dan cara membaca laporan dasar."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["cara daftar google analytics", "pasang google analytics wordpress", "google analytics 4", "GA4 wordpress"]
keyword: "cara daftar google analytics"
volume: 1900
kd: 25
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
---

Google Analytics adalah tools gratis dari Google untuk melacak pengunjung website — dari mana mereka datang, halaman apa yang mereka kunjungi, berapa lama mereka tinggal, dan banyak lagi. Artikel ini memandu cara setup Google Analytics 4 (GA4) dan memasangnya di WordPress.

## Mengapa Perlu Google Analytics?

Tanpa analytics, kamu tidak tahu:
- Berapa pengunjung website setiap hari/minggu/bulan
- Halaman mana yang paling populer
- Dari mana pengunjung datang (Google, media sosial, langsung)
- Perangkat apa yang digunakan (desktop vs mobile)
- Berapa lama pengunjung tinggal di website
- Di halaman mana pengunjung meninggalkan website

Dengan data ini, kamu bisa membuat keputusan berbasis data — konten apa yang perlu ditambah, halaman mana yang perlu diperbaiki, dan mana saluran traffic yang paling efektif.

## GA4 vs Universal Analytics

**Universal Analytics (UA)** adalah versi lama Google Analytics yang **sudah tidak aktif** sejak Juli 2023. Semua website baru wajib menggunakan **Google Analytics 4 (GA4)**.

GA4 memiliki beberapa perbedaan dari UA:
- Model berbasis event (bukan session)
- Reporting yang berbeda
- Integrasi lebih kuat dengan Google Ads
- Privacy-first (tanpa cookies pihak ketiga)

## Bagian 1: Daftar Google Analytics 4

### Langkah 1: Akses Google Analytics

1. Buka **analytics.google.com**
2. Login dengan akun Google kamu
3. Jika pertama kali, klik **Mulai Mengukur** atau **Start Measuring**

### Langkah 2: Buat Akun

Jika belum punya akun Google Analytics:
1. Klik **Buat Akun**
2. Isi **Nama Akun** — ini untuk identifikasi internal (misal: "Website Saya" atau nama bisnis)
3. Centang pengaturan berbagi data sesuai preferensi
4. Klik **Berikutnya**

### Langkah 3: Buat Property

Property adalah representasi website atau app kamu di Analytics:
1. Isi **Nama Property** — nama website kamu
2. Pilih **Zona Waktu** — pilih Indonesia/Jakarta (UTC+7)
3. Pilih **Mata Uang** — Rupiah Indonesia (IDR)
4. Klik **Berikutnya**

### Langkah 4: Informasi Bisnis

Isi informasi tentang bisnis:
- Industri (pilih yang paling sesuai)
- Ukuran bisnis

### Langkah 5: Tujuan Bisnis

Pilih tujuan utama penggunaan Analytics:
- Menghasilkan leads
- Mendorong penjualan online
- Meningkatkan brand awareness
- dll.

### Langkah 6: Buat Data Stream

Setelah property dibuat, setup data stream (sumber data):
1. Pilih **Web** (untuk website)
2. Isi **URL Website** — masukkan URL lengkap tanpa `https://`
3. Isi **Nama Stream** — nama untuk stream ini
4. Klik **Buat Stream**

### Langkah 7: Catat Measurement ID

Setelah stream dibuat, kamu mendapat:
- **Measurement ID** — format `G-XXXXXXXXXX`
- **Global Site Tag (gtag.js)** — kode yang perlu dipasang di website

Catat Measurement ID karena dibutuhkan untuk setup di WordPress.

## Bagian 2: Pasang Google Analytics di WordPress

Ada beberapa cara memasang GA4 di WordPress:

### Cara 1: Via Plugin (Termudah)

**Menggunakan plugin Google Site Kit:**
1. Dashboard WordPress → Plugin → Tambah Baru
2. Cari "Google Site Kit" → Install → Aktifkan
3. Klik **Start Setup** di banner Site Kit
4. Ikuti wizard: Sign in with Google → pilih akun Analytics
5. Pilih property GA4 yang baru dibuat
6. Klik **Configure Analytics**

Site Kit otomatis memasang kode tracking dan menawarkan laporan dasar langsung di WordPress dashboard.

**Menggunakan plugin MonsterInsights:**
1. Install plugin **MonsterInsights - Google Analytics Dashboard**
2. Ikuti wizard setup → Connect to Google Analytics
3. Pilih property GA4
4. Selesai

### Cara 2: Via RankMath atau Yoast SEO

Jika sudah pakai plugin SEO:

**RankMath:**
1. Dashboard → RankMath → General Settings
2. Klik **Webmaster Tools**
3. Di bagian **Google Analytics**, masukkan Measurement ID (`G-XXXXXXXXXX`)
4. Simpan

**Yoast SEO:**
Yoast tidak lagi menyertakan Google Analytics — gunakan plugin terpisah.

### Cara 3: Langsung di Header (Manual)

Untuk kontrol penuh tanpa plugin tambahan:

**Via functions.php:**
1. Dashboard → Tampilan → Editor Tema (atau Tema File Editor)
2. Pilih file `functions.php`
3. Tambahkan di akhir file:

```php
function add_google_analytics() {
?>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
<?php
}
add_action('wp_head', 'add_google_analytics');
```

Ganti `G-XXXXXXXXXX` dengan Measurement ID kamu.

**⚠️ Catatan:** Edit file tema bisa merusak website jika ada kesalahan. Backup dulu atau gunakan child theme. Metode plugin lebih aman untuk pemula.

### Cara 4: Via Google Tag Manager

Untuk pengguna advanced yang ingin fleksibilitas tracking lebih:
1. Buat akun di tagmanager.google.com
2. Install plugin **GTM4WP** di WordPress
3. Masukkan GTM Container ID
4. Di Google Tag Manager, buat Tag GA4 Configuration
5. Publish container

## Verifikasi: Apakah Analytics Terpasang?

Setelah setup, verifikasi bahwa kode sudah terpasang dan berjalan:

**Cara 1: Realtime Report**
1. Buka website kamu di tab browser lain
2. Kembali ke Google Analytics → **Reports → Realtime**
3. Kamu seharusnya muncul sebagai pengunjung aktif

**Cara 2: Google Tag Assistant**
1. Install ekstensi Chrome **Tag Assistant Legacy** atau gunakan Tag Assistant di tagassistant.google.com
2. Buka website kamu → cek apakah GA4 tag terdeteksi

**Cara 3: Inspect di Browser**
1. Buka website → Klik kanan → Inspect → Network tab
2. Reload halaman → cari request ke `google-analytics.com` atau `googletagmanager.com`

## Laporan Dasar GA4 yang Perlu Dipahami

Setelah data mulai terkumpul (butuh 24-48 jam), pelajari laporan ini:

### Reports → Realtime
Traffic pengunjung yang sedang aktif di website saat ini.

### Reports → Acquisition
**Dari mana pengunjung datang:**
- **Organic Search** — dari Google/Bing
- **Direct** — ketik URL langsung
- **Referral** — dari link di website lain
- **Social** — dari media sosial

### Reports → Engagement → Pages and Screens
**Halaman mana yang paling banyak dikunjungi** — berguna untuk tahu konten mana yang populer.

### Reports → Engagement → Overview
- **Average Engagement Time** — berapa lama rata-rata pengunjung aktif
- **Engaged Sessions** — sesi dengan interaksi bermakna

## Menghubungkan GA4 dengan Google Search Console

Untuk data SEO yang lebih lengkap:

1. Di GA4 → Admin (ikon gear)
2. Klik **Search Console Links** di kolom property
3. Klik **Link**
4. Pilih Search Console property kamu
5. Pilih data stream web → Confirm

Setelah terhubung, data kata kunci dari Search Console muncul di GA4 di **Acquisition → Search Console**.

## FAQ: Google Analytics

**Berapa lama data mulai muncul setelah setup?**
Data realtime muncul segera. Data dalam laporan reguler biasanya butuh 24-48 jam untuk tersedia.

**Apakah GA4 gratis?**
Ya. Google Analytics (GA4) sepenuhnya gratis. Ada versi berbayar (Google Analytics 360) untuk enterprise, tapi GA4 standar lebih dari cukup untuk kebanyakan website.

**Apakah memasang Google Analytics memperlambat website?**
Sedikit — kode tracking harus dimuat. Gunakan atribut `async` (sudah bawaan pada kode gtag.js resmi) agar loading analytics tidak memblokir render halaman.

**Apakah perlu mention Google Analytics di kebijakan privasi?**
Ya. Jika mengumpulkan data pengunjung, kamu perlu menyebutkan tools analytics yang digunakan di kebijakan privasi website. Google Analytics mengumpulkan data anonim tentang perilaku pengunjung.

## Kesimpulan

Google Analytics adalah tools gratis yang wajib ada di setiap website serius. Dengan GA4, kamu mendapat insight berharga tentang pengunjung yang membantu mengembangkan konten dan strategi website secara terukur.

Setup hanya butuh waktu 15-30 menit — dan data yang didapat sangat berharga untuk jangka panjang.

Butuh hosting WordPress yang cepat dan kompatibel dengan semua tools Google? [Niagahoster](/go/niagahoster) adalah pilihan solid untuk website Indonesia.
