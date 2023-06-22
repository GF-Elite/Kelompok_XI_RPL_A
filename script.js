window.addEventListener('DOMContentLoaded', function() {
  var students = [
{
      name: 'Bunga mutiara kasih',
      umur: 17,
      Jurusan: 'Rekayasa Perangkat Lunak',
      hobi: 'nonton',
      photo: 'bunga.jpg',
      kata:'sejauh apapun kamu mengejar dunia,garis finish ny tetaplah kematian',
      alamat: 'Petangguhan dsn 3',
      
    },
    {
      name: 'Jessika Fajariah',
      umur: 17,
      Jurusan: 'Rekayasa Perangkat Lunak (Rpl)',
      hobi: 'healing/Rebahan',
      photo: 'jesika1.jpg',
      kata:'Ketika kamu merasa kehilangan harapan, ingat bahwa Tuhan telah menciptakan rencana terindah untuk hidup kita.',
      alamat: 'Pasar Miring, Dsn Sempurna No 46A ',
      
    },
    {
      name: 'Duwi Yanti',
      umur: 17,
      Jurusan: 'Rekayasa Perangkat Lunak',
      hobi: 'healing',
      photo: 'duwi.jpg',
      kata:'Ketika kamu merasa kehilangan harapan, ingat bahwa Tuhan telah menciptakan rencana terindah untuk hidup kita.',
      alamat: 'Desa Kramat gajah dsn 2',
      
    },
     {
      name: 'Marisa Manullang',
      umur: 17,
      Jurusan: 'Rekayasa Perangkat Lunak',
      hobi: 'makan',
      photo: 'marisa.jpg',
      kata:'Karena masa depan sungguh ada dan harapanmu tidak akan hilang',
      alamat: 'Bahsidua-dua Dsn 3',
      
    },
         {
      name: 'Feby Pratiwi ',
      umur: 17,
      Jurusan: 'Rekayasa Perangkat Lunak',
      hobi: '',
      photo: 'feby.jpg',
      kata:'',
      alamat: 'Pulau gambar dsn 17',
      
    }, 
        {
      name: 'Asyifa Putri Agisti',
      umur: 18,
      Jurusan: 'COMPUTER SCIENCE',
      hobi: 'coding',
      photo: 'asifa.jpg',
      kata:'Tidak ada usaha yg mengkhianati hasil',
      alamat: 'Pagar Merbau 1 dns lV',
      motivasi: 'coding is fun',
    },
        {
      name: 'melati',
      umur: 18,
      Jurusan: 'COMPUTER SCIENCE',
      hobi: 'coding',
      photo: 'melati.jpg',
      kata:'aku',
      alamat: 'Jalan Jenderal Sudirman No. 123, Jakarta',
      motivasi: 'coding is fun',
    },

{
      name: 'Alvin Raditya Risby',
      umur: 18,
      Jurusan: 'Rekayasa Perangkat Lunak',
      hobi: 'futsal',
      photo: 'Alvin.jpg',
      kata:'jangan melihat kebelakang tapi lihat lah ke depan karna di belakang itu masa lalu dan di depan mu ada masa depan yg harus di capai',
      alamat: 'pasar miring dsn utama',
    
    },
        {
      name: 'andika',
      umur: 18,
      Jurusan: 'COMPUTER SCIENCE',
      hobi: 'coding',
      photo: 'saya.jpg',
      kata:'Error dalam coding bukanlah kegagalan, melainkan kesempatan untuk menemukan solusi yang lebih baik.',
      alamat: 'Jalan Jenderal Sudirman No. 123, Jakarta',
      
    },
    // Data siswa lainnya
    // ...
  ];

  var studentsContainer = document.getElementById('students-container');

  students.forEach(function(student) {
    var studentCard = document.createElement('div');
    studentCard.className = 'student-card';

    var photoImg = document.createElement('img');
    photoImg.src = student.photo;
    photoImg.alt = student.name;
    photoImg.setAttribute('data-bs-toggle', 'modal');
    photoImg.setAttribute('data-bs-target', '#studentModal');
    photoImg.addEventListener('click', function() {
      displayStudentDetails(student);
    });
    studentCard.appendChild(photoImg);

    var infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    var nameHeading = document.createElement('h2');
    nameHeading.textContent = student.name;
    infoDiv.appendChild(nameHeading);

    var umurParagraph = document.createElement('p');
    umurParagraph.innerHTML = '<span class="info-label">Umur:</span> <span class="info-value">' + student.umur + '</span>';
    infoDiv.appendChild(umurParagraph);

    var JurusanParagraph = document.createElement('p');
    JurusanParagraph.innerHTML = '<span class="info-label">Jurusan:</span> <span class="info-value">' + student.Jurusan + '</span>';
    infoDiv.appendChild(JurusanParagraph);

    studentCard.appendChild(infoDiv);

    studentsContainer.appendChild(studentCard);
  });

  function displayStudentDetails(student) {
    var modalPhoto = document.getElementById('modalPhoto');
    var modalNama = document.getElementById('modalNama');
    var modalumur = document.getElementById('modalumur');
    var modalMajor = document.getElementById('modalMajor');
    var modalalamat = document.getElementById('modalalamat');
    var modalHobby = document.getElementById('modalHobby');
    var modalkata = document.getElementById('modalkata');

    modalPhoto.src = student.photo;
    modalNama.textContent = 'Nama: ' + student.name;
    modalumur.textContent = 'Umur: ' + student.umur;
    modalMajor.textContent = 'Jurusan: ' + student.Jurusan;
    modalalamat.textContent = 'Alamat: ' + student.alamat;
    modalHobby.textContent = 'Hobby: ' + student.hobi;
    modalkata.textContent = 'Motivasi: ' + student.kata;
  }
});
