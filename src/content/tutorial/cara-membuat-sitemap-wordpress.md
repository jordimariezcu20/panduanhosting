---
title: "Cara Membuat Sitemap XML di WordPress untuk SEO (2025)"
description: "Tutorial cara membuat dan submit sitemap XML WordPress ke Google Search Console. Panduan menggunakan RankMath dan Yoast SEO untuk generate sitemap otomatis."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["cara membuat sitemap wordpress", "sitemap xml wordpress", "submit sitemap google", "sitemap seo"]
keyword: "cara membuat sitemap wordpress"
volume: 1300
kd: 20
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
---

Sitemap XML adalah file yang memberitahu mesin pencari tentang semua halaman di website kamu — membantu Google menemukan dan mengindeks konten lebih cepat. Artikel ini menjelaskan cara membuat sitemap di WordPress dan mengirimkannya ke Google.

## Apa Itu Sitemap XML?

Sitemap XML adalah file dengan format XML yang berisi daftar URL semua halaman, postingan, gambar, dan konten lain di website kamu. File ini bukan untuk pengunjung manusia — tapi untuk **crawlers** (robot mesin pencari seperti Googlebot).

**Contoh isi sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://namadomain.com/</loc>
    <lastmod>2025-05-23</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://namadomain.com/tentang/</loc>
    <lastmod>2025-05-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Mengapa Sitemap Penting untuk SEO?

**1. Mempercepat indexing konten baru**
Ketika kamu mempublish artikel baru, Google perlu menemukannya dulu sebelum mengindeks. Sitemap memberitahu Google secara langsung: "Hei, ada halaman baru di sini."

**2. Memastikan semua halaman terindeks**
Website dengan banyak halaman atau halaman yang tidak punya banyak internal link — sitemap memastikan semuanya diketahui Google.

**3. Memberikan metadata tambahan**
Sitemap bisa menyertakan informasi: kapan halaman terakhir diupdate, seberapa sering berubah, dan prioritas relatif antar halaman.

**4. Wajib untuk website besar**
Website dengan ribuan halaman sangat butuh sitemap agar semua konten terindeks dengan efisien.

## Apakah WordPress Sudah Punya Sitemap Bawaan?

Ya — sejak WordPress 5.5, ada sitemap basic bawaan yang bisa diakses di:
`namadomain.com/wp-sitemap.xml`

Tapi sitemap bawaan WordPress terbatas — tidak bisa dikonfigurasi dan tidak termasuk beberapa jenis konten. Plugin SEO seperti RankMath atau Yoast memberikan sitemap yang lebih lengkap dan fleksibel.

## Cara Membuat Sitemap dengan RankMath (Direkomendasikan)

**RankMath** adalah plugin SEO yang sangat populer dan memberikan sitemap XML yang komprehensif.

### Langkah 1: Install dan Aktifkan RankMath

1. Dashboard WordPress → **Plugin → Tambah Baru**
2. Cari "**RankMath SEO**"
3. Install → Aktifkan
4. Ikuti Setup Wizard

### Langkah 2: Aktifkan Sitemap di RankMath

1. Masuk ke **RankMath → General Settings**
2. Klik **Sitemap** di sidebar kiri
3. Pastikan toggle **Sitemap** dalam posisi **ON**

### Langkah 3: Konfigurasi Sitemap

Di halaman Sitemap RankMath:

**Include/Exclude Content:**
- Centang konten yang ingin disertakan: Posts, Pages, Categories, Tags, dll.
- Hapus centang untuk konten yang tidak ingin diindeks (misalnya: halaman tag yang banyak)

**Images in Sitemap:**
- Aktifkan untuk menyertakan gambar dalam sitemap — membantu Google Images

**Sitemap URL Count:**
- Jumlah URL per file sitemap (default 200 sudah baik)

### Langkah 4: Cek Sitemap

URL sitemap RankMath: `namadomain.com/sitemap_index.xml`

Buka URL ini — kamu akan melihat daftar sitemap yang lebih spesifik:
- `namadomain.com/post-sitemap.xml` — semua postingan
- `namadomain.com/page-sitemap.xml` — semua halaman
- `namadomain.com/category-sitemap.xml` — semua kategori

## Cara Membuat Sitemap dengan Yoast SEO

Jika menggunakan **Yoast SEO**:

### Langkah 1: Aktifkan Sitemap di Yoast

1. Dashboard → **SEO → General** (menu Yoast)
2. Klik tab **Features**
3. Pastikan **XML Sitemaps** dalam posisi **On**

### Langkah 2: Konfigurasi Sitemap

1. Di menu Yoast → pilih tipe konten (Posts, Pages, dll.)
2. Atur mana yang boleh muncul di sitemap vs tidak

### Langkah 3: Akses Sitemap

URL sitemap Yoast: `namadomain.com/sitemap_index.xml`

## Submit Sitemap ke Google Search Console

Membuat sitemap saja tidak cukup — kamu perlu memberi tahu Google di mana menemukannya.

### Langkah 1: Buka Google Search Console

1. Akses **search.google.com/search-console**
2. Login dengan akun Google
3. Pilih property domain websitemu (daftarkan dulu jika belum)

### Langkah 2: Navigasi ke Sitemap

1. Di sidebar kiri, klik **Sitemap** (di bawah bagian "Indexing")

### Langkah 3: Submit Sitemap

1. Di kolom "Add a new sitemap", masukkan URL sitemap:
   - Untuk RankMath: `sitemap_index.xml`
   - Untuk Yoast: `sitemap_index.xml`
   - Untuk WordPress bawaan: `wp-sitemap.xml`
2. Klik **Submit**

### Langkah 4: Cek Status

Setelah submit, Google akan mulai memproses sitemap. Status akan muncul di tabel:
- **Success** — sitemap berhasil diproses
- **Couldn't fetch** — ada masalah dengan URL sitemap
- Kolom "Discovered URLs" menunjukkan berapa URL yang ditemukan

## Memantau Sitemap di Google Search Console

Setelah submit, pantau secara berkala:

**Yang perlu dicek:**
- **Submitted pages vs Indexed pages** — idealnya angkanya mirip. Jika banyak URL yang submitted tapi tidak indexed, investigasi kenapa Google tidak mengindeks halaman tersebut.
- **Errors** — error di sitemap perlu diperbaiki
- **Excluded pages** — Google menampilkan alasan mengapa halaman tertentu tidak diindeks

## Sitemap untuk Berbagai Jenis Konten

### Sitemap Gambar
RankMath dan Yoast bisa menyertakan gambar dalam sitemap — berguna untuk performa di Google Images.

### Sitemap Video
Jika website punya video, sitemap khusus video membantu Google Video.

### Sitemap Berita (News Sitemap)
Untuk website berita yang ingin muncul di Google News — format khusus dengan metadata tambahan.

### Sitemap untuk Multilingual
Jika menggunakan WPML atau Polylang untuk website multibahasa, sitemap perlu dikonfigurasi untuk menyertakan semua versi bahasa dengan hreflang yang benar.

## Troubleshooting Sitemap

### "Sitemap tidak bisa diakses" (404 Error)
- Cek apakah plugin SEO sudah aktif
- Coba flush/reset permalink: **Pengaturan → Tautan Permanen → Simpan**
- Cek apakah ada plugin keamanan yang memblokir akses ke sitemap

### "Sitemap berisi halaman yang tidak diinginkan"
- Di RankMath/Yoast, exclude konten yang tidak perlu diindeks
- Tandai halaman individual sebagai "noindex" jika tidak ingin di sitemap

### "Submitted sitemap tapi URL tidak terindeks"
- Indexing membutuhkan waktu — tunggu 1–4 minggu
- Periksa apakah halaman bisa diakses publik (bukan password-protected)
- Cek Coverage report di Search Console untuk melihat alasan tidak terindeks

## FAQ: Sitemap WordPress

**Berapa sering Google mengunjungi sitemap?**
Google Crawls sitemap secara berkala — frekuensinya tergantung update website. Website yang sering update akan lebih sering dikunjungi.

**Apakah perlu sitemap untuk website kecil?**
Untuk website dengan < 50 halaman yang saling terhubung dengan baik via internal link, sitemap kurang kritis. Tapi tidak ada ruginya memiliki sitemap — Google tetap menggunakannya.

**Apakah sitemap menjamin halaman diindeks?**
Tidak. Sitemap hanya memberitahu Google tentang keberadaan halaman. Google tetap memutuskan sendiri apakah mengindeks halaman berdasarkan kualitas konten dan faktor lain.

**Apakah bisa punya lebih dari satu sitemap?**
Ya. Sitemap besar bisa dipecah menjadi beberapa file (sitemap index) — yang dilakukan otomatis oleh plugin seperti RankMath saat URL melebihi batas.

## Kesimpulan

Sitemap XML adalah komponen SEO yang mudah disetup tapi memberikan dampak nyata — terutama untuk website yang sering mempublish konten baru. Dengan plugin RankMath atau Yoast SEO, sitemap dibuat dan diperbarui otomatis setiap kali kamu mempublish konten.

Langkah selanjutnya setelah setup sitemap: submit ke Google Search Console dan pantau indexing rate secara berkala.

Butuh hosting WordPress yang dioptimalkan untuk SEO? [Niagahoster](/go/niagahoster) dengan LiteSpeed memberikan kecepatan yang dibutuhkan untuk performa SEO terbaik.
