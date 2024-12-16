let userName = prompt("Lütfen adınızı giriniz:");
document.getElementById("myName").innerHTML = userName ? userName : "Ziyaretçi";


function showDateTime() {
    const dateTimeElement = document.getElementById("myClock");
    const now = new Date();

    // Güncel tarihi ve saati al
    const day = now.getDate();
    const month = now.getMonth() + 1; // Aylar 0'dan başladıgı için
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Tarih ve saat formatını ayarlayın
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // HTML'de tarih ve saati göster
    dateTimeElement.innerHTML = `Tarih: ${formattedDate}, Saat: ${formattedTime}`;
}

// Her saniyede bir  güncelle
setInterval(showDateTime, 1000);



  