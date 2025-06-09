import React, { useState } from "react";
import TaskItem from "./TaskItem";           // Komponen untuk menampilkan satu item tugas
import EditStatusModal from "./EditStatusModal";  // Modal untuk mengubah status tugas

export default function TaskList({
  tasks,                  // Array daftar tugas yang akan ditampilkan
  onDeleteTask,           // Fungsi untuk menghapus tugas, diteruskan ke TaskItem
  onUpdateStatus,         // Fungsi untuk mengupdate status tugas
  filterStatus,           // Status filter saat ini (all, todo, in-progress, done)
  setFilterStatus,        // Fungsi untuk mengubah filterStatus
  filterPrioritas,        // Prioritas filter saat ini (all, low, medium, high)
  setFilterPrioritas,     // Fungsi untuk mengubah filterPrioritas
  sortBy,                 // Kriteria sorting saat ini (deadline, prioritas)
  setSortBy,              // Fungsi untuk mengubah sortBy
}) {
  // State menyimpan id tugas yang sedang dipilih untuk diedit statusnya
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  // Membuat salinan tasks yang akan difilter dan disortir
  let filteredTasks = [...tasks];

  // Filter berdasarkan status tugas jika bukan 'all'
  if (filterStatus !== "all") {
    filteredTasks = filteredTasks.filter((t) => t.status === filterStatus);
  }

  // Filter berdasarkan prioritas tugas jika bukan 'all'
  if (filterPrioritas !== "all") {
    filteredTasks = filteredTasks.filter((t) => t.prioritas === filterPrioritas);
  }

  // Sorting berdasarkan deadline (tanggal tugas)
  if (sortBy === "deadline") {
    filteredTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }
  // Sorting berdasarkan prioritas (high > medium > low)
  else if (sortBy === "prioritas") {
    const priorityOrder = { low: 3, medium: 2, high: 1 };
    filteredTasks.sort((a, b) => priorityOrder[a.prioritas] - priorityOrder[b.prioritas]);
  }

  // Fungsi menutup modal edit status
  const handleCloseModal = () => setSelectedTaskId(null);

  return (
    <>
      {/* Dropdown filter dan sorting */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {/* Filter status tugas */}
        <select
          className="form-select form-select-sm flex-grow-1"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          aria-label="Filter Status"
        >
          <option value="all">Semua Status</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        {/* Filter prioritas tugas */}
        <select
          className="form-select form-select-sm flex-grow-1"
          value={filterPrioritas}
          onChange={(e) => setFilterPrioritas(e.target.value)}
          aria-label="Filter Prioritas"
        >
          <option value="all">Semua Prioritas</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Sorting tugas */}
        <select
          className="form-select form-select-sm flex-grow-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort By"
        >
          <option value="">Urutkan</option>
          <option value="deadline">Deadline</option>
          <option value="prioritas">Prioritas</option>
        </select>
      </div>

      {/* Render pesan jika tidak ada tugas */}
      {filteredTasks.length === 0 ? (
        <div className="alert alert-info">Tidak ada tugas untuk ditampilkan.</div>
      ) : (
        // Render list tugas yang sudah difilter dan disortir
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDeleteTask}        // Kirim fungsi hapus ke tiap TaskItem
            onEditStatus={setSelectedTaskId} // Kirim fungsi setSelectedTaskId untuk buka modal edit status
          />
        ))
      )}

      {/* Render modal edit status jika ada tugas yang dipilih */}
      {selectedTaskId && (
        <EditStatusModal
          task={tasks.find((t) => t.id === selectedTaskId)}  // Cari tugas yang dipilih berdasarkan id
          onClose={handleCloseModal}                          // Fungsi menutup modal
          onSave={(newStatus) => {
            onUpdateStatus(selectedTaskId, newStatus);       // Simpan perubahan status
            handleCloseModal();                               // Tutup modal
          }}
        />
      )}
    </>
  );
}
