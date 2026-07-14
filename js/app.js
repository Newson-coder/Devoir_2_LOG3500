// Sélection des éléments du DOM par leur ID

const form = document.getElementById("countryForm");

const input = document.getElementById("countryInput");

const errorMessage = document.getElementById("errorMessage");

const loading = document.getElementById("loading");

const card = document.getElementById("countryCard");

const flag = document.getElementById("flag");

const countryName = document.getElementById("countryName");

const capital = document.getElementById("capital");

const population = document.getElementById("population");

const region = document.getElementById("region");

const currency = document.getElementById("currency");

const languages = document.getElementById("languages");



// Mise en place des donnees de l'API
const API_KEY = "rc_live_f522a34a78044a31a67a4d2ce5731882";

const API_URL = "https://api.restcountries.com/countries/v5";



// Effacage des erreurs pendant la saisie
input.addEventListener("input", () => {

    errorMessage.textContent = "";

    input.removeAttribute("aria-invalid");

});



// Lacement de la recherche (Soumission)
form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const country =
    input.value.trim();

// Validation
    if(country === ""){

        input.setAttribute(
            "aria-invalid",
            "true"
        );

        errorMessage.textContent =
        "Veuillez entrer le nom d'un pays.";

        return;

    }


    // Préparation pour l'affichage
    card.classList.add("hidden");

    loading.classList.remove("hidden");

    errorMessage.textContent = "";


   
});