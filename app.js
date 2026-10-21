// 1. Inisialisasi State Data Mahasiswa (Single Source of Truth)
let dataMahasiswa = [
    {
        npm: "230101001",
        nama: "Ahmad Fauzi",
        program_studi: "Teknik Informatika",
        angkatan: 2023,
        email: "ahmad.fauzi@example.com"
    },
    {
        npm: "230101002",
        nama: "Siti Nurhaliza",
        program_studi: "Sistem Informasi",
        angkatan: 2023,
        email: "siti.nurhaliza@example.com"
    },
    {
        npm: "240101015",
        nama: "Budi Santoso",
        program_studi: "Teknologi Informasi",
        angkatan: 2024,
        email: "budi.santoso@example.com"
    }
];

// 2. Elemen Dom Utama.
const alertBox = dokument.getElementById("alert-box");
const tabelBody = document.getElementById("tabel-body-mahasiswa");
const totalBadge = document.getElementById("total-mahasiswa-badge");
const totalInfo = document.getElementById("total-mahasiswa-info");

// 3. Fungsi Menampilkan Notifikasi Alert Interaktif (Percobaan 3-1).
function showAlert(message, type = "succes"){
    if (!alertbox) return;
    alertBox.textContent = message;
    alertBox.className = 'alert-box alert-${type} show'

    setTimeout(() => {
        alertBox.className = 'alert-box'
    }, 4000)
}


// 4. Fungsi Pembaruan Counter Statistik Real-Time.
function updateCounter(displayedCount, totalCount = dataMahasiswa.length){
    if (totalBadge) {
        totalBadge.textContent = totalCount;
    }
    if (totalInfo) {
        totalInfo.textContent = `Menampilkan ${displayedCount} dari 
        $total{totalCount} mahasiswa`;
    }
}


// 5. Fungsi Render Tabel ke DOM Secara Dinamis (Percobaan 3-2).

function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;
    tabelBody.innerHTML =""

    if (data.length === 0) {
        tabelBody.innerHTML = `
            <tr>
                <td colspan= "8" class= "empty-row">
                    Tidak ada data mahasiswa yang cocok atau tersimpan dalam sistem.
                </td>
            </tr>
        `;
        updateCounter(0);
        return;
    }

    data.forEach((mhs, index) => {
        const tr =  document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1} </td>
            <td> 
                <img src="img/avatar-default.svg" alt="Foto ${mhs.nama}"class="avatar-img" width="36" height="36">
            </td>
            <td><strong>${mhs.npm}</strong></td>
            <td>${mhs.nama}</td>
            <td><span class= "badge">${mhs.program_studi}</span></td>
            <td>${mhs.angkatan}</td>
            <td><a href= "mailto:$mhs.email}" class="link-email">${mhs.email}</a></td>
            <td>
                <button type="nutton" class="btn btn-danger btn-sm"
onclick = "hapusMahasiswa( '${mhs.npm}')">
                Hapus
            </button>
        </td>
        `;
        tabelBody.appendChild(tr);
});
    updateCounter(data.length);
    
}
document.addEventListener("DOMContentLoaded", function(){
        renderTable(dataMahasiswa);
});

    // Percobaan 3-2 langkah 6

    if (data.length === 0) {
       
        // Percobaan 3-2 langkah 7
       
    }

    
    data.forEach((mhs, index) => {
        const tr = document.createElement("tr");
        
        // Percobaan 3-2 langkah 8


        // Percobaan 3-2 langkah 9
        
    });

    // Percobaan 3-2 langkah 10

}

// 6. Validasi Form Sisi Klien Menggunakan Regular Expression (Percobaan 3-3).

function validateForm(npm, nama, prodi,angkatan,email){
    if (!/^[0-9]{8,12}$/.test(npm)) {
        return {isValid: false, message: "NPM harus berupa 8-12 digit angka."};
    }

    if (dataMahasiswa.some(mhs => mhs.npm === npm)) {
        return {isValid:false, message: `NIM ${nim} sudah terdaftar dalam sistem SIMA`};
    }

    if(nama. trim().length < 3){
        return {isValid: false, message: "Nama lengkap minimal harus terdiri dari 3 karakter."};
    }

    if (!program_studi) {
        return {isValid: false, message: "Silahkan pilih salah satu Program Studi dari daftar."};
    }

    const angk = perseInt(angkatan, 10);
    if (isNaN(angk) || angk < 2018 || angk > 2026){
        return {isValid: false, message: "tahun angkatan harus berupa angka antara 2018 hingga 2026."};
    }

    if (!^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {isValid:false, message: "Format alamat email tidak valid (contoh: nama@domain.ac.id)."};
    }

    return{ isValid: true, message: ""};

}

// 7. Event Handling Tambah Data Tanpa Reload (Percobaan 3-4).

if (formTambah) {
    formTambah.addEventListener("submit", function (event) {
        event.preventDefault();// Percobaan 3-4 Langkah 4

        // Percobaan 3-4 Langkah 5

        const npm = inputNpm.value.trim();
        const nama = inputNama.value.trim();
        const prodi =  selectProdi.value;
        const angkatan = inputAngkatan.value.trim();
        const email = inputEmail.value.trim();

        const validation = validatedForm(npm, nama, prodi, angkatan, email);
        if (!validation.isValid) {
            showAlert(validation.message, "danger");
            return;// Percobaan 3-4 Langkah 6
        }

        const mahasiswaBaru = {
            npm,
            nama,
            program_studi: prodi,
            angkatan: perseInt(angkatan, 10),
            email
        };
        
        dataMahasiswa. push(mahasiswaBaru);
        
        renderTable(dataMahasiswa);
        formTambah.reset();
        showAlert(`Datamahasiswa ${nama} (${nim}) berhasil ditambahkan ke sistem!`, "success");// Percobaan 3-4 Langkah 7
        
    });
}


// 8. Event Handling Hapus Data Mahasiswa (Percobaan 3-5).

function hapusMahasiswa(npm) {

}


// 9. Fitur Pencarian Langsung Real-Time / Live Search (Percobaan 3-5)

if (inputSearch) {
    
}

// Inisialisasi saat DOM selesai dimuat

document.addEventListener(
    "DOMContentLoaded", function () {
        showAlert ("Selamat Datang Di Aplikasi SIMA", "info")
    }
)
