---
title: "Subdomain Adalah: Pengertian, Fungsi, dan Cara Membuatnya (2025)"
description: "Penjelasan lengkap apa itu subdomain, bedanya dengan domain utama, kapan menggunakannya, dan cara membuat subdomain di cPanel hosting Indonesia."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "panduan"
tags: ["subdomain adalah", "apa itu subdomain", "cara membuat subdomain", "subdomain cpanel"]
keyword: "subdomain adalah"
volume: 2400
kd: 20
schema: "Article"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
---

**Subdomain** adalah bagian dari domain utama yang diletakkan di depan nama domain, dipisahkan dengan titik. Jika domain utama kamu adalah `namadomain.com`, maka subdomain bisa berupa `blog.namadomain.com`, `toko.namadomain.com`, atau `mail.namadomain.com`.

## Struktur Subdomain

Struktur URL standar:
```
[subdomain].[domain].[TLD]
blog      .namadomain .com
toko      .namadomain .com
mail      .namadomain .com
```

Beberapa bagian URL:
- **TLD (Top Level Domain):** `.com`, `.id`, `.net`
- **Domain:** `namadomain`
- **Subdomain:** bagian sebelum domain (opsional)

Subdomain sendiri juga bisa bertingkat:
- `dev.blog.namadomain.com` — subdomain dari subdomain

## Subdomain vs Subdirektori

Sering ada kebingungan antara subdomain dan subdirektori:

| | Subdomain | Subdirektori |
|---|---|---|
| **Contoh** | `blog.namadomain.com` | `namadomain.com/blog` |
| **Lokasi** | Server bisa berbeda | Di dalam folder domain utama |
| **Pengaturan DNS** | Perlu DNS record terpisah | Tidak perlu |
| **Dianggap Google** | Website terpisah | Bagian dari website utama |
| **Cocok untuk** | Proyek berbeda, bahasa lain | Bagian yang terhubung erat |

## Fungsi dan Penggunaan Subdomain

### 1. Memisahkan Bagian Website yang Berbeda

Subdomain memungkinkan setiap bagian memiliki konten, tampilan, dan bahkan CMS yang berbeda:
- `toko.namadomain.com` — WooCommerce untuk toko online
- `blog.namadomain.com` — WordPress khusus blog
- `forum.namadomain.com` — platform forum

### 2. Environment Development dan Testing
- `dev.namadomain.com` — environment pengembangan
- `staging.namadomain.com` — environment testing sebelum production
- `test.namadomain.com` — untuk QA testing

### 3. Layanan Email
- `mail.namadomain.com` — akses webmail
- Secara teknis, email server menggunakan subdomain khusus

### 4. Versi Bahasa atau Regional
- `en.namadomain.com` — versi bahasa Inggris
- `id.namadomain.com` — versi bahasa Indonesia
- `sg.namadomain.com` — versi Singapura

### 5. Aplikasi Terpisah
- `app.namadomain.com` — aplikasi web
- `api.namadomain.com` — API endpoint
- `admin.namadomain.com` — panel admin

### 6. CDN dan Static Assets
- `cdn.namadomain.com` — server untuk file statis
- `static.namadomain.com` — gambar dan asset

## Contoh Subdomain di Dunia Nyata

- `maps.google.com` — Google Maps (subdomain dari google.com)
- `mail.google.com` — Gmail
- `docs.google.com` — Google Docs
- `en.wikipedia.org` — Wikipedia versi Inggris
- `id.wikipedia.org` — Wikipedia versi Indonesia

## Cara Membuat Subdomain di cPanel

Hosting Indonesia umumnya menggunakan cPanel untuk pengelolaan. Begini cara membuat subdomain:

### Langkah 1: Login ke cPanel

1. Buka `namadomain.com/cpanel` atau link cPanel dari email hosting
2. Masukkan username dan password cPanel

### Langkah 2: Buka Menu Subdomains

1. Di cPanel, cari bagian **Domains**
2. Klik **Subdomains**

### Langkah 3: Buat Subdomain Baru

1. Di kolom **Subdomain**, ketik nama subdomain (contoh: `blog`)
2. Di **Domain**, pilih domain utama dari dropdown
3. **Document Root** akan otomatis terisi: `public_html/blog`
   - Kamu bisa ubah path ini jika ingin folder berbeda
4. Klik **Create**

Subdomain `blog.namadomain.com` sekarang aktif dan mengarah ke folder `public_html/blog`.

### Langkah 4: Install CMS atau Upload File

Setelah subdomain dibuat:
- Upload file website ke folder document root yang ditentukan
- Atau install WordPress/CMS via Softaculous di subdomain tersebut

## Cara Membuat Subdomain di hPanel Hostinger

Jika hosting di Hostinger:

1. Login ke **hPanel** (hpanel.hostinger.com)
2. Masuk ke **Hosting → Kelola**
3. Klik **Subdomains** di sidebar kiri
4. Klik **Create a New Subdomain**
5. Isi nama subdomain dan pilih domain utama
6. Klik **Create**

## Pengaruh Subdomain terhadap SEO

Google memperlakukan subdomain sebagai **entitas terpisah** dari domain utama:

- Subdomain **tidak otomatis mewarisi** otoritas SEO domain utama
- Subdomain perlu dioptimasi SEO-nya sendiri
- Backlink ke `blog.namadomain.com` tidak langsung membantu SEO `namadomain.com`

**Implikasi praktis:**
- Untuk blog yang ingin mendukung SEO website utama → gunakan subdirektori (`namadomain.com/blog`)
- Untuk proyek benar-benar terpisah atau versi bahasa lain → subdomain lebih tepat

## SSL untuk Subdomain

SSL untuk domain utama **tidak otomatis** mencakup subdomain. Ada dua opsi:

### Wildcard SSL
SSL yang mencakup semua subdomain dari domain utama:
- Format: `*.namadomain.com`
- Mencakup: `blog.namadomain.com`, `toko.namadomain.com`, dll.
- Biasanya berbayar, tapi Let's Encrypt juga menerbitkan wildcard

### SSL Terpisah per Subdomain
Pasang SSL terpisah untuk setiap subdomain:
- Di cPanel → SSL/TLS → Manage SSL → pilih subdomain → Install
- Let's Encrypt bisa digunakan gratis untuk setiap subdomain secara terpisah

## FAQ: Subdomain

**Berapa banyak subdomain yang bisa dibuat?**
Secara teknis tidak ada batasan — kamu bisa membuat puluhan subdomain. Yang membatasi adalah kuota hosting (storage, bandwidth) dan kemampuan DNS server.

**Apakah subdomain butuh biaya tambahan?**
Tidak. Subdomain adalah fitur gratis dari hosting. Tidak ada biaya registrasi domain tambahan karena subdomain menggunakan domain utama yang sudah kamu miliki.

**Apakah bisa mengarahkan subdomain ke server/hosting berbeda?**
Bisa. Kamu bisa membuat DNS record (A record atau CNAME) untuk subdomain yang mengarah ke IP atau server berbeda dari domain utama.

**Bagaimana cara menghapus subdomain?**
Di cPanel → Subdomains → temukan subdomain yang ingin dihapus → klik Remove. Pastikan tidak ada data penting di folder document root sebelum menghapus.

## Kesimpulan

Subdomain adalah alat yang berguna untuk mengorganisasi website yang kompleks, memisahkan lingkungan development dari production, atau membuat bagian website yang benar-benar independen.

Untuk pengguna yang baru mulai, subdomain sering digunakan untuk staging (testing) sebelum perubahan dipush ke website utama.

Butuh hosting yang mudah mengelola subdomain? [Niagahoster](/go/niagahoster) dengan cPanel standar memudahkan pembuatan dan pengelolaan subdomain kapanpun dibutuhkan.
