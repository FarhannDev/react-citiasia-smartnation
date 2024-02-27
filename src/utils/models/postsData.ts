import generateCreateSlug from '../common/generateCreateSlug';
import generateUniqueId from '../common/generateUniqueId';

export interface Posts {
  id: string | number
  slug: string
  postDate: string | null
  title: string
  category: string[]
  tags: string[]
  // users: [{ name: string; username: string; email: string }];
  content: string
  excerpt: string
  createdAt: string | null
  updatedAt: string | null
}

const posts: Posts[] = [
  {
    id: generateUniqueId(),
    slug: generateCreateSlug(
      'Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas',
    ),
    postDate: new Date('21 December 2022').toISOString(),
    title: 'Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas',
    category: [''],
    tags: [''],
    excerpt: '<span, style="font-weight: 400;">Pembangunan dan pengembangan </span,><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.&nbsp;</span>',
    content: '<span style="font-weight: 400;">Pembangunan dan pengembangan </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.&nbsp;</span>\n\n<span style="font-weight: 400;">Badan Standardisasi Nasional (BSN) mengembangkan Standar Nasional Indonesia (SNI) dalam mendukung suksesnya program terkait </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">yaitu SNI ISO 37120:2018, yang merupakan pembangunan perkotaan dan masyarakat berkelanjutan yang berisi indikator untuk pelayanan perkotaan dan kualitas hidup. SNI tersebut merupakan dasar dari pelaksanaan kota cerdas dan berisi indikator, cara mengukur dan kriteria yang terdapat dalam </span><i><span style="font-weight: 400;">smart city.&nbsp;</span></i>\n\n<span style="font-weight: 400;">Standar ini berupaya membantu pemerintah daerah, baik kota ataupun kabupaten agar lebih efektif dalam menerapkan pembangunan berkelanjutan. BSN juga berharap adanya SNI terkait </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">seluruh kabupaten atau kota di Indonesia bisa memiliki rujukan yang sama dalam membangun kota cerdas.</span>\n\n<span style="font-weight: 400;">Selain itu, terdapat 19 indikator yang merupakan dasar dalam pelaksanaan </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">dan enam diantaranya adalah pendidikan, kesehatan, populasi dan kondisi sosial, perumahan, ekonomi serta keamanan.&nbsp;</span>\n\n<span style="font-weight: 400;">Melihat dukungan dari BSN, pengembangan kota cerdas sangat didukung oleh pemerintah Indonesia. Sudah saatnya kota dan daerah Anda juga mulai menyusun </span><i><span style="font-weight: 400;">master plan </span></i><span style="font-weight: 400;">untuk menjadi salah satu kota cerdas di Indonesia. Jika Anda butuh konsultasi dan bimbingan terkait penyusunan </span><i><span style="font-weight: 400;">master plan, </span></i><span style="font-weight: 400;">silahkan kunjungi akun Instagram @citiasiainc untuk informasi lebih lanjut.&nbsp;</span>\n\n<a href="https://smartnation.id/apakah-anda-tahu-bahwa-ada-standar-nasional-indonesia-sni-untuk-smart-city/"><strong>Referensi</strong></a>',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export { posts };
