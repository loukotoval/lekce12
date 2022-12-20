let paragraf = document.querySelector("#text")

paragraf.addEventListener("click", priKliknuti)

function priKliknuti() {
    paragraf.textContent = "Prave jsi na mne klikl"
    //paragraf.classList.add("modra")
    //přepínač
    paragraf.classList.toggle("modra")
}

/*hamburger menu*/
/*https://codepen.io/sitanotern1337/pen/xyQppZ*/
