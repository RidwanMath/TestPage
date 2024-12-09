// Add JS here
// Data tulisan dalam array
const tulisan = [
    { id: 1, judul: 'Judul Tulisan 1', deskripsi: 'Deskripsi singkat tulisan 1.', link: '/tulisan/1' },
    { id: 2, judul: 'Judul Tulisan 2', deskripsi: 'Deskripsi singkat tulisan 2.', link: '/tulisan/2' },
    { id: 3, judul: 'Judul Tulisan 3', deskripsi: 'Deskripsi singkat tulisan 3.', link: '/tulisan/3' },
    { id: 4, judul: 'Judul Tulisan 4', deskripsi: 'Deskripsi singkat tulisan 4.', link: '/tulisan/4' },
    { id: 5, judul: 'Judul Tulisan 5', deskripsi: 'Deskripsi singkat tulisan 5.', link: '/tulisan/5' },
    { id: 6, judul: 'Judul Tulisan 6', deskripsi: 'Deskripsi singkat tulisan 6.', link: '/tulisan/6' },
    // Tambahkan lebih banyak tulisan sesuai kebutuhan
];

// Fungsi untuk menampilkan daftar tulisan
function tampilkanTulisan() {
    const listTulisanElement = document.getElementById('listTulisan');

    tulisan.forEach(tulisan => {
        // Membuat elemen <li> untuk setiap tulisan
        const li = document.createElement('li');

        // Menambahkan judul tulisan
        const h3 = document.createElement('h3');
        h3.textContent = tulisan.judul;

        // Menambahkan deskripsi tulisan
        const p = document.createElement('p');
        p.innerHTML = `${tulisan.deskripsi} <a href="${tulisan.link}">Baca selengkapnya</a>`;

        // Menambahkan elemen judul dan deskripsi ke dalam <li>
        li.appendChild(h3);
        li.appendChild(p);

        // Menambahkan <li> ke dalam <ul>
        listTulisanElement.appendChild(li);
    });
}

// Memanggil fungsi untuk menampilkan tulisan ketika halaman dimuat
document.addEventListener('DOMContentLoaded', tampilkanTulisan);
