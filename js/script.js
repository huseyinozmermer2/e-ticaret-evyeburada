// let resimsirasi = 1;
// let toplamresim = 3;

// function resimdegistir(deg){
//     let resim = document.getElementById("resim");
//     resimsirasi += deg;
//     if (resimsirasi>toplamresim){
//             resimsirasi = 1;
//         }
//     if(resimsirasi<1){
//         resimsirasi = toplamresim;
//     }
//     resim.src = "img/" + "resim" + resimsirasi + ".jpg";
    
// }

// function tumunugizle() {
//     let alanlar = document.getElementsByName("tabMenu");
//     let uzunluk = alanlar.length;
//     for(let baslangic=0; baslangic<uzunluk; baslangic++){
//         alanlar[baslangic].style.display = "none";
//     }

// }
// function goster(deger) {
//     tumunugizle();
//     document.getElementById(deger).style.display = "block";
// }
$(function (){
    let tab = $(".tabList li"),
        content = $(".wpb_wrapper .content-banner2 .tabMenu");
    
        // ilk taba aktif sınıfını ata
        tab.filter(":first").addClass("aktif");
        //ilk hariç diğerlerini gizle
        content.filter(":not(:first)").hide();

        //tab tıklandığında
        tab.click(function (){
            let indis = $(this).index();
            tab.removeClass("aktif");
            $(this).addClass("aktif");
            content.hide().eq(indis).fadeIn(500);
        });
});

