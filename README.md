# Inagata Intern Challenge - Frontend Dashboard

Halo! 👋 Selamat datang di repositori proyek tantangan magang saya untuk posisi **Frontend Developer** di **Inagata**. Proyek ini berfokus pada slicing dan implementasi *dashboard* interaktif yang responsif, modular, dan bersih menggunakan ekosistem React modern.

---

## Preview Aplikasi
Belum Kelar
---

## Main Highlight
* **Modern Tech Stack:** Menggunakan Vite + React + Tailwind CSS untuk performa super ngebut dan styling modular.
* **Component-Driven Development:** Memecah layout menjadi komponen-komponen kecil yang reusable (bisa dipakai ulang) di folder `src/components/` seperti `BalanceHistory`, `ExpenseStatistics`, `QuickTransfer`, dll.
* **Pixel Perfect Mindset:** Berusaha menyelaraskan hasil coding sedekat mungkin dengan desain referensi yang diberikan.

---

## Tech Stack & Alat Tempur

* **Framework/Bundler:** Vite + React (JSX)
* **Styling:** Tailwind CSS & PostCSS
* **Linter/Formatter:** Oxlint (Untuk menjaga kode tetap bersih dan minim error)
* **Environment:** Kali Linux (Development Sandbox)

---

## Cara Menjalankan Proyek di Lokal

Jika Anda ingin mereview atau menjalankan proyek ini di perangkat lokal Anda, ikuti langkah mudah berikut:

1. **Clone Repositori Ini**
   ```bash
   git clone [https://github.com/Fianisme/inagataintern_challenge.git](https://github.com/Fianisme/inagataintern_challenge.git)
   cd inagataintern_challenge

2. **Install Dependensi**
    ```bash
    npm install

3. **Jalankan**
    ```bash
    npm run dev

## Struktur Project

├── public/             # Aset publik (ikon, svg, dll.)
├── src/
│   ├── assets/         # Gambar & styling dasar
│   ├── components/     # Komponen modular dashboard (Header, Sidebar, Cards, dll.)
│   ├── views/          # Halaman utama (Dashboard.jsx)
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point aplikasi
├── .gitignore          # Penyaring file build lokal
├── vite.config.js      # Konfigurasi Vite
└── package.json        # Daftar modul & script proyek


