// // eslint-disable-line no-use-before-define
// // eslint-disable-next-line no-use-before-define
// function postedAt(date: string | number | Date) {
//   const now = new Date();
//   const posted = new Date(date);
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const diff = now - posted;
//   const diffDays: number = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const diffHours: number = Math.floor(diff / (1000 * 60 * 60));
//   const diffMinutes: number = Math.floor(diff / (1000 * 60));
//   const diffSeconds: number = Math.floor(diff / 1000);

//   if (diffDays > 0) {
//     return `${diffDays} days ago`;
//   }
//   if (diffHours > 0) {
//     return `${diffHours} hours ago`;
//   }
//   if (diffMinutes > 0) {
//     return `${diffMinutes} minutes ago`;
//   }
//   if (diffSeconds > 0) {
//     return `${diffSeconds} seconds ago`;
//   }
//   return 'just now';
// }

// export { postedAt };
