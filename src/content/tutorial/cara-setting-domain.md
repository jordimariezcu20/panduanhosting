---
title: "Cara Setting Domain ke Hosting: Panduan DNS Lengkap (2025)"
description: "Tutorial cara mengarahkan domain ke hosting dengan update nameserver atau DNS record. Panduan lengkap setting domain dari Namecheap, GoDaddy, Domainesia ke hosting manapun."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["cara setting domain", "pointing domain ke hosting", "nameserver", "dns record", "cara arahkan domain"]
keyword: "cara setting domain"
volume: 1900
kd: 25
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
  - name: "Hostinger"
    url: "/go/hostinger"
    cta: "Lihat Harga"
---

Membeli domain dan hosting dari tempat berbeda adalah hal yang umum. Tapi untuk website bisa berjalan, domain harus "diarahkan" ke server hosting. Artikel ini menjelaskan cara setting domain ke hosting melalui dua metode: update nameserver dan update DNS record.

## Domain vs Hosting: Apa Bedanya?

Sebelum masuk ke teknis, pahami dulu perbedaannya:

- **Domain** — alamat website kamu (contoh: `tokobaju.com`). Didaftarkan di registrar domain.
- **Hosting** — "tempat tinggal" file website. Di sinilah konten website disimpan.

Domain dan hosting bisa dibeli di tempat yang sama (lebih mudah, otomatis terhubung) atau di tempat berbeda (butuh setting manual).

## Dua Cara Menghubungkan Domain ke Hosting

### Metode 1: Ganti Nameserver (Direkomendasikan)
Mengalihkan semua pengelolaan DNS ke hosting baru. Lebih mudah karena selanjutnya semua pengaturan dilakukan di cPanel hosting.

**Kapan digunakan:** Ketika kamu ingin semua email, subdomain, dan DNS dikelola oleh hosting baru.

### Metode 2: Update DNS Record (A Record)
Hanya mengarahkan domain ke IP hosting, tanpa memindahkan pengelolaan DNS.

**Kapan digunakan:** Ketika kamu ingin mempertahankan setting DNS lain (email di Google Workspace, CDN, dll.) tapi hosting websitenya pindah.

## Langkah Awal: Temukan IP dan Nameserver Hosting Baru

Sebelum setting apapun, cari dulu informasi dari hosting baru:

**Di cPanel Niagahoster / cPanel biasa:**
1. Login ke cPanel
2. Scroll ke bagian **Server Information** atau cek email welcome
3. Catat **IP Address server** dan **Nameserver**

**Di hPanel Hostinger:**
1. Login ke hPanel
2. Masuk ke **Hosting → Kelola**
3. Klik **DNS / Nameservers** di sidebar
4. Catat nameserver yang tertera

Informasi ini biasanya juga ada di email konfirmasi aktivasi hosting.

## Cara Setting via Ganti Nameserver

### Step 1: Login ke Registrar Domain

Login ke tempat kamu mendaftarkan domain:
- **Niagahoster**: member.niagahoster.co.id
- **Domainesia**: member.domainesia.com
- **GoDaddy**: godaddy.com
- **Namecheap**: namecheap.com
- **Dewaweb**: dewaweb.com

### Step 2: Temukan Pengaturan Domain

1. Cari menu **Domain** atau **My Domains**
2. Klik domain yang ingin diarahkan
3. Cari opsi **Nameserver**, **DNS Settings**, atau **Manage DNS**

### Step 3: Ganti Nameserver

**Contoh nameserver dari hosting umum:**

**Niagahoster:**
```
ns1.niagahoster.com
ns2.niagahoster.com
```

**Hostinger:**
```
ns1.dns-parking.com
ns2.dns-parking.com
```

**Dewaweb:**
```
ns1.dewaweb.com
ns2.dewaweb.com
```

Langkah:
1. Pilih opsi **"Custom Nameservers"** atau **"Use Custom DNS"**
2. Hapus nameserver lama
3. Masukkan nameserver hosting baru (ns1 dan ns2)
4. Simpan perubahan

### Step 4: Tunggu Propagasi DNS

Setelah nameserver diubah, butuh waktu propagasi:
- **Minimum:** 15–30 menit
- **Rata-rata:** 2–8 jam
- **Maksimum:** 48 jam (sangat jarang)

Selama propagasi, beberapa pengunjung mungkin masih melihat website lama atau halaman error. Ini normal.

**Cek status propagasi:**
- Gunakan [whatsmydns.net](https://www.whatsmydns.net) untuk cek apakah propagasi sudah merata
- Atau ping domain dari Command Prompt: `ping namadomain.com` — jika IP-nya sudah IP hosting baru, propagasi berhasil

## Cara Setting via DNS Record (A Record)

Metode ini lebih spesifik — hanya mengarahkan domain utama ke hosting, tanpa memindahkan nameserver.

### Step 1: Temukan IP Hosting

Dapatkan IP Address server hosting dari:
- Email konfirmasi hosting
- Dashboard cPanel → **Server Information**
- Hubungi support hosting

### Step 2: Edit DNS Record di Registrar

1. Login ke registrar domain
2. Masuk ke pengaturan DNS domain
3. Cari record dengan **Type: A** dan **Name: @** (atau `namadomain.com`)
4. Edit nilainya: ganti IP lama dengan **IP hosting baru**
5. Simpan

**Contoh tampilan DNS record:**
```
Type    Name    Value              TTL
A       @       103.xxx.xxx.xxx   Auto
A       www     103.xxx.xxx.xxx   Auto
```

Tambahkan record `www` juga (mengarahkan `www.namadomain.com`):
- Type: A
- Name: www
- Value: IP hosting baru

### Step 3: Tunggu Propagasi

Sama seperti nameserver — perlu 1–48 jam, tapi perubahan A Record biasanya lebih cepat propagasinya (1–4 jam).

## Setting Subdomain

Setelah domain utama terhubung, kamu bisa buat subdomain untuk bagian tertentu website:

**Di cPanel (jika nameserver sudah ke hosting):**
1. cPanel → **Subdomains**
2. Isi nama subdomain (contoh: `blog`)
3. Pilih domain utama
4. cPanel otomatis membuat folder `blog.namadomain.com`

**Contoh subdomain umum:**
- `blog.namadomain.com` — blog terpisah
- `toko.namadomain.com` — toko online
- `mail.namadomain.com` — webmail
- `dev.namadomain.com` — environment development

## Setting Email Domain

Jika menggunakan email bisnis dengan domain sendiri (nama@namadomain.com):

**Menggunakan cPanel Hosting:**
1. cPanel → **Email Accounts**
2. Buat email baru dengan domain kamu
3. Email langsung aktif tanpa perlu setting MX record

**Menggunakan Google Workspace:**
Jika ingin email di Gmail tapi dengan domain sendiri:
1. Daftar Google Workspace
2. Dapatkan MX record dari Google
3. Tambahkan MX record di DNS domain atau cPanel

Contoh MX record Google:
```
Type    Priority    Value
MX      1           aspmx.l.google.com
MX      5           alt1.aspmx.l.google.com
MX      10          alt2.aspmx.l.google.com
```

## Setting SSL Setelah Domain Aktif

Setelah domain berhasil diarahkan ke hosting, aktifkan SSL:

**Di cPanel:**
1. cPanel → **SSL/TLS** atau **Let's Encrypt SSL**
2. Pilih domain
3. Klik **Install Certificate**

**Di hPanel Hostinger:**
1. hPanel → **SSL**
2. Klik **Setup** pada domain
3. Pilih **Let's Encrypt** (gratis)

SSL aktif dalam 5–15 menit. Website bisa diakses via `https://`.

## Troubleshooting: Domain Tidak Bisa Diakses

**Domain masih menampilkan halaman lama / halaman hosting lama:**
- Propagasi DNS belum selesai — tunggu 24 jam
- Clear cache browser: Ctrl+Shift+Delete
- Test dari browser lain atau mode incognito

**Website menampilkan error "This site can't be reached":**
- Propagasi belum selesai
- IP/nameserver salah — cek ulang
- WordPress belum terinstall di hosting baru

**SSL tidak aktif setelah domain diarahkan:**
- Tunggu 15–30 menit setelah domain aktif baru install SSL
- Jika tetap gagal, hubungi support hosting

**Email tidak masuk setelah ganti nameserver:**
- Cek MX record — pastikan MX record untuk email sudah dikonfigurasi di hosting baru
- Jika menggunakan Google Workspace, tambahkan MX record Google di DNS

## FAQ: Setting Domain

**Berapa lama propagasi DNS?**
Biasanya 1–24 jam. Dalam kasus tertentu bisa sampai 48 jam. Faktor yang mempengaruhi: TTL (Time to Live) dari DNS record sebelumnya dan DNS resolver yang digunakan.

**Apakah website down saat propagasi?**
Website bisa intermittent (kadang bisa diakses, kadang tidak) selama propagasi. Untuk meminimalkan downtime, setup hosting baru dulu dan test sebelum pindahkan nameserver.

**Bisa tidak pakai domain .id untuk hosting internasional?**
Bisa. Domain .id bisa digunakan dengan hosting di manapun di dunia. Tidak ada batasan.

**Apa bedanya nameserver dan DNS record?**
Nameserver menentukan "siapa yang bertanggung jawab" mengelola DNS domain kamu. DNS record adalah instruksi spesifik dalam pengelolaan itu (seperti A record yang menunjuk ke IP, MX record untuk email, dll.).

## Kesimpulan

Setting domain ke hosting adalah proses satu kali yang perlu dilakukan setiap kali kamu pindah hosting atau menggunakan domain dari tempat berbeda. Metode nameserver lebih mudah untuk pemula karena selanjutnya semua dikelola di cPanel hosting.

Butuh hosting yang mudah dikonfigurasi?
- [Niagahoster](/go/niagahoster) — support bahasa Indonesia untuk bantu setting domain
- [Hostinger](/go/hostinger) — panduan setup DNS tersedia di knowledge base
