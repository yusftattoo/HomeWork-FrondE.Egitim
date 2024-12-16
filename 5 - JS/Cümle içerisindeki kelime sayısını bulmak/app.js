let metin ="Suan nerede oldugumuz, icerisinde bulundugumuz durumu oldukca etkiliyor. Suan da buradasiniz.";

let harf = prompt("Harfi giriniz.");

let sonuc = bul(harf);
alert("Harf sayısı : " + sonuc);

function bul(harf){
    let toplam =0;
    for(let i =0; i<metin.length ; i++){
        if(metin.charAt(i)===harf){
            toplam+=1;
        }
    }
    return toplam;
}

// aynı örneğin farklı s.....

let metinA ="Suan nerede oldugumuz, icerisinde bulundugumuz durumu oldukca etkiliyor. Suan da buradasiniz.";

bul("a");

function bul(harf){
    let toplamA =0;
    for(let i =0; i<metinA.length ; i++){
        if(metinA.charAt(i)===harf){
            toplamA+=1;
        }
    }
    console.log("Harf sayısı : " + toplamA);
}