window.onload = function () {
    var saniye = 00;
    var salise = 00;
    var saniyeElemani = document.getElementById('saniye');
    var saliseElemani = document.getElementById('salise');
    var baslamaButonu = document.getElementById('baslama');
    var durdurmaButonu = document.getElementById('durdurma');
    var sifirlamaButonu = document.getElementById('sifirlama');
    var Interval;
    durdurmaButonu.style.display = "none";
    baslamaButonu.style.display = "inline";
    


    baslamaButonu.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(zamaniBaslat, 10);
        baslamaButonu.style.display = "none";
        durdurmaButonu.style.display = "inline";
    }

    durdurmaButonu.onclick = function () {
        clearInterval(Interval);
        durdurmaButonu.style.display = "none";
        baslamaButonu.style.display = "inline";
        baslamaButonu.innerHTML = 'Devam';
    }

    sifirlamaButonu.onclick = function () {
        clearInterval(Interval);
        salise = "00";
        saniye = "00";
        saliseElemani.innerHTML = salise;
        saniyeElemani.innerHTML = saniye;
        baslamaButonu.innerHTML = 'Başla';
        durdurmaButonu.style.display = "none";
        baslamaButonu.style.display = "inline";
    }

    function zamaniBaslat() {
        salise++;

        if (salise <= 9) {
            saliseElemani.innerHTML = "0" + salise;
        }

        if (salise > 9) {
            saliseElemani.innerHTML = salise;
        }
        if (salise > 99) {
            console.log("saniye");
            saniye++;
            saniyeElemani.innerHTML = "0" + saniye;
            salise = 0;
            saliseElemani.innerHTML = "0" + 0;
        }

        if (saniye > 9) {
            saniyeElemani.innerHTML = saniye;
        }

    }
}