document.addEventListener('DOMContentLoaded', function() {
    var x = document.getElementsByTagName("body")[0];
    x.style.transition = '.9s';
    document.querySelector(".brand-logo").style.transition = '2s';
    document.querySelector(".brand-logo").style.opacity = '1';
    x.style.opacity = '1';
    document.querySelector(".jumbotron h2").style.cssText = 'transform: translateY(0); transition: .8s';
    document.querySelector(".jumbotron .btn").style.cssText = 'transform: translateY(0);  transition: 1.1s';
    setTimeout(() => {
        document.querySelector(".jumbotron h2").style.cssText = 'transform: translateY(0); transition: none';
        document.querySelector(".jumbotron .btn").style.cssText = 'transform: translateY(0); transition: none';
    }, 1300);
    
});
// CAROUSEL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.gambar1.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true
    });
    let indicatorItems = document.querySelectorAll('.gambar1.carousel .indicator-item'),
      slideTime = 3500,
      activeClass = "active";

    setInterval(() => {
        indicatorItems.forEach(el => {
        if (el.classList.contains(activeClass)) {
            sib = el.nextElementSibling;
            if (sib == null) {
            indicatorItems[0].click();
            } else {
            sib.click()
            }
        }
        });
    }, slideTime);
    
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.gambar2.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        padding: 100,
    });
    let indicatorItems = document.querySelectorAll('.gambar2.carousel .indicator-item'),
      slideTime = 4500,
      activeClass = "active";

    setInterval(() => {
        indicatorItems.forEach(el => {
        if (el.classList.contains(activeClass)) {
            sib = el.nextElementSibling;
            if (sib == null) {
            indicatorItems[0].click();
            } else {
            sib.click()
            }
        }
        });
    }, slideTime);
    
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.komentar.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        padding: 200,
    });

    let indicatorItems = document.querySelectorAll('.komentar.carousel .indicator-item'),
      slideTime = 4500,
      activeClass = "active";

    setInterval(() => {
        indicatorItems.forEach(el => {
        if (el.classList.contains(activeClass)) {
            sib = el.nextElementSibling;
            if (sib == null) {
            indicatorItems[0].click();
            } else {
            sib.click()
            }
        }
        });
    }, slideTime);
});

// SLIDENAV
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right'
    });
  });

// TOOLTIP
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});

// PARALLAX EFFECT
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

// SELECT
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

// DETAIL
document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector(".bungkus");
    let gede = document.querySelector(".gede");
    let tempat = document.querySelector(".tempat");
    let deskripsi = document.querySelector(".deskripsi");
    let alamat = document.querySelector(".alamat");
    let lokasi = document.querySelector(".lokasi");
    let btnModal = document.querySelector(".bungkus .modal-trigger");
    let imgModal = document.querySelector(".bungkus .modal-content .responsive-img");
    let judulModal = document.querySelector(".bungkus .modal-content h3");
    let deskripsiModal = document.querySelector(".bungkus .modal-content p");
    let lokasiModal = document.querySelector(".bungkus .modal-content iframe");

    container.addEventListener('click', function(e){
        if(e.target.className == 'responsive-img thumb'){
            gede.src = e.target.src;
            gede.classList.add('fade');
            setTimeout(function(){
                gede.classList.remove('fade');
            }, 600);
            tempat.innerHTML = e.target.parentElement.nextElementSibling.children[0].innerText;
            alamat.innerHTML = e.target.parentElement.nextElementSibling.children[2].innerText;
            deskripsi.innerHTML = e.target.parentElement.nextElementSibling.children[3].innerText;
            lokasi.src = e.target.parentElement.nextElementSibling.children[4].src;
    
        }
    });
    btnModal.addEventListener('click', function(){
        imgModal.src = gede.src;
        judulModal.innerText = tempat.innerText;
        deskripsiModal.innerText = deskripsi.innerText;
        lokasiModal.src = lokasi.src;
    });
});

// ADMIN KOMENTAR
document.addEventListener('DOMContentLoaded', function() {
    // BUTTON
    let editKomen = document.querySelectorAll(".komen.green");
    let lihatKomen = document.querySelectorAll(".komen.blue");
    let hapusKomen = document.querySelectorAll(".komen.red");
    // EDIT
    let editWisata = document.querySelector("#komentar-wisata");
    let editKontak = document.querySelector("#komentar-kontak");
    let editIsi = document.querySelector("#komentar-isi");
    let editEmail = document.querySelector("#komentar-email");

    // LIHAT
    let lihatWisata = document.querySelector("#lihat-komentar-wisata");
    let lihatKontak = document.querySelector("#lihat-komentar-kontak");
    let lihatIsi = document.querySelector("#lihat-komentar-isi");
    let lihatEmail = document.querySelector("#lihat-komentar-email");

    lihatKomen.forEach(tombol1 => {
        tombol1.addEventListener('click', function(e){
            lihatWisata.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            lihatKontak.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            lihatIsi.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            lihatEmail.value = e.target.parentElement.previousElementSibling.innerText;
        });
    });
    editKomen.forEach(tombol2 => {
        tombol2.addEventListener('click', function(e){
            editWisata.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            editKontak.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            editIsi.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            editEmail.value = e.target.parentElement.previousElementSibling.innerText;
        });
    });
});

// ADMIN EDIT
document.addEventListener('DOMContentLoaded', function() {
    let btnEdit = document.querySelectorAll(".admin.green");
    let btnView = document.querySelectorAll(".admin.blue");
    let btnDelete = document.querySelectorAll(".admin.red");
    // LIHAT
    let lihatIndex = document.querySelector("#lihat-index");
    let lihatWisata = document.querySelector("#lihat-wisata");
    let lihatJenis = document.querySelector("#lihat-jenis");
    let lihatKontak = document.querySelector("#lihat-kontak");
    let lihatAlamat = document.querySelector("#lihat-alamat");
    let lihatHp = document.querySelector("#lihat-hp");
    let lihatEmail = document.querySelector("#lihat-email");
    // EDIT
    let editIndex = document.querySelector("#edit-index");
    let editWisata = document.querySelector("#edit-wisata");
    let editJenis = document.querySelector("#edit-jenis");
    let editKontak = document.querySelector("#edit-kontak");
    let editAlamat = document.querySelector("#edit-alamat");
    let editHp = document.querySelector("#edit-hp");
    let editEmail = document.querySelector("#edit-email");

    btnView.forEach(btn1 => {
        btn1.addEventListener('click', function(e){
            lihatWisata.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            lihatJenis.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            lihatKontak.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            lihatAlamat.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            lihatHp.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            lihatEmail.value = e.target.parentElement.previousElementSibling.innerText;
        });
    });

    btnEdit.forEach(btn2 => {
        btn2.addEventListener('click', function(e){
            editWisata.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            editJenis.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            editKontak.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            editAlamat.value = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            editHp.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            editEmail.value = e.target.parentElement.previousElementSibling.innerText;
        });
    });

    btnDelete.forEach(btn3 => {
        btn3.addEventListener('click', function(e){
            confirm("Yakin ingin menghapus data??")
        });
    });
});


// WINDOW SCROLL
window.addEventListener('scroll', function(){
    let navbar = document.querySelector(".navbar-fixed nav");
    let tulisan = document.querySelector(".tulisan");
    let jumbotron = document.querySelector(".jumbotron");
    let judul = document.querySelector(".jumbotron h2");
    let btnJumbotron = document.querySelector(".jumbotron .btn");
    let wScroll = this.pageYOffset;
    if (wScroll > 100){
        navbar.style.backgroundColor = '#fb8c00';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
    jumbotron.style.backgroundPosition = '0 ' + wScroll/-4 + 'px' ;
    judul.style.transform = 'translateY('+ wScroll/-2 +'px'+ ')';
    btnJumbotron.style.transform = 'translateY('+ wScroll/-2.5 +'px'+ ')';

});

// MODAL TRIGGER
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        endingTop: '5%'
    });
  });

// BUTTON RESET

document.addEventListener('DOMContentLoaded', function() {
    let btnReset = document.querySelector(".reset");
    btnReset.addEventListener('click', function(e){
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.children[0].children[1].value = "";
        e.target.previousElementSibling.previousElementSibling.children[0].children[1].value = "";
    });
});