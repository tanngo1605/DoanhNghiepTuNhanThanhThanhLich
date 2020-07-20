function scrollToDichVu (){
    let dichVu = document.getElementById("dichVu");
    dichVu.scrollIntoView({behavior:"smooth"})
}

function scrollToSanPham() {
    let sanPham = document.getElementById("sanPham");
    sanPham.scrollIntoView({behavior: "smooth"});
}

function scrollToLienHe() {
    let lienHe = document.getElementById('lienHe');
    lienHe.scrollIntoView({behavior:"smooth"})
}

function scrollToTop () {
    window.scrollTo(0, 0)
}