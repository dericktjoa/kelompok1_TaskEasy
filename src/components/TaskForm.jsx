import React, { useState } from "react";

export default function TaskForm({ onAddTask }) {
  // State untuk menyimpan input form
  const [nama, setNama] = useState("");             // Nama tugas
  const [deadline, setDeadline] = useState("");     // Deadline tugas (tanggal)
  const [prioritas, setPrioritas] = useState("low"); // Prioritas tugas (low, medium, high)
  const [status, setStatus] = useState("todo");      // Status tugas (todo, in-progress, done)
  const [deskripsi, setDeskripsi] = useState("");    // Deskripsi tugas (opsional)
  const [assignedTo, setAssignedTo] = useState("Derick"); // Orang yang ditugaskan

  // Fungsi yang dijalankan saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // Cegah reload halaman

    // Panggil callback onAddTask dengan data tugas baru
    onAddTask({
      id: Date.now(), // ID unik berdasarkan timestamp
      nama,
      deadline,
      prioritas,
      status,
      deskripsi,
      assignedTo,
    });

    // Reset input form ke nilai awal setelah submit
    setNama("");
    setDeadline("");
    setPrioritas("low");
    setStatus("todo");
    setDeskripsi("");
    setAssignedTo("Derick");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-white">
      <h4 className="mb-3">Tambah Tugas Baru</h4>

      {/* Input nama tugas */}
      <div className="mb-3">
        <label className="form-label">Nama Tugas</label>
        <input
          type="text"
          className="form-control"
          value={nama}
          onChange={(e) => setNama(e.target.value)} // Update state nama saat input berubah
          required
          placeholder="Masukkan nama tugas"
        />
      </div>

      {/* Baris untuk deadline dan prioritas */}
      <div className="row mb-3">
        {/* Input deadline */}
        <div className="col">
          <label className="form-label">Deadline</label>
          <input
            type="date"
            className="form-control"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)} // Update state deadline
            required
          />
        </div>

        {/* Pilihan prioritas */}
        <div className="col">
          <label className="form-label">Prioritas</label>
          <select
            className="form-select"
            value={prioritas}
            onChange={(e) => setPrioritas(e.target.value)} // Update state prioritas
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      {/* Baris untuk status dan assignedTo */}
      <div className="row mb-3">
        {/* Pilihan status */}
        <div className="col">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)} // Update state status
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        {/* Pilihan assignedTo */}
        <div className="col">
          <label className="form-label">Assigned To</label>
          <select
            className="form-select"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)} // Update state assignedTo
          >
            <option value="Derick">Derick</option>
            <option value="Justin">Justin</option>
            <option value="Daniel">Daniel</option>
          </select>
        </div>
      </div>

      {/* Input deskripsi (textarea) */}
      <div className="mb-3">
        <label className="form-label">Deskripsi</label>
        <textarea
          className="form-control"
          rows="3"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)} // Update state deskripsi
          placeholder="Tambahkan deskripsi tugas (opsional)"
        />
      </div>

      {/* Tombol submit */}
      <button type="submit" className="btn btn-primary w-100">
        Tambah Tugas
      </button>
    </form>
  );
}
