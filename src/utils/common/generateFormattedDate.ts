function postedAt(date: string | number | Date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now.getTime() - posted.getTime(); // Menggunakan getTime() untuk mendapatkan waktu dalam milidetik

  const diffYears: number = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); // Pertahun
  const diffMonths: number = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)); // Perbulan
  const diffWeeks: number = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)); // Perminggu
  const diffDays: number = Math.floor(diff / (1000 * 60 * 60 * 24)); // Perhari

  if (diffYears > 0) {
    return `${diffYears} tahun yang lalu`;
  }
  if (diffMonths > 0) {
    return `${diffMonths} bulan yang lalu`;
  }
  if (diffWeeks > 0) {
    return `${diffWeeks} minggu yang lalu`;
  }
  if (diffDays > 0) {
    return `${diffDays} hari yang lalu`;
  }
  return 'baru saja';
}

export { postedAt };
