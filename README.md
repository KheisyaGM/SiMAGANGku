# 🚀 SiMAGANGku  
### *Solusi Digital Pengelolaan PKL dan Prakerin Siswa*

---

## 📌 Tentang Project

**SiMAGANGku** adalah sistem informasi berbasis web yang dirancang untuk membantu siswa SMK dalam mencari dan mengelola tempat PKL/Prakerin secara lebih mudah, cepat, dan terstruktur.

Website ini memudahkan admin dalam mengelola data perusahaan PKL serta pengajuan siswa secara digital, sehingga proses administrasi PKL menjadi lebih efektif dan efisien ✨

---

## 🎯 Tujuan Website

- 💼 Mempermudah pengelolaan data tempat PKL  
- 📍 Menyediakan informasi perusahaan PKL di Malang  
- 📝 Mengelola pengajuan siswa secara digital  
- ⚡ Mempercepat dan merapikan proses PKL/prakerin  

---

## 🛠️ Teknologi yang Digunakan

- ⚛️ Next.js  
- 🟦 TypeScript  
- 🗄️ MySQL  
- 🔥 Prisma ORM  
- 🎨 Tailwind CSS  
- 📮 Postman  
- 🧩 XAMPP  

---

## ✨ Fitur Utama

### 🏢 Manajemen Data Perusahaan (CRUD)

Admin dapat:
- ➕ Menambahkan data perusahaan  
- 👀 Melihat daftar perusahaan  
- ✏️ Mengedit data perusahaan  
- 🗑️ Menghapus data perusahaan  

**Data perusahaan meliputi:**
- Nama perusahaan  
- Alamat  
- Bidang usaha  
- Kuota PKL  

---

### 👨‍🎓 Manajemen Pengajuan Siswa (CRUD)

Admin dapat:
- ➕ Menambahkan pengajuan PKL siswa  
- 👀 Melihat daftar pengajuan  
- ✏️ Mengubah status pengajuan  
- 🗑️ Menghapus pengajuan  

**Data pengajuan meliputi:**
- Nama siswa  
- Kelas  
- Perusahaan tujuan  
- Status pengajuan  

---

## 🔗 Relasi Database

Sistem ini menggunakan relasi **one-to-many**, yaitu:

- Satu perusahaan dapat memiliki banyak pengajuan siswa 📚  

**Contoh:**
- PT ABC  
  - Grace  
  - Andi  
  - Budi  

---

## 📸 Tampilan Sistem

SiMAGANGku dibuat dengan konsep **sederhana, modern, dan user-friendly**, sehingga mudah digunakan oleh admin maupun siswa 🖥️✨

---

## 👩‍💻 Developer

Dibuat sebagai proyek **UKL (Ujian Kenaikan Level)** SMK 💙  

---

## 🌟 Future Improvements

- 🔍 Fitur pencarian perusahaan  
- 🗺️ Integrasi Google Maps lokasi perusahaan  
- 🔐 Sistem login multi-user  
- 📊 Dashboard statistik  
- 📁 Upload dokumen pengajuan  

---

> 💡 *“SiMAGANGku hadir untuk membuat proses PKL lebih terstruktur, cepat, dan digital.”*






This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
