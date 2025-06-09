import React, { useState, useEffect } from "react";
import TaskList from "./components/TasksList";  // Komponen untuk menampilkan daftar tugas
import TaskForm from "./components/TaskForm";    // Komponen form untuk menambah tugas baru
import { getTasks, saveTasks } from "./utils/storage";  // Fungsi utilitas untuk load/save tasks dari/ke localStorage

function App() {
  // State untuk menyimpan daftar tugas, diinisialisasi dari localStorage via getTasks()
  const [tasks, setTasks] = useState(getTasks());

  // State untuk filter status tugas ("all", "todo", "in-progress", "done")
  const [filterStatus, setFilterStatus] = useState("all");

  // State untuk filter prioritas tugas ("all", "low", "medium", "high")
  const [filterPrioritas, setFilterPrioritas] = useState("all");

  // State untuk pengaturan sorting tugas berdasarkan kriteria tertentu
  const [sortBy, setSortBy] = useState("");

  // Efek samping: setiap kali 'tasks' berubah, simpan ulang ke localStorage
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Fungsi menambahkan tugas baru ke dalam daftar tasks
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Fungsi menghapus tugas berdasarkan id dengan konfirmasi terlebih dahulu
  const deleteTask = (id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus tugas ini?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  // Fungsi memperbarui status tugas tertentu berdasarkan id
  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  return (
    <div className="container mb-4">
      <header className="mb-4 text-center">
        {/* Judul aplikasi dengan ikon dari Bootstrap Icons */}
        <h1 className="display-4">
          <i className="bi bi-check2-circle me-2"></i> 
          Task Manager
        </h1>
        <p className="lead">Kelola tugas harianmu dengan mudah dan efisien</p>
      </header>

      <div className="d-flex flex-row mb-3">
        {/* Bagian kiri: Daftar tugas */}
        <div className="flex p-2 col-5">
          <h5>Daftar Tugas</h5>
          <TaskList
            tasks={tasks}
            onDeleteTask={deleteTask}           // props fungsi untuk menghapus tugas
            onUpdateStatus={updateStatus}       // props fungsi untuk update status tugas
            filterStatus={filterStatus}          // props filter status
            setFilterStatus={setFilterStatus}    // fungsi untuk mengubah filter status
            filterPrioritas={filterPrioritas}    // props filter prioritas
            setFilterPrioritas={setFilterPrioritas} // fungsi untuk mengubah filter prioritas
            sortBy={sortBy}                      // props untuk sorting
            setSortBy={setSortBy}                // fungsi mengubah sortBy
          />
        </div>

        {/* Bagian kanan: Form tambah tugas */}
        <div className="flex p-3 flex-grow-1 align-items-end">
          <TaskForm onAddTask={addTask} />  {/* Komponen form yang menerima fungsi addTask */}
        </div>
      </div>
    </div>
  );
}

export default App;
