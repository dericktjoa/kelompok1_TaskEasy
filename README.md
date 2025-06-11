# 📘 TaskEasy – Team Task Management App

A lightweight web application built with React and Next.js to help teams manage tasks efficiently.

🌐 **Live App**: https://kelompok1-task-easy-drab.vercel.app/  
📁 **Repository**: https://github.com/dericktjoa/kelompok1_TaskEasy

---

## ✨ Features

✅ Create, read, update, and delete tasks  
🎯 Task prioritization (Low, Medium, High)  
📊 Status tracking (To-Do, In Progress, Done)  
🔄 Automatic priority-based sorting  
💾 Local storage persistence  
📱 Responsive design  
📈 Task statistics dashboard

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js 18+
- npm or yarn

### 🔧 Installation

```bash
git clone https://github.com/dericktjoa/kelompok1_TaskEasy.git
cd kelompok1_TaskEasy
npm install
```

### 🔄 Run Development Server

```bash
npm run dev
```

Buka `http://localhost:3000` di browser kamu.

---

## 🧪 Testing

Jalankan test suite:

```bash
npm test
```

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 🧩 XP Practices yang Diimplementasikan

- **Pair Programming**: Diskusi kolaboratif usulan fitur dan kode
- **Test-Driven Development (TDD)**: Unit test untuk `taskUtils.getPriorityColor` & `sortTasksByPriority`
- **Continuous Integration**: Setup GitHub Actions untuk lint, test, build
- **Small Releases**: Fitur dikembangkan sekaligus dirilis per-minggu
- **Refactoring**: Kode dibersihkan sesuai saran ESLint/Prettier
- **Customer Collaboration**: Product owner aktif memberi feedback dan berpartisipasi dalam pengambilan keputusan
- **Planning Game**: Sesi mingguan di mana PO menetapkan prioritas, dan developer memperkirakan effort untuk memilih user story minggu ini

---

## 🗂️ Struktur Folder Proyek

```
/app              → Next.js app directory
/components       → Komponen React (task card, form, stats)
/pages            → Halaman utama
/types            → Tipe data TypeScript
/utils            → Fungsi utilitas (task & local storage)
__tests__         → File pengujian
```

---

## 🤝 Contributing

1. Fork repo ini
2. Buat branch baru (`feature/nama-fitur`)
3. Tulis test untuk fungsionalitas baru
4. Pastikan semua test lolos
5. Buat pull request

---
