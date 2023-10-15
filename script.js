const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navigasi ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


/* scricpt home*/
var filmElements = document.getElementsByClassName("film1");
var elemenBerubahElements = document.getElementsByClassName("sinopsis1");

for (var i = 0; i < filmElements.length; i++) {
    filmElements[i].addEventListener("click", function() {
        var elemen = this.nextElementSibling;

        if (elemen.style.display === "none" || elemen.style.display === "") {
            elemen.style.display = "block"; // Tampilkan elemen jika sembunyi
        } else {
            elemen.style.display = "none"; // Sembunyikan elemen jika terlihat
        }
    });
    
}

var filmElements = document.getElementsByClassName("film2");
var elemenBerubahElements = document.getElementsByClassName("sinopsis2");

for (var i = 0; i < filmElements.length; i++) {
    filmElements[i].addEventListener("click", function() {
        var elemen = this.nextElementSibling;

        if (elemen.style.display === "none" || elemen.style.display === "") {
            elemen.style.display = "block"; // Tampilkan elemen jika sembunyi
        } else {
            elemen.style.display = "none"; // Sembunyikan elemen jika terlihat
        }
    });
    
}

var filmElements = document.getElementsByClassName("film3");
var elemenBerubahElements = document.getElementsByClassName("sinopsis3");

for (var i = 0; i < filmElements.length; i++) {
    filmElements[i].addEventListener("click", function() {
        var elemen = this.nextElementSibling;

        if (elemen.style.display === "none" || elemen.style.display === "") {
            elemen.style.display = "block"; // Tampilkan elemen jika sembunyi
        } else {
            elemen.style.display = "none"; // Sembunyikan elemen jika terlihat
        }
    });
    
}

var filmElements = document.getElementsByClassName("film4");
var elemenBerubahElements = document.getElementsByClassName("sinopsis4");

for (var i = 0; i < filmElements.length; i++) {
    filmElements[i].addEventListener("click", function() {
        var elemen = this.nextElementSibling;

        if (elemen.style.display === "none" || elemen.style.display === "") {
            elemen.style.display = "block"; // Tampilkan elemen jika sembunyi
        } else {
            elemen.style.display = "none"; // Sembunyikan elemen jika terlihat
        }
    });
    
}

var filmElements = document.getElementsByClassName("film5");
var elemenBerubahElements = document.getElementsByClassName("sinopsis5");

for (var i = 0; i < filmElements.length; i++) {
    filmElements[i].addEventListener("click", function() {
        var elemen = this.nextElementSibling;

        if (elemen.style.display === "none" || elemen.style.display === "") {
            elemen.style.display = "block"; // Tampilkan elemen jika sembunyi
        } else {
            elemen.style.display = "none"; // Sembunyikan elemen jika terlihat
        }
    });
    
}

/*scricpt dom */
document.addEventListener("DOMContentLoaded", function() {
    const tambahNamaBtn = document.querySelector(".tambah-nama-btn");
    const ubahWarnaBtn = document.querySelector(".ubah-warna-btn");
    const tambahFooterBtn = document.querySelector(".tambah-footer-btn");
    const namaInput = document.querySelector(".nama-input");
    const namaList = document.querySelector(".nama-list");
    const footer = document.querySelector(".footer");

    tambahNamaBtn.addEventListener("click", function() {
      const nama = namaInput.value.trim();
      if (nama) {
        const newRow = namaList.insertRow(namaList.rows.length);
        const cell = newRow.insertCell(0);
        cell.textContent = nama;
        namaInput.value = "";
      }
    });

    ubahWarnaBtn.addEventListener("click", function() {
      const namaItems = namaList.getElementsByTagName("tr");
      for (let i = 0; i < namaItems.length; i++) {
        namaItems[i].style.backgroundColor = getRandomColor();
      }
    });

    tambahFooterBtn.addEventListener("click", function() {
        if (footer.classList.contains("hidden")) {
            footer.classList.remove("hidden");
            tambahFooterBtn.textContent = "Hide Footer";
          } else {
            footer.classList.add("hidden");
            tambahFooterBtn.textContent = "Add Footer";
          }
        });

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });

  /*  script layout */
  const btn1= document.getElementById("btn1");
const li_= document.getElementsByTagName('li');
for(let i=0; i<li_.length;i++)
{
    li_[i].style.backgroundColor="none";
}

btn1.addEventListener('click',function(){
    for(let i=0; i<li_.length;i++){
        li_[i].style.backgroundColor="pink";
    }
btn1.style.backgroundColor="orange";
})
li_[4].addEventListener('mouseenter',function(){
    li_[4].innerHTML="Lama";
    li_[4].style.color="white";
    li_[4].style.backgroundColor="lightblue";
})
li_[5].addEventListener('mouseenter',function(){
    li_[5].innerHTML="baru";
    li_[5].style.color="white";
    li_[5].style.backgroundColor="lightblue";
})
li_[6].addEventListener('mouseenter',function(){
    li_[6].innerHTML="suka";
    li_[6].style.color="white";
    li_[6].style.backgroundColor="lightblue";
})

document.getElementById('btn2').addEventListener('click',function(){
    for(let i=0; i<li_.length;i++){
        li_[i].style.backgroundColor="red";
    }
    btn2.style.backgroundColor="blue";
})

document.getElementById('btn3').addEventListener('click',function(){
    for(let i=0; i<li_.length;i++){
        li_[i].style.backgroundColor="green";
    }
    btn3.style.backgroundColor="yellow";
})

document.getElementById('btn4').addEventListener('click',function(){
    for(let i=0; i<li_.length;i++){
        li_[i].style.backgroundColor="black";
    }
    btn4.style.backgroundColor="gray";
})

document.getElementById('btn5').addEventListener('click',function(){
    for(let i=0; i<li_.length;i++){
        li_[i].style.backgroundColor="orange";
    }
    btn5.style.backgroundColor="brown";
})

document.getElementById('btn6').addEventListener('click',function(){
    for(let i=0; i<li_.length;i++){
        li_[i].style.backgroundColor="blue";
    }
    btn6.style.backgroundColor="orange";
})

document.getElementById('btn7').addEventListener('click',function(){
    for(let i=0; i<li_.length;i++){
        li_[i].style.backgroundColor="teal";
    }
    btn7.style.backgroundColor="blue";
})

document.getElementById('btn8').addEventListener('click',function(){
    for(let i=0; i<li_.length;i++){
        li_[i].style.backgroundColor="plum";
    }
    btn8.style.backgroundColor="red";
})

