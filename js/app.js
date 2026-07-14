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

 try {

        // Fetch de l'url et de la cle (Requête API)
        const response = await fetch(

            `${API_URL}/names.common/${country}`,

            {
                method:"GET",

                headers:{
                    "Authorization":
                    `Bearer ${API_KEY}`
                }

            }

        );



// Gestion erreurs
        if(response.status === 401){

            throw new Error(
                "Clé API invalide."
            );

        }

        if(response.status === 403){

            throw new Error(
                "Origine non autorisée par l'API."
            );

        }

        if(!response.ok){

            throw new Error(
                "Pays introuvable."
            );

        }


// Conversion en JSON
        const data =
        await response.json();

        console.log(data);



// Récupération du pays
        const countryData =
        data.data.objects[0];



// Nom du pays
        countryName.textContent =
        countryData.names.common;



// Drapeau du pays
        flag.src =
        countryData.flag.url_svg;

        flag.alt =
        "Drapeau de " +
        countryData.names.common;



// Capitale du pays
        capital.textContent =

        countryData.capitals

        && countryData.capitals.length > 0

        ?

        countryData.capitals[0].name

        :

        "Non disponible";


// Nombre d'habitants du pays
        population.textContent =

        countryData.population
        ?
        countryData.population
        .toLocaleString("fr-FR")
        :
        "Non disponible";


// Région du pays
        region.textContent =

        countryData.region
        ||
        "Non disponible";


// Monnaie du pays
        if(countryData.currencies){

            currency.textContent =

            Object.values(
                countryData.currencies
            )

            .map(
                item => item.name
            )

            .join(", ");
        }

        else{
            currency.textContent =
            "Non disponible";
        }


// Langues du pays
        if(countryData.languages){



            languages.textContent =


            Object.values(
                countryData.languages[0].native_name
            )


            .join("");



        }

        else{


            languages.textContent =
            "Non disponible";


        }


        // Affichage des donnees
        loading.classList.add(
            "hidden"
        );

        card.classList.remove(
            "hidden"
        );
    }


// Gestion des erreurs
    catch(error){

        console.error(error);

        loading.classList.add(
            "hidden"
        );

        card.classList.add(
            "hidden"
        );

        errorMessage.textContent =
        error.message;
    }
   
});