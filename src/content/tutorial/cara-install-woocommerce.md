---
title: "Cara Install WooCommerce dan Setting Toko Online (2025)"
description: "Tutorial cara install dan setting WooCommerce di WordPress dari nol. Setup produk, pembayaran Midtrans/Xendit, ongkos kirim RajaOngkir, hingga toko online siap berjualan."
publishDate: "2026-05-23"
lastUpdated: "2026-05-23"
author: "Tim PanduanHosting"
category: "tutorial"
tags: ["cara install woocommerce", "woocommerce indonesia", "toko online wordpress", "setting woocommerce"]
keyword: "cara install woocommerce"
volume: 2400
kd: 30
schema: "HowTo"
affiliateLinks:
  - name: "Niagahoster"
    url: "/go/niagahoster"
    cta: "Coba Sekarang"
  - name: "Hostinger"
    url: "/go/hostinger"
    cta: "Lihat Harga"
---

WooCommerce adalah plugin e-commerce gratis untuk WordPress yang mengubah website biasa menjadi toko online lengkap. Dengan lebih dari 6 juta instalasi aktif, WooCommerce adalah platform toko online paling populer di dunia. Artikel ini memandu cara install dan setting WooCommerce hingga toko online siap berjualan.

## Persiapan Sebelum Install WooCommerce

Pastikan sudah tersedia:
- **WordPress terinstall** di hosting
- **SSL aktif** (HTTPS) — wajib untuk toko online
- **Hosting yang cukup** — minimal 2GB storage, PHP 7.4+

Hosting yang direkomendasikan untuk WooCommerce: [Niagahoster](/go/niagahoster) dan [Hostinger](/go/hostinger) — keduanya sudah dioptimalkan untuk WordPress dan menyertakan SSL gratis.

## Langkah 1: Install Plugin WooCommerce

1. Login ke **WordPress Admin** (`namadomain.com/wp-admin`)
2. Masuk ke **Plugin → Tambah Baru**
3. Ketik "WooCommerce" di kolom pencarian
4. Klik **Install Sekarang** pada plugin WooCommerce oleh Automattic
5. Setelah selesai, klik **Aktifkan**

WooCommerce Setup Wizard akan otomatis muncul.

## Langkah 2: Setup Wizard WooCommerce

Ikuti panduan setup yang muncul:

### Lokasi Toko
- **Negara:** Indonesia
- **Provinsi/Kota:** pilih kota kamu
- **Mata uang:** Rupiah Indonesia (IDR)
- **Unit berat:** kg
- **Unit dimensi:** cm

### Industri
Pilih kategori produk yang akan dijual (fashion, elektronik, makanan, dll.)

### Jenis Produk
- **Physical products** — produk fisik yang dikirim
- **Downloadable products** — produk digital (ebook, template, kursus)
- **Subscriptions** — langganan berkala (butuh plugin premium)

Centang sesuai jenis produk yang akan dijual.

### Fitur Bisnis
Setup Wizard menawarkan berbagai fitur. Untuk awal, cukup aktifkan yang diperlukan. Kamu bisa tambahkan fitur lain nanti.

Klik **Lanjutkan** hingga selesai.

## Langkah 3: Pilih Tema WooCommerce

Setelah wizard selesai, pilih tema yang kompatibel dengan WooCommerce:

**Tema gratis terbaik untuk WooCommerce:**
- **Storefront** — tema resmi WooCommerce, ringan dan kompatibel penuh
- **Astra** — populer, ringan, banyak template toko online
- **OceanWP** — fitur lengkap, tampilan profesional

Install via **Tampilan → Tema → Tambah Baru** → cari nama tema → Install → Aktifkan.

## Langkah 4: Tambah Produk Pertama

Masuk ke **Produk → Tambah Baru**:

### Informasi Dasar
- **Judul produk:** nama yang jelas dan mengandung keyword pencarian
- **Deskripsi panjang:** detail lengkap produk (gunakan editor di bawah judul)
- **Deskripsi singkat:** ringkasan 2-3 kalimat (tampil di sidebar halaman produk)

### Data Produk
Di kotak "Data produk":
- **Jenis:** Produk sederhana / Variable (jika ada variasi ukuran/warna)
- **Harga reguler:** harga normal
- **Harga jual:** harga diskon (opsional)
- **SKU:** kode unik produk
- **Stok:** aktifkan manajemen stok dan isi jumlah
- **Berat:** dalam kg (untuk kalkulasi ongkir)
- **Dimensi:** panjang × lebar × tinggi dalam cm

### Gambar Produk
- **Gambar produk utama:** foto utama yang tampil di listing
- **Galeri produk:** foto tambahan dari berbagai sudut

Tips foto produk: background putih, pencahayaan natural, ambil dari beberapa sudut.

### Kategori dan Tag
Buat kategori produk yang logis. Pengunjung bisa filter produk berdasarkan kategori.

Klik **Terbitkan** setelah selesai.

## Langkah 5: Setting Pembayaran

Ini bagian terpenting. Masuk ke **WooCommerce → Pengaturan → Pembayaran**.

### Opsi Pembayaran untuk Indonesia

**Transfer Bank Manual (paling sederhana untuk mulai)**
1. Aktifkan "Transfer Bank Langsung (BACS)"
2. Isi nama bank, nama rekening, nomor rekening
3. Pembeli transfer → kamu konfirmasi manual

**Midtrans (direkomendasikan)**
Midtrans adalah payment gateway Indonesia yang mendukung:
- Transfer bank (BCA, Mandiri, BNI, BRI)
- Kartu kredit/debit
- GoPay, OVO, DANA, ShopeePay
- Indomaret, Alfamart

Cara setup:
1. Daftar di midtrans.com (gratis)
2. Install plugin WooCommerce Midtrans
3. Masukkan Server Key dan Client Key dari dashboard Midtrans

**Xendit (alternatif)**
Mirip Midtrans, dengan dukungan metode pembayaran yang luas. Plugin tersedia gratis.

**COD (Cash on Delivery)**
Aktifkan jika menawarkan bayar di tempat. Cocok untuk area dengan layanan pengiriman COD.

## Langkah 6: Setting Ongkos Kirim

Masuk ke **WooCommerce → Pengaturan → Pengiriman**.

### Opsi 1: Ongkos Kirim Manual (Flat Rate)
Tetapkan harga pengiriman tetap tanpa kalkulasi otomatis. Simpel tapi tidak akurat.

### Opsi 2: RajaOngkir (Direkomendasikan)
Plugin RajaOngkir mengintegrasikan tarif real-time dari semua kurir Indonesia:
- JNE, J&T, SiCepat, AnterAja, Pos Indonesia
- Pengunjung bisa cek ongkir berdasarkan kota asal dan tujuan

Cara setup:
1. Daftar di rajaongkir.com (ada paket gratis)
2. Dapatkan API key
3. Install plugin WooCommerce RajaOngkir
4. Masukkan API key dan pilih kurir yang tersedia

## Langkah 7: Halaman-Halaman WooCommerce

WooCommerce otomatis membuat halaman penting saat diinstall:
- **Shop** — halaman semua produk
- **Cart** — keranjang belanja
- **Checkout** — halaman pembayaran
- **My Account** — dashboard pembeli

Pastikan semua halaman ini ada dan bisa diakses. Cek di **WooCommerce → Status → Tools → Buat halaman yang hilang** jika ada yang belum ada.

## Langkah 8: Plugin Tambahan yang Direkomendasikan

**YITH WooCommerce Wishlist** — tombol "Simpan ke Wishlist" untuk pengunjung

**WooCommerce PDF Invoices** — generate invoice PDF otomatis

**Mailchimp for WooCommerce** — kirim email marketing ke pembeli

**WooCommerce Google Analytics** — tracking konversi di Google Analytics

**Complianz GDPR** — compliance kebijakan privasi

## Checklist Sebelum Toko Online Live

Sebelum mengumumkan toko online ke publik:

- [ ] SSL aktif (URL pakai `https://`)
- [ ] Minimal 5 produk sudah diupload dengan foto dan deskripsi lengkap
- [ ] Payment gateway sudah ditest (lakukan test order)
- [ ] Ongkos kirim sudah dikonfigurasi dan dicek
- [ ] Email konfirmasi order berfungsi
- [ ] Halaman Kebijakan Pengembalian sudah ada
- [ ] Halaman Kontak sudah ada
- [ ] Toko bisa diakses dari mobile dengan baik

## FAQ: WooCommerce

**Apakah WooCommerce gratis?**
Plugin WooCommerce gratis. Biaya yang ada adalah hosting + domain. Beberapa fitur lanjutan (subscription, booking) butuh plugin premium berbayar.

**Berapa produk yang bisa dijual di WooCommerce?**
Tidak ada batasan jumlah produk. Tapi perhatikan storage hosting — ribuan produk dengan banyak gambar bisa memakan storage cukup besar.

**Apakah WooCommerce bisa untuk dropship?**
Ya. Ada plugin seperti AliDropship atau WooDropship yang memudahkan model bisnis dropship dengan WooCommerce.

**Bagaimana cara mengelola stok di WooCommerce?**
Di dashboard WooCommerce, masuk ke **Produk** untuk lihat dan update stok semua produk. Aktifkan notifikasi email saat stok hampir habis di pengaturan WooCommerce.

## Kesimpulan

WooCommerce memberikan kemampuan toko online lengkap secara gratis. Dengan hosting yang tepat, setup awal bisa selesai dalam setengah hari.

Kunci sukses toko online WooCommerce: foto produk berkualitas, deskripsi lengkap, payment gateway yang mudah, dan respons order yang cepat.

Mulai dengan hosting yang dioptimalkan untuk WordPress dan WooCommerce:
- [Niagahoster](/go/niagahoster) — WordPress hosting dengan support Indonesia
- [Hostinger](/go/hostinger) — performa tinggi, harga terjangkau
