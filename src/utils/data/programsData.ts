import { nanoid } from 'nanoid';
import generateCreateSlug from '../common/generateCreateSlug';

const programCategory: ProgramCategory[] = [
  {
    id: nanoid(16),
    name: 'ISNA',
    slug: generateCreateSlug('ISNA'),
    description: `Indonesia Smart Nation Award (ISNA) merupakan acara dwi tahunan yang digelar oleh Citiasia,
    Inc. sejak 2015. ISNA bertujuan untuk memberikan penghargaan yang diberikan kepada
    Kota/Kabupaten yang inovasinya memberikan dampak secara luas kepada masyarakat. Melalui
    ISNA, Citiasia, Inc. berkomitmen untuk mendorong pertumbuhan dan pengembangan konsep
    kota cerdas dalam pengelolaan perkotaan demi kepentingan seluruh masyarakat Indonesia dan
    mewujudkan Indonesia Maju menjadi Smart Nation.`,
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    name: 'ISNA 2015',
    slug: generateCreateSlug('ISNA 2015'),
    description: `Indonesia Smart Nation Award (ISNA) 2015 adalah pagelaran pertama yang dilaksanakan oleh
    Citiasia, Inc. yang berkolaborasi dengan PT Indosat Tbk dan Datacomm Cloud Business. Acara
    dilaksanakan pada Selasa, 20 Oktober 2015 di Hotel JS Luwansa, Kuningan, Jakarta. ISNA
    memberi penghargaan kepada 45 daerah (provinsi, kabupaten, dan kota) di Indonesia yang
    memiliki infrastruktur ICT pendukung komunikasi regional yang efektif. Citiasia Center for Smart
    Nation (CCSN) yang merupakan lini strategis milik Citiasia, Inc. mengumumkan hasil studi
    "Indonesia Smart Region Maturity Index” pada kesempatan yang sama, indeks ini mengukur
    kondisi kesiapan daerah untuk pembangunan Smart City di wilayah Indonesia.`,
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    name: 'ISNA 2018',
    slug: generateCreateSlug('ISNA 2018'),
    description: `Indonesia Smart Nation Awards (ISNA) ke-3 2018 sukses digelar pada Kamis, 3 Mei 2018 di
    Nusantara 2 Hall, ICE BSD City, Tangerang. ISNA 2018 diisi dengan kegiatan talkshow yang
    bertema “Creating Competitive and Sustainable Cities for Tourism, Trade & Investment”, Acara
    tersebut dihadiri langsung oleh Menteri Pariwisata Arief Yahya dan lebih dari 50 kepala daerah,
    praktisi di bidang pariwisata, investasi, dan ICT. ISNA berhasil dilaksanakan atas kerjasama
    dengan Citiasia Center for Smart Nation (CCSN), Debindo, Visit Wonderful Indonesia (ViWI)
    dan Kementerian Pariwisata Republik Indonesia.`,
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    name: 'ISNA 2020',
    slug: generateCreateSlug('ISNA 2020'),
    description: `Indonesia Smart Nation Award ke-4 2020 diselenggarakan bersamaan dengan Indonesia Smart
    City Investment Forum (ISCIF) 2020 secara daring melalui platform konferensi Zoom Virtu-Ex
    pada tanggal 5 Oktober 2020. Tema ISCIF 2020 dan ISNA ke-4 adalah “Smart City 2020:
    Driving Innovation & Productivity During The Global Pandemic.” Citiasia Center for Smart Nation
    (CCSN) melakukan survei mengenai inovasi yang diinisiasi oleh pemerintah kota dan
    kabupaten sebagai respon terhadap pandemi COVID-19, dengan lebih dari 500 kabupaten dan
    kota di seluruh Indonesia yang berpartisipasi dan menghasilkan lebih dari 180 inovasi.`,
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    name: 'ISNA 2022',
    slug: generateCreateSlug('ISNA 2022'),
    description: `Indonesia Smart Nation Award ke-4 2020 diselenggarakan bersamaan dengan Indonesia Smart
    City Investment Forum (ISCIF) 2020 secara daring melalui platform konferensi Zoom Virtu-Ex
    pada tanggal 5 Oktober 2020. Tema ISCIF 2020 dan ISNA ke-4 adalah “Smart City 2020:
    Driving Innovation & Productivity During The Global Pandemic.” Citiasia Center for Smart Nation
    (CCSN) melakukan survei mengenai inovasi yang diinisiasi oleh pemerintah kota dan
    kabupaten sebagai respon terhadap pandemi COVID-19, dengan lebih dari 500 kabupaten dan
    kota di seluruh Indonesia yang berpartisipasi dan menghasilkan lebih dari 180 inovasi.`,
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    name: 'ISCIF',
    slug: generateCreateSlug('ISCIF'),
    description: `Citiasia Center for Smart Nation (CCSN) menyelenggarakan Indonesia Smart City Investment
    Forum (ISCIF) Talkshow, yang sekaligus menjadi ajang pengumuman pemenang 4th Indonesia
    Smart Nation Award (ISNA). ISCIF mengusung tema "Smart City 2020: Driving Innovation and
    Productivity during the Global Pandemic" yang mengundang pemimpin daerah, pengambil
    kebijakan, akademisi, dan praktisi smart city untuk berbagi pengalaman dan inovasi
    pembangunan yang relevan dengan tantangan pandemi serta menciptakan platform berharga
    untuk pertukaran ide.`,
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    name: 'Training',
    slug: generateCreateSlug('Training'),
    description: `Citiasia Inc. menyediakan layanan pelatihan yang disesuaikan dengan kebutuhan dan bidang
    industri klien kami. Kami menggabungkan teori implementatif dengan solusi praktis yang
    relevan untuk klien, pendekatan ini berfokus pada hasil untuk meningkatkan efektivitas dan
    relevansi pelatihan bagi klien kami.`,
    sourceImageUrl: '/',
    timestamp: new Date(),
  },
];

const programSubCategory: ProgramSubCategory[] = [
  {
    id: nanoid(16),
    programCategoryId: programCategory[0].id,
    name: 'ISNA',
    slug: generateCreateSlug('ISNA'),
    description: 'PROGRAM KEGIATAN ISNA',
    sourceImageUrl: null,
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    programCategoryId: programCategory[0].id,
    name: 'ISNA 2015',
    slug: generateCreateSlug('ISNA 2015'),
    description: 'PROGRAM KEGIATAN PELATIHAN',
    sourceImageUrl: null,
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    programCategoryId: programCategory[0].id,
    name: 'ISNA 2016',
    slug: generateCreateSlug('ISNA 2016'),
    description: 'PROGRAM KEGIATAN PELATIHAN',
    sourceImageUrl: null,
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    programCategoryId: programCategory[0].id,
    name: 'ISNA 2018',
    slug: generateCreateSlug('ISNA 2018'),
    description: 'PROGRAM KEGIATAN PELATIHAN',
    sourceImageUrl: null,
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    programCategoryId: programCategory[0].id,
    name: 'ISNA 2020',
    slug: generateCreateSlug('ISNA 2020'),
    description: 'PROGRAM KEGIATAN PELATIHAN',
    sourceImageUrl: null,
    timestamp: new Date(),
  },
];

const program: Program[] = [
  {
    id: nanoid(16),
    title: 'Peraih ISNA 2015 Didominasi Daerah-daerah di Pulau Jawa',
    slug: generateCreateSlug(
      'Peraih ISNA 2015 Didominasi Daerah-daerah di Pulau Jawa'
    ),
    sourceImageUrl:
      'https://smartnation.id/wp-content/uploads/2015/10/IMG_20151021_100501-360x220-1.jpg',
    publishDate: new Date('21 October 2015'),
    status: 'publish',
    categories: [
      { name: programCategory[0].name, slug: programCategory[0].slug },
      { name: programCategory[1].name, slug: programCategory[1].slug },
    ],
    excerpt:
      'Citiasia Inc bersama Indosat dan Datacomm meluncurkan hasil studi Indonesia Smart Region Maturity Index (ISRMI) atau Indeks Kematangan Daerah Pintar. Peluncuran ISRMI tersebut dilaksanakan pada Malam Penganugerahan Indonesia Smart Nation Award (ISNA) di Jakarta kepada kepada 45 daerah.',
    content:
      'Citiasia Inc bersama Indosat dan Datacomm meluncurkan hasil studi Indonesia Smart Region Maturity Index (ISRMI) atau Indeks Kematangan Daerah Pintar. Peluncuran ISRMI tersebut dilaksanakan pada Malam Penganugerahan Indonesia Smart Nation Award (ISNA) di Jakarta kepada kepada 45 daerah.',
    views: 0,
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    title: 'Peraih ISNA 2015 Didominasi Daerah-daerah di Pulau Jawa',
    slug: generateCreateSlug(
      'Peraih ISNA 2015 Didominasi Daerah-daerah di Pulau Jawa'
    ),
    sourceImageUrl:
      'https://smartnation.id/wp-content/uploads/2015/10/IMG_20151021_100501-360x220-1.jpg',
    publishDate: new Date('21 October 2015'),
    status: 'publish',
    categories: [
      { name: programCategory[0].name, slug: programCategory[0].slug },
      { name: programCategory[1].name, slug: programCategory[1].slug },
    ],
    excerpt:
      'Citiasia Inc bersama Indosat dan Datacomm meluncurkan hasil studi Indonesia Smart Region Maturity Index (ISRMI) atau Indeks Kematangan Daerah Pintar. Peluncuran ISRMI tersebut dilaksanakan pada Malam Penganugerahan Indonesia Smart Nation Award (ISNA) di Jakarta kepada kepada 45 daerah.',
    content:
      'Citiasia Inc bersama Indosat dan Datacomm meluncurkan hasil studi Indonesia Smart Region Maturity Index (ISRMI) atau Indeks Kematangan Daerah Pintar. Peluncuran ISRMI tersebut dilaksanakan pada Malam Penganugerahan Indonesia Smart Nation Award (ISNA) di Jakarta kepada kepada 45 daerah.',
    views: 0,
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    title: 'Kota Batu Raih Penghargaan Kota Terbaik se Indonesia',
    slug: generateCreateSlug(
      'Kota Batu Raih Penghargaan Kota Terbaik se Indonesia'
    ),
    sourceImageUrl:
      'https://smartnation.id/wp-content/uploads/2015/10/1445406917-Kota-Batu-Raih-Penghargaan-Kota-Terbaik-se-Indonesia-TINlhB0a-360x220-1.jpg',
    publishDate: new Date('21 October 2015'),
    status: 'publish',
    categories: [
      { name: programCategory[0].name, slug: programCategory[0].slug },
      { name: programCategory[1].name, slug: programCategory[1].slug },
    ],
    excerpt:
      'TIMESINDONESIA – TIMESINDONESIA, SURABAYA – Kota Batu mendapatkan penghargaan kota kecil terbaik oleh Indonesia Smart Nation Award (ISNA) 2015. Penghargaan tersebut diterima Walikota Batu bersama Ketua DPRD Kota Batu di Jakarta.',
    content:
      'TIMESINDONESIA – TIMESINDONESIA, SURABAYA – Kota Batu mendapatkan penghargaan kota kecil terbaik oleh Indonesia Smart Nation Award (ISNA) 2015. Penghargaan tersebut diterima Walikota Batu bersama Ketua DPRD Kota Batu di Jakarta.',
    views: 0,
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    title: 'Kota Batu Raih Penghargaan Kota Terbaik se Indonesia',
    slug: generateCreateSlug(
      'Kota Batu Raih Penghargaan Kota Terbaik se Indonesia'
    ),
    sourceImageUrl:
      'https://smartnation.id/wp-content/uploads/2020/10/Smart-Branding-1000x520-750x460-1-750x450.jpeg',
    publishDate: new Date('20 Feb 2024'),
    status: 'publish',
    categories: [
      { name: programCategory[0].name, slug: programCategory[0].slug },
      { name: programCategory[1].name, slug: programCategory[1].slug },
    ],
    excerpt:
      'TIMESINDONESIA – TIMESINDONESIA, SURABAYA – Kota Batu mendapatkan penghargaan kota kecil terbaik oleh Indonesia Smart Nation Award (ISNA) 2015. Penghargaan tersebut diterima Walikota Batu bersama Ketua DPRD Kota Batu di Jakarta.',
    content:
      'TIMESINDONESIA – TIMESINDONESIA, SURABAYA – Kota Batu mendapatkan penghargaan kota kecil terbaik oleh Indonesia Smart Nation Award (ISNA) 2015. Penghargaan tersebut diterima Walikota Batu bersama Ketua DPRD Kota Batu di Jakarta.',
    views: 0,
    timestamp: new Date(),
  },
  {
    id: nanoid(16),
    title:
      'Citiasia bersama Oracle Memberikan Beasiswa TI Senilai Rp 2,3 Miliar kepada Mahasiswa di Indonesia',
    slug: generateCreateSlug(
      'Citiasia bersama Oracle Memberikan Beasiswa TI Senilai Rp 2,3 Miliar kepada Mahasiswa di Indonesia'
    ),
    sourceImageUrl:
      'https://smartnation.id/wp-content/uploads/2022/07/cover_artikel_13.jpg',
    publishDate: new Date('1 July 2022'),
    status: 'publish',
    categories: [
      { name: programCategory[6].name, slug: programCategory[6].slug },
      // { name: programSubCategory[5].name, slug: programSubCategory[5].slug },
    ],
    excerpt:
      'Semakin canggihnya perkembangan teknologi menjadikan bidang teknologi informatika menjadi salah satu bidang paling diminati anak muda yang sudah familiar dengan dunia teknologi. Sehingga, Citiasia Institute dan  Oracle University Indonesia meluncurkan program beasiswa yang diberi nama Citiasia – Oracle Scholarship 2016, senilai lebih dari Rp 2,3 miliar.',
    content:
      'Semakin canggihnya perkembangan teknologi menjadikan bidang teknologi informatika menjadi salah satu bidang paling diminati anak muda yang sudah familiar dengan dunia teknologi. Sehingga, Citiasia Institute dan  Oracle University Indonesia meluncurkan program beasiswa yang diberi nama Citiasia – Oracle Scholarship 2016, senilai lebih dari Rp 2,3 miliar.',
    views: 0,
    timestamp: new Date(),
  },
];

export { programCategory, programSubCategory, program };
