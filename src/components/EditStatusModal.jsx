import React, { useState, useEffect } from "react";

export default function EditStatusModal({ task, onClose, onSave }) {
  // State untuk menyimpan status yang akan diedit
  const [status, setStatus] = useState(task.status);

  // Sinkronisasi status jika task berubah
  useEffect(() => {
    setStatus(task.status); // Update state status saat task berubah
  }, [task]);

  // Fungsi saat tombol "Simpan" diklik
  const handleSave = () => {
    onSave(status); // Kirim status baru ke parent
  };

  return (
    <>
      {/* Overlay gelap sebagai latar belakang modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={onClose} // Klik di luar modal akan menutup modal
      >
        {/* Dialog modal (konten utama) */}
        <div
          className="modal-dialog"
          onClick={(e) => e.stopPropagation()} // Cegah modal tertutup saat klik di dalam
        >
          <div className="modal-content p-4">
            {/* Judul modal */}
            <h5 className="modal-title mb-3">Edit Status: {task.nama}</h5>

            {/* Dropdown untuk memilih status */}
            <select
              className="form-select mb-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)} // Update status
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            {/* Tombol aksi */}
            <div className="d-flex justify-content-end">
              {/* Simpan perubahan */}
              <button
                className="btn btn-primary me-2"
                onClick={handleSave}
              >
                Simpan
              </button>

              {/* Batalkan perubahan dan tutup modal */}
              <button
                className="btn btn-secondary"
                onClick={onClose}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
