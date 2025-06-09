// Fungsi untuk mengambil data tugas dari localStorage
export const getTasks = () => {
  // Ambil data dari localStorage dengan key 'tasks'
  const saved = localStorage.getItem('tasks');

  // Jika data ada, parse dari JSON ke array JavaScript, jika tidak, kembalikan array kosong
  return saved ? JSON.parse(saved) : [];
};

// Fungsi untuk menyimpan data tugas ke localStorage
export const saveTasks = (tasks) => {
  // Simpan array tasks sebagai string JSON ke localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
