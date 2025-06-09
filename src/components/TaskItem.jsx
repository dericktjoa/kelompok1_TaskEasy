import React from "react";

// Warna badge berdasarkan prioritas tugas
const priorityColors = {
  low: "success",     // hijau
  medium: "warning",  // kuning
  high: "danger",     // merah
};

// Warna badge berdasarkan status tugas
const statusColors = {
  todo: "secondary",       // abu-abu
  "in-progress": "primary",// biru
  done: "success",         // hijau
};

export default function TaskItem({ task, onEditStatus, onDelete }) {
  return (
    <div
      className="card mb-3 shadow-sm"
      style={{ cursor: "pointer", transition: "transform 0.2s" }}
      // Efek zoom saat mouse hover pada kartu tugas
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="card-body">
        {/* Judul tugas dengan badge prioritas */}
        <h5 className="card-title">
          {task.nama}{" "}
          <span className={`badge bg-${priorityColors[task.prioritas]} ms-2`}>
            {task.prioritas.toUpperCase()}
          </span>
        </h5>

        {/* Informasi deadline dan assignedTo */}
        <h6 className="card-subtitle mb-2 text-muted">
          Deadline: {task.deadline} | Assigned to: {task.assignedTo}
        </h6>

        {/* Deskripsi tugas (jika kosong tampilkan teks default) */}
        <p className="card-text">{task.deskripsi || "Tidak ada deskripsi"}</p>

        {/* Badge status tugas */}
        <span className={`badge bg-${statusColors[task.status]} mb-2`}>
          {task.status.toUpperCase()}
        </span>

        {/* Tombol aksi: edit status dan hapus tugas */}
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => onEditStatus(task.id)} // Panggil fungsi edit status dengan id tugas
            title="Edit Status"
          >
            <i className="bi bi-pencil-square"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(task.id)} // Panggil fungsi hapus tugas dengan id tugas
            title="Hapus Tugas"
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
