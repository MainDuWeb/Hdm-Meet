
// // MODAL AJOUTER UN UTILISATEUR 
    
// const modalContainer = document.querySelector(".modal-container");
// const modalTriggers = document.querySelectorAll(".modal-trigger-ajouter");

// modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

// function toggleModal() {
//     modalContainer.classList.toggle("active")
// }

// //MODAL MODIFIER UN UTILISATEUR 
// const modalContainerModifier = document.querySelector(".modifier-container");
// const modalTriggersModifier = document.querySelectorAll(".modal-trigger-modifier");

// modalTriggersModifier.forEach(trigger => {
//     trigger.addEventListener("click", toggleModalModifier);
// });

// function toggleModalModifier() {
//     modalContainerModifier.classList.toggle("active");
// }

// //MODAL SUPP UN UTILISATEUR 
// const modalContainerSupprimer = document.querySelector(".supprimer-container");
// const modalTriggersSupprimer = document.querySelectorAll(".modal-trigger-supprimer");

// modalTriggersSupprimer.forEach(trigger => {
//     trigger.addEventListener("click", toggleModalSupprimer);
// });

// function toggleModalSupprimer() {
//     modalContainerSupprimer.classList.toggle("active");
// }

//MODAL

function setupModal(modalContainerClass, modalTriggerClass) {
    const modalContainer = document.querySelector(modalContainerClass);
    const modalTriggers = document.querySelectorAll(modalTriggerClass);

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            modalContainer.classList.toggle("active");
        });
    });
}

// Modal AJOUOTER un Utilisateur
setupModal(".modal-container", ".modal-trigger-ajouter");

// Modal Modifier un administrateur
setupModal(".modifier-container", ".modal-trigger-modifier");

// Modal Supprimer un administrateur
setupModal(".supprimer-container", ".modal-trigger-supprimer");


// Modal Modifier un Utilisateur
setupModal(".modifier-container-user", ".modal-trigger-modifier-user");

// Modal Supprimer un Utilisateur
setupModal(".supprimer-container-user", ".modal-trigger-supprimer-user");


