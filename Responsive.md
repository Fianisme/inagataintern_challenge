Bagian default 1440px :
Di Dashboard.jsx => ada Quick Transfer dan Balance History line chart, itu masih belum sesuai desain di folder gravity/Main Dashboard.png masih gepeng juga dari keliatannya

Bagian tablet 1024px :
Dashboard.jsx => bagian card mastercard itu dia kayak gepeng menyusut kesamping, tidak mirip dengan di mobile atau di desktop 1440px dia jadi gepeng, sama halnya dengan Quick Transfer dan Balance History seperti di Default dia masih keliatan gepeng dan desainnya berubah dari contoh
Loans.jsx => pada bagian card yang isinya Loans_stats.md itu gepeng, dia berbeda dengan desktop atau tablet.

Bagian Mobile :
Dashboard.jsx => di bagian mycards itu harusnya secara kondisi iddle atau awal dibuka dia memposisikan kedua card itu agak ke kanan mungkin dengan margin kiri sekitar berapa px aja gitu, sesuai dengan di gravity/responsive/Mobile375px.png, lalu bagian balance history dan quick transfer juga sama, posisi desain tidak sesuai dan gepeng
Loans.jsx => untuk ukuran dan bentuk dari Loans_stats.jsx sudah sesuai dan presisi, namun penempatannya bukan bertumpuk kebawah tapi slideable ke samping. dan pada bagian tabel atau Loans_overview itu hanya dimasukan saja kolom Loan Money, Left to Repay, dan button Repay saja, sisanya dihilangkan jika di mobile.
Settings.jsx => dia bagian edit profile itu kena break jadi bertumpuk ke bawah, menjadikan desain tidak konsisten, lalu untuk garis underline semakin ke kanan itu melebihi tulisan panel yang di underline
