// Data mahasiswa dengan status penerimaan panitia
export enum StudentStatus {
  Accepted = 'accepted',
  Rejected = 'rejected',
}

export interface Student {
  nim: string;
  name: string;
  status: StudentStatus;
  division?: string;
}

export const studentsData: Student[] = [
  // Mahasiswa yang diterima
  { nim: "2438016017", name: "M. Anang Alief A I S", status: StudentStatus.Accepted, division: "Acara" },
  { nim: "2400016013", name: "Ichasia Nazahrani Widia", status: StudentStatus.Accepted, division: "Acara" },
  { nim: "2400016012", name: "Meylani", status: StudentStatus.Accepted, division: "Acara" },
  { nim: "2400017005", name: "Refah Naura Hayati", status: StudentStatus.Accepted, division: "Acara" },
  { nim: "2400016018", name: "Ariani Putri Andini", status: StudentStatus.Accepted, division: "HPD" },
  { nim: "2400016098", name: "Dama Valerian", status: StudentStatus.Accepted, division: "HPD" },
  { nim: "2438015011", name: "Athifah Ulya Azizah", status: StudentStatus.Accepted, division: "HPD" },
  { nim: "2311016058", name: "M. Zidan Assyafi Saputra", status: StudentStatus.Accepted, division: "HPD" },
  { nim: "2415015008", name: "Pramesti Diva Kartika", status: StudentStatus.Accepted, division: "Medis" },
  { nim: "2300016151", name: "Heri Arista", status: StudentStatus.Accepted, division: "Medis" },
  { nim: "2300016085", name: "Akbar Yudho Intiyo", status: StudentStatus.Accepted, division: "Medis" },
  { nim: "2300016072", name: "Zahrah Salsabila D I", status: StudentStatus.Accepted, division: "Medis" },
  { nim: "2400016028", name: "Salsa Khaerunnisa", status: StudentStatus.Accepted, division: "KSK" },
  { nim: "2400016022", name: "Aditya Sapta Pratama", status: StudentStatus.Accepted, division: "Kreatif" },
  { nim: "2400016011", name: "Ridho Kurniawan", status: StudentStatus.Accepted, division: "Kreatif" },
  { nim: "2400016090", name: "Akmaliyah Hidayatul Jannah", status: StudentStatus.Accepted, division: "Kreatif" },
  { nim: "2400016025", name: "Zulfan Haidar Hammam", status: StudentStatus.Accepted, division: "Kreatif" },
  { nim: "2300016084", name: "Salsabila Azzahra", status: StudentStatus.Accepted, division: "Kreatif" },
  { nim: "2400016051", name: "Kesya Alleta Arizona", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2400016075", name: "Helen Noya", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2400016058", name: "Alvia Fatma Suttawati", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2300016047", name: "Viranti Deratia Akbari", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2300016135", name: "Aliya Qurrota A", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2300016035", name: "Alvindra Rramadhan", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2300015012", name: "Arsyad Nur Faalih", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2300016083", name: "M. Faiz Rabbany", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2300016134", name: "M.Aldi Fathurroji", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2300017012", name: "Raditya Aksa Indramulia", status: StudentStatus.Accepted, division: "Fasilitator" },
  { nim: "2400016072", name: "Sintya Gati Hananingtyas", status: StudentStatus.Accepted, division: "Perlogkom" },
  { nim: "2400016014", name: "Herissa Zaskia Larasati", status: StudentStatus.Accepted, division: "Perlogkom" },
  { nim: "2400016043", name: "Riza Annafila Balqis", status: StudentStatus.Accepted, division: "Perlogkom" },
  { nim: "2400016060", name: "Devi Puspa Rosalinda", status: StudentStatus.Accepted, division: "Perlogkom" },
  { nim: "2300016133", name: "Bintang Deprian", status: StudentStatus.Accepted, division: "Perlogkom" },
  { nim: "2300016109", name: "M. Nabil Niode", status: StudentStatus.Accepted, division: "Perlogkom" },
  { nim: "2300016053", name: "Ardiansyah", status: StudentStatus.Accepted, division: "Perlogkom" },
  { nim: "2400016049", name: "Fadil Muhammad", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2400016084", name: "Yoleta Aisha Setyorini", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2400016044", name: "Adrian Fathir", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2400016048", name: "M. Zaky Hafizan", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2438016047", name: "Nazwa Meilany Fauziah", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2300016098", name: "Muhammad Alif", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2300015008", name: "Della Asta Lusiana", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2400014003", name: "Astin Singkang", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2300016021", name: "Adam Bimantara", status: StudentStatus.Accepted, division: "Lapangan" },
  { nim: "2400014003", name: "Astin Singkang", status: StudentStatus.Accepted, division: "Lapangan" },
  
  // Mahasiswa yang tidak diterima
  { nim: "2415015009", name: "Audry Ardityah", status: StudentStatus.Rejected },
  { nim: "2415016102", name: "Suci Sulistyowati", status: StudentStatus.Rejected },
  { nim: "2415015006", name: "Risdawati", status: StudentStatus.Rejected },
  { nim: "2400016092", name: "Nova Syafa Calista", status: StudentStatus.Rejected },
  { nim: "2400016015", name: "Abdul Hakim", status: StudentStatus.Rejected },
  { nim: "2400016093", name: "Kanaya Ailsa Sudarjono", status: StudentStatus.Rejected },
  { nim: "2415016099", name: "Erika Ayu Febrianti", status: StudentStatus.Rejected },
  { nim: "2400016030", name: "Dimaz Nugraha", status: StudentStatus.Rejected },
  { nim: "2400016010", name: "Muhammad Zidan Awwalu Naja", status: StudentStatus.Rejected },
  { nim: "2400016020", name: "Naedhiah Mokessa Della", status: StudentStatus.Rejected },
  { nim: "2400016021", name: "Putri Miftakhul Jannah", status: StudentStatus.Rejected },
  { nim: "2400016091", name: "Zakwan Diaul Ikhsan", status: StudentStatus.Rejected },
  { nim: "2300016114", name: "Listiana Meilani", status: StudentStatus.Rejected },
];

const studentsMap = new Map<string, Student>(
  studentsData.map(student => [student.nim, student])
);

export const findStudentByNim = (nim: string): Student | null =>
  studentsMap.get(nim) || null;