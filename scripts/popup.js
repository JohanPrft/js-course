/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
 *********************************************************************************/


/**
 * Cette fonction affiche la popup pour partager son score. 
 */
function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}

/**
 * Cette fonction cache la popup pour partager son score. 
 */
function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}


/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
    let btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
        afficherPopup()
    })

    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popupBackground) {
            // Alors on cache la popup
            cacherPopup()
        }
    })

    // Ecoute click form
    gatherPopupInfo();

}

function gatherPopupInfo() {
    let form = document.querySelector(".popup form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let nameField = document.getElementById("nom");
        let emailField = document.getElementById("email");

        let name = nameField.value;
        let email = emailField.value;

        try {
            validerNom(name);
            validerMail(email);
            afficherEmail(name, email, score.toString());
        }
        catch(erreur) {
            console.log(erreur);
        }
    })
}

function validerNom(nom) {
    let regex = new RegExp(/^[a-z ,.'-]+$/);
    if (!regex.test(nom))
        throw new Error("Le nom n'est pas valide");
}

function validerMail(mail) {
    let regex = new RegExp('.+\@.+\\..+');
    if (!regex.test(mail))
        throw new Error("L'email n'est pas valide");
}